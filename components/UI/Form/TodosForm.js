import { useEffect, useState } from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { v4 } from 'uuid';


function Form({setList , edit, editing}) {
    const [load , setLoad] = useState(false)
    const [post , setPost] = useState({
        title : !editing ? "" : edit[0]?.title ,
        userId : 10,
        id : !editing ? v4() : edit[0]?.id
    });

    console.log(editing);

    const HandleSubmit = (e) =>{
        e.preventDefault();
        (fetch(!editing ? 'https://jsonplaceholder.typicode.com/todos' : `https://jsonplaceholder.typicode.com/todos/${edit[0]?.id}`, {
            method: !editing ? 'POST' : 'PUT',
            body: JSON.stringify({...post , userId : 10}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                setList(json);
            })
            // .then(()=>setPost({id : "", title : "", userId : null}))
            .then(()=> setLoad(true))) 
    }

    return (
        <FormContainer>
            <label>Title :</label>
            <input type="text" placeholder="Put your title here ..." onChange={(e)=>setPost({...post, title: e.target.value})} value={post.title}/>
            <Button onClick={(e)=>HandleSubmit(e)}>Add</Button>
            {load && <span><FontAwesomeIcon icon={faCheckCircle}/> Todos {edit == [] ? "added!(au 20e pagination)" : "updated"} </span>}
        </FormContainer>
    )
}

export default Form;

const FormContainer = styled.form`
    display : flex;
    flex-direction : column;
    width : 400px;
    margin : -20px auto;
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
    span{
        margin-left :10px;
    }
    &:hover{
        background-color : #1E3CBF;
        color : #DDE4F0;
        
    }
`