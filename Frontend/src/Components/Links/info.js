import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './infoStyling.module.css';

const Info=()=>{
    const location=useLocation();
    const branch=useParams().branch;
    const query=new URLSearchParams(location.search);
    const subject=query.get('sub');
    const [books,setBooks]=useState([]);
    const [content,setContent]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:3010/content?sub=${subject}`).then((res)=>res.json()).then((res)=>setContent(res));
        fetch(`http://localhost:3010/books?sub=${subject}`).then((res)=>res.json()).then((res)=>setBooks(res));
    },[]);
    return(
        <div>
            <h1 className='text-center'>{subject+`(${content.courseName})`}</h1>
            <div className={`${styles.categoryCard}`}>
                <NavLink style={{textDecoration:'none'}} to={`/${branch}/${subject}?cat=books`} >
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <figcaption className={`text-center`}>Books</figcaption>
                </figure >
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={`/${branch}/${subject}?cat=notes`} className=''>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <p className={`text-center`}>Notes</p>
                </figure>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to={`/${branch}/${subject}?cat=papers`} className=''>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <p className={`text-center`}>Previous Year Papers</p>
                </figure>
                </NavLink>
            </div>

            {content.content&&content.content.length!==0&&<h4>Content of the Course</h4>}
            {content.content&&<ul>
                {content.content.map((item,ind)=>{
                if(item!=='')return (<li key={ind}>{item}</li>)
                return null;
            }
                )}
            </ul>}
            {books.length!==0&&<h4>Reference textBooks:</h4>}
            <ol>
                {books.map((book,ind)=><li key={ind}>{book.bookName}</li>)}
            </ol>
        </div>
    )
}
export default Info;