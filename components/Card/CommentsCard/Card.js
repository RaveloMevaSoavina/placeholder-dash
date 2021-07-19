import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Card({id ,name , email, body , onRemove}) {
    return (
        <Container>
            <RemoveButton onClick={()=>onRemove(id)} className="remove">
                        <FontAwesomeIcon icon={faTrashAlt}/>
            </RemoveButton>
            <Name>{name}</Name>
            <Email>{email}</Email>
            <p>{body}</p>
        </Container>
    )
}

export default Card


const Container = styled.div`
    width : 100%;
    height: 100%;
    padding : 10px;
    margin : 10px 0;
    p{
        margin : 5px 0;
    }
`
const Name = styled.div`
    font-size : 15px;
    font-weight : 700;
`

const Email = styled.span`
    font-size : 13px;
    font-weight : 400;
    font-style : italic;

`

const RemoveButton = styled.button`
        float : right;
        background : none;
        border : none;
        cursor : pointer;
        border-radius : 50%;
        width : 30px;
        height : 30px;
        padding : 5px;
        outline : none;
        
        &:hover{
            background-color : #FFF;
            color : red;
        }

`