const multer = require("multer");
const uuid = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
    dest: (req, file, cb) => {
        cb(null, "files");
        const{name} = file;
        console.log(name);
        const exts = path.extname(name);
        console.log(exts);
        cb(null, "files");
    },
    // onError: function(error, next){
    //     console.log(error);
    //     next(error);
    // },
    filename: async (req, file, cb) => {
        const {name} = file;
        console.log(name);
        const ext = path.extname(name);
        var str = name;
        str = str.replace(ext, "");
        const filePath = `${str}-${uuid.v4()}${ext}`;
        //const filePath = `${str}-${uuid.v4()}`;
        cb(null, filePath);
        const dbFilePath = `files/notes/${filePath}`;
        const insertFilePathQuery = `INSERT INTO 
                                        file (filePath)
                                    VALUES ('${dbFilePath}')`;
        await db.execute(insertFilePathQuery);
        console.log("done");
    }
});

const upload = multer({storage}).single("note");

module.exports = upload;
