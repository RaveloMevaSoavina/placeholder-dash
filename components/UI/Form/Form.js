import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

function Form({setList}) {
    const [post , setPost] = useState({
        id : uuidv4(),
        title : "",
        body: ""
    });

    const HandleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({...post}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                setList(json)
                setPost({id : "", title : "", body : ""});
            });
    }

    return (
        <FormContainer>
            <label>Title :</label>
            <input type="text" placeholder="Title" onChange={(e)=>setPost({...post, title: e.target.value})}/>

            <label>body :</label>
            <textarea type="text" placeholder="body" onChange={(e)=>setPost({...post, body: e.target.value})}/>
            <Button onClick={(e)=>HandleSubmit(e)}>Add</Button>
        </FormContainer>
    )
}

export default Form;

const FormContainer = styled.form`
width : 90%;
display : flex;
flex-direction : column;
padding : 10px 20px ;
margin : 0 20px ;
label{
    margin: 10px 0;
}
input{
    height: 50px;
    padding : 0 20px;
    outline : none;
}

`

const Button = styled.button`
    padding : 10px 20px;
    background-color : rgba(232,232,252);
    border : none;
    margin : 10px 0;
    cursor : pointer;
    span{
        margin-left :10px;
    }
    &:hover{
        background-color : rgba(140,140,252);
    }
`