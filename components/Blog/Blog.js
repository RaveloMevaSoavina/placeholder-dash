import React, { useState , useEffect} from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Blog({id,title ,author, complete ,body,redirect, remove , edit , readOnly , isAtUserProfile}) {
    return (
            <SinglePostContainer>
                    {!readOnly &&<RemoveButton onClick={()=>remove(id)} className="remove">
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </RemoveButton>}
                    {!readOnly && <EditButton onClick={()=>edit(id)} color="edit">
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </EditButton>}
                    <h3 onClick={()=>redirect(id)}>{title}</h3>
                    {!isAtUserProfile &&<Author >Edit by @{author}</Author>}
                    {complete != undefined && 
                        <div 
                            style={{backgroundColor : complete ? "#1f9522" : "#d54141" , color : complete ? "white" : "black"}}
                            onClick={()=> complete = !complete}
                        >{complete ? "Complete" : "Uncomplete"}
                        </div>}
                    <p onClick={()=>redirect(id)}>{body != undefined ? body+"." : ""}</p>
            </SinglePostContainer>
    )
}

export default Blog

const SinglePostContainer = styled.div`
    padding : 10px 20px;
    border-radius : 10px;
    cursor : pointer;
    background-color : #A8BADD;
    margin : 10px 20px;
    width :96%;
    h3{
        font-weight : 500;
        font-size : 14px;
        margin : 15px 0;
    }
    p{
        margin : 10px 0;
        font-size : 12px;

    }
    div{
        display : inline-block;
        font-size : 13px;
        background-color : ${props => (!props.test ? "green"  : "red")};
        color : rgba(0,0,0,0.7);
        padding : 5px 10px;
        border-radius : 5px;
        margin : 5px ;
    }
    }
`

const Author = styled.span`
        font-size : 13px;
        background-color : #1E3CBF;
        color : #DDE4F0;
        padding : 5px 10px;
        border-radius : 5px;
        margin : 5px 0;
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

const EditButton = styled.button`
        float : right;
        background : none;
        border : none;
        cursor : pointer;
        border-radius : 50%;
        width : 30px;
        height : 30px;
        padding : 5px;
        outline : none;
        margin: 0 10px;
        &:hover{
            background-color : #FFF;
            color : green;
        }

`