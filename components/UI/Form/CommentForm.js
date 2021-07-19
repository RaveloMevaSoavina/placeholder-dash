import React ,{useState} from 'react'

import styled from 'styled-components'

function CommentForm({id}) {
    const [mycomments , setMycomments]= useState({
        name : "Vero eaque aliquid doloribus et culpa",
        email : "Hayden@althea.biz",
        body : ""
    })

    const handlePushComments = (e,id) => {
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/1?_embed=comments`, {
            method: 'POST',
            body: JSON.stringify(mycomments),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

    }
    return (
        <Form>
            <TextArea type="text" placeholder="Enter your comments" onChange={(e)=> setMycomments(e.target.value)} value={mycomments.body}/>
            <button onClick={(e)=> handlePushComments(e,id)}>post</button>
        </Form>
    )
}

export default CommentForm


const Form = styled.form`
    display : flex;
    flex-direction : row;
    margin : 10px 20px 40px 20px;
    button{
        background-color : #1E3CBF;
        color : #DDE4F0;
        border : none;
        padding : 10px 20px;
        margin : 0 20px;
    }
`

const TextArea = styled.textarea`
width : 80%;
resize : none;
height : 40px;
`