import React, { useState , useEffect} from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Blog({data, redirect}) {
    const [img , setImg] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => setImg(json));
    },[]);
    

    return (
        <Container>
            {data?.map(post=>
            <SinglePostContainer onClick={()=>redirect(post.id)}>
                <Image alt='nothing' src={img.filter(image => image.id === post.id)[0]?.url}/>
                <span>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </span>
            </SinglePostContainer>
            )}
        </Container>
    )
}

export default Blog


const Image = styled.img`
    width : 200px;
    height : 100px;
`


const Container = styled.div`
    margin : 20px;
    padding : 20px;
    
`



const SinglePostContainer = styled.div`
    display : flex;
    flex-direction : row;
    padding : 10px 20px ;
    cursor : pointer;
    background-color : rgba(232,232,252);
    border-bottom : 1px solid rgba(0,0,0,0.09);
    transition : 1s width ease;
    margin : 20px 10px; 
    &:hover{
        background-color : rgba(196,144,231, 0.2);
    }
    h3{
        font-weight : 500;
        font-size : 15px;
        margin : 0;
        padding : 5px;
    }
    p{
        margin : 0;
        padding : 5px;
        font-size : 13px;

    }
    span{
        margin-left : 30px;
    }
    button{
        position : absolute;
        right : 210px;
        text-align : right;
        background : none;
        border : none;
        cursor : pointer;
    }
    }
`
