const express = require("express");
const db = require("./database");
const bcrypt=require('bcrypt');
const sendMail = require("./sendMail");
const uuid = require("uuid");
const JWT=require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = require("./file_upload");
const path=require('path');
const app = express();
const formidable=require('formidable');
const fs = require("fs");
const cors=require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({extended: false})); 
app.use(express.static(path.join(__dirname,'files')));
//TOKEN AUTHENTICATION
const authenticateToken = (request, response,next) => {
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      response.send({msg:"Invalid JWT Token"});
    } else {
      JWT.verify(jwtToken, "secret", async (error, payload) => {
        if (error) {
          response.status(401);
          response.send({msg:"Invalid JWT Token"});
        } else {
            request.emailId=payload.emailId;
            next();
        }
      });
    }
};

// app.get('/authenticate', authenticateToken);

//REGISTER USER API
app.post("/register/", async (request, response)=>{
    const {emailId, password} = request.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const selectUserQuery = `SELECT * FROM user WHERE emailId = '${emailId}'`;
    let result;
    let res;
    try{
        res=await db.execute(selectUserQuery);
    }catch(err){
        return response.status(500).json({msg:"Server Problem, Please try again later!"});
    }
        if(res[0].length==0){
            // await emailExistence.check(emailId, function(error, rsp){
            //     console.log('response: '+rsp);
            // });
            // const uniqueString = randString();
            // console.log(uniqueString);
            // const result = await sendMail(emailId, uniqueString);
            const userId = uuid.v4();
            console.log(userId);
            try{
                result = await sendMail(emailId, password, userId,'new');
            }catch(error){
                result=error;
            }
        }else{
            response.status(400);
            response.send({msg:"User already exists"});
            return;
        }
        response.send({msg:result});
})
app.get('/email',async(request,response)=>{
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      response.send({msg:"Please Login to continue!"});
    } else {
      JWT.verify(jwtToken, "secret", async (error, payload) => {
        if (error) {
          response.status(401);
          response.send({msg:"Please Login to continue!"});
        } else {
            request.emailId=payload.emailId;
            response.send({emailId:payload.emailId});
        }
      });
    }
})
//LOGIN API
app.post("/login/", async (request, response)=>{
    const { emailId, password } = request.body;
    const selectUserQuery = `SELECT * FROM user where emailId = '${emailId}'`;
    let res;
    try{
        res=await db.execute(selectUserQuery);
    }catch(err){
        return response.status(500).json({msg:"Server Problem, Please try again later!"});
    }
    const results=JSON.parse(JSON.stringify(res[0]));
        if(res[0].length==0){
            response.status(400);
            response.send({msg:"Invalid email id, Please provide registered email Id!"});
        } else{
            const isPasswordMatched =await bcrypt.compare(password, results[0].hashedPassword);
            if(isPasswordMatched===true){
                const token=JWT.sign({emailId},'secret');
                response.send({token});
            }else{
                response.status(400);
                response.send({msg:"Invalid Password"});
            }
        }
})

//EMAIL VERIFY API
app.post("/verify/:userId", async (request, response)=>{
    const {userId} = request.params;
    console.log(request.body);
    const {emailId, password} = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const selectUserQuery = `SELECT * FROM user WHERE userId = '${userId}'`;
    db.execute(selectUserQuery)
    .then(function(res){
        if(res[0].length===0){
            const createUserQuery = `INSERT INTO 
                                user (userId, emailId, hashedPassword)
                            VALUES ('${userId}', '${emailId}', '${hashedPassword}')`;
            db.execute(createUserQuery)
            .then(function(resp){
                console.log("Before sending response");
                response.redirect('http://localhost:3004/success/login');
            });
        }else{
            response.redirect("http://localhost:3004/login");
        }
    })
})

app.get('/books',async(req,res)=>{
    const {sub}=req.query;
    const query=`select bookName from books where subject='${sub}'`;
    const result=await db.execute(query);
    const results=JSON.parse(JSON.stringify(result[0]));
    res.send(results);
})

app.get('/content',async(req,res)=>{
    const {sub}=req.query;
    console.log(sub);
    const query=`select contents,courseName from content where subject='${sub}'`;
    const result=await db.execute(query);
    const results=JSON.parse(JSON.stringify(result[0]));
    res.send({courseName:results[0].courseName,content:results[0].contents.split('\n')});
})

app.get('/subjects',async(req,res)=>{
    const {sub}=req.query;
    let result;
    const query=`select subject,courseName from content where subject like '${sub}%'`;
    try{
        result=await db.execute(query);
    }catch(err){
        return res.status(500).json({msg:"Server Problem, Please try again later!"});
    }
    res.send(result[0]);
})

//FILE UPLOAD API
app.post("/upload", authenticateToken, async(req, res)=>{

    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {

        const {subject, category,filename} = fields;
        const emailId  = req.emailId;
        const currentFile = files["pdf-file"];
        var fileName = currentFile.name;
        const ext = path.extname(fileName);
        fileName = fileName.replace(ext, "");
        fileName = fileName.replace(/-/g, "_");
        var oldPath = currentFile.path;
        const file=`${fileName}-${uuid.v4()}${ext}`;
        var newPath = `files/${category}/${subject}/${file}`;
        var rawData = fs.readFileSync(oldPath);
        
        fs.writeFile(newPath, rawData, async function(err){
            if(err){
                console.log(err);
                return res.send({msg: "Error while uploading"});
            } else{
                const insertFilePathQuery = `INSERT INTO 
                                                file (emailId, subject,category, filePath,fileName, uploadedOn)
                                            VALUES ('${emailId}', '${subject}', '${category}', '${newPath}','${filename}' ,'${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`;
                try{
                    await db.execute(insertFilePathQuery);
                    return res.send({msg: "Successfully uploaded"});
                }catch(err){
                    return res.status(500).json({msg:"Server Problem, Please try again later!"});
                }
            }
            
        })
        
    });
})

//email-Verify API
app.post('/check-email',async(req,res)=>{
    const{emailId}=req.body;
    const query=`select * from user where emailId='${emailId}'`;
    let result
    try{
        result=await db.execute(query);
    }catch(err){
        return res.status(500).json({msg:"Server Problem, Please try again later!"});
    }
    if(result[0].length==0){
        return res.status(401).json({msg:'Please provide registered email Id'});
    }
     res.send({msg:true});
})

app.post("/update/", async (request, response)=>{
    const {emailId, password} = request.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
            const userId = uuid.v4();
            console.log(userId);
            try{
                result = await sendMail(emailId, password, userId, 'update');
            }catch(error){
                result=error;
            }
        response.send({msg:result});
})

app.post("/update/:userId", async (request, response)=>{
    const {userId} = request.params;
    console.log(request.body);
    const {emailId, password} = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const selectUserQuery = `update user set hashedPassword='${hashedPassword}' where emailId='${emailId}'`;
    await db.execute(selectUserQuery);
    response.redirect('http://localhost:3004/login');
})

app.get('/files',async(req,res)=>{
    const{sub,cat}=req.query;
    //console.log(sub,cat);
    //const result=await db.execute(`Select * from file where subject='${sub}' and category='${cat}'`);
    let result;
    try{
        result=await db.execute(`Select * from file where subject='${sub}' and category='${cat}'`);
    }catch(err){
        return res.status(500).json({msg:"Server Problem, Please try again later!"});
    }

    res.send(result[0]);
    //console.log(result[0]);
    
})

app.get('/pdf', function(req, res) {
    const {filePath}=req.query;
    res.download(path.join('.',filePath));
});

app.get('/filesbyemail',authenticateToken,async(req,res)=>{
    const emailId=req.emailId;
    let result;
    try{
        result=await db.execute(`Select filePath,uploadedOn,subject,category,fileName from file where emailId='${emailId}' order BY uploadedOn desc`);
    }catch(err){
        return res.status(500).json({msg:"Server Problem, Please try again later!"});
    }
    res.send(result[0]);
})
app.delete('/remove',authenticateToken,async(req,res)=>{
    const emailId=req.emailId;
    console.log('done');
    const {file}=req.query;
    fs.unlink(file,err=>console.log(err));
    const query=`DELETE FROM file where filePath='${file}'`;
    await db.execute(query);
    const result=await db.execute(`Select filePath,uploadedOn,subject,category from file where emailId='${emailId}' order BY uploadedOn`);
    res.send(result[0]);
})


app.listen(3010, ()=>{
    console.log("Server started at http://localhost:3010/")
})
