import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


function Form({setList , edit , editing}) {
    const [load , setLoad] = useState(false)
    const [post , setPost] = useState({
        id : uuidv4(),
        title : !editing ? "" : edit[0]?.title,
        body: !editing ? "" : edit[0]?.body,
        userId : !editing ? 10 :edit[0]?.userId
    });

    const HandleSubmit = (e) =>{
        e.preventDefault();
        fetch(!editing ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts/${edit[0]?.id}`, {
            method: !editing ? 'POST' : 'PUT',
            body: JSON.stringify({...post, userId : !editing ? 10 :edit[0]?.userId}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                setList(json)
                setPost({id : "", title : "", body : "" , userId : null});
            })
            .then(()=>setLoad(true))
            .then(()=>pushNotification()) 
    }

    useEffect(()=>{
        setPost({
            id : uuidv4(),
            title : !editing ? "" : edit[0]?.title,
            body: !editing ? "" : edit[0]?.body,
            userId : 10
        })
    },[edit])

    const pushNotification = () => setTimeout(()=>setLoad(false),2000)

    return (
        <FormContainer>
            <label>Title :</label>
            <input type="text" placeholder="Put your title here ..." onChange={(e)=>setPost({...post, title: e.target.value})} value={post.title}/>

            <label>Body :</label>
            <textarea rows="6" type="text" placeholder="Put your body content here ..." onChange={(e)=>setPost({...post, body: e.target.value})} value={post.body}/>
            <Button onClick={(e)=>HandleSubmit(e)}>Add</Button>
            {load && <span><FontAwesomeIcon icon={faCheckCircle}/> Post added! (au 11e pagination)</span>}
        </FormContainer>
    )
}

export default Form;

const FormContainer = styled.form`
    display : flex;
    flex-direction : column;
    flex-grow : 1;
    margin : 0 20px;
    padding : 0 20px;
    label{
        margin: 10px 0;
    }
    input{
        height: 40px;
        padding : 0 20px;
        outline : none;
        border : none;
        font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    }
    textarea{
        padding : 10px 20px;
        outline : none;
        border : none;
        resize : none;
        font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
        font-size : 13px;
    }
    span{
        border : 2px solid #FFF;
        background-color : #78ab78;
        padding : 10px 20px;
    }

`

const Button = styled.button`
    padding : 10px 20px;
    background-color : #03060C;
        color : #939DAE;
    border : none;
    margin : 10px 0;
    cursor : pointer;
    outline : none;
    span{
        margin-left :10px;
    }
    &:hover{
        background-color : #1E3CBF;
        color : #DDE4F0;
        
    }
`