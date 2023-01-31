import React from 'react'

import { useEffect, useState } from "react"
//import { isHtmlElement } from "react-router-dom/dist/dom";


const DarwComment = (props) => {
    return (
        <div className='single-comment' data-id={props.id}>
            <div className='comment-grid'>
                <div className='avatar'></div>
                <div>
                <span className='username'>{props.username}</span>
                <div>{props.body}</div>
                </div>
            </div>
        </div>
    )
}
const Comment = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState(null)
    // console.log(`Render Running` ,error)
    // const fetchData = () => {
    //   return fetch("https://dummyjson.com/comments")
    //         .then((response) => response.json())
    //         .then((data) => {setUser(data); setError(null)})
    //         .catch(e=> {
    //             setError(`${e}`)
    //         })
    // }
  
    // useEffect(() => {
    //   fetchData();
    // }, [])


if(!error){
    return (
       //console.log('Loaded sucessfully'),
        user.comments && user.comments.length > 0 && user.comments.map((comment, i) => {
                    //console.log(comment)
                    return <DarwComment 
                    id={comment.id} 
                    username={comment.user.username} 
                    body={comment.body} 
                    key={i} />
                })
      //  console.log(user.comments)
    )
}
else{
    return (
        <div>Error while loading comments: {error}</div>
    )
}


}
console.log(new React.Component())
export default Comment