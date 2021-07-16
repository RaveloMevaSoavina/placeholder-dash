import React, { useState , useEffect} from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Blog({data, redirect, users , remove , edit}) {

    return (
        <Container>
            {data?.map(post=>
            <SinglePostContainer >
                    <button onClick={()=>remove(post.id)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                    <button onClick={()=>edit(post.id)}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>
                    <span>
                        <h3 onClick={()=>redirect(post.id)}>{post?.title?.charAt(0)?.toUpperCase() + post?.title?.slice(1)}</h3>
                    </span>
                    <Author >Edit by @{users?.filter(user => user?.id === post?.userId)[0]?.name}</Author>
                    {post.completed != undefined && <div test={post?.completed === true ? "complete" : "uncomplete"}>{post.completed == true ? "Complete" : "Uncomplete"}</div>}
                    {post.body != undefined && <p onClick={()=>redirect(post.id)}>{post?.body?.charAt(0)?.toUpperCase() + post?.body?.slice(1)}.</p>}
            </SinglePostContainer>
            )}
        </Container>
    )
}

export default Blog

const Container = styled.div`
    margin : 10px 20px; 
    display : flex;
    flex-direction : column;
    width : calc(100vh - 110px)
    flex-grow : 1;
`

const SinglePostContainer = styled.div`
    flex : 1;
    padding : 10px 20px;
    border-radius : 10px;
    cursor : pointer;
    background-color : #A8BADD;
    margin : 10px 20px; 
    h3{
        font-weight : 500;
        font-size : 14px;
        margin : 15px 0;
        width : 100%;
    }
    p{
        margin : 10px 0;
        font-size : 12px;

    }
    div{
        display : inline;
        font-size : 13px;
        background-color : ${props => (props.test !== "uncomplete" ? "green"  : "red")};
        color : #DDE4F0;
        padding : 5px 10px;
        border-radius : 5px;
        margin : 5px ;
    }
    button{
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
            color : #ff0055;
        }
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
