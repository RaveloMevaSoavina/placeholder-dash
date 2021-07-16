import React ,{useState} from 'react'
import styled from 'styled-components'
import UserThumb from '../../components/UI/UserThumb/UserThumb'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


function List({id , name , username,email, phone, posted, todos , remove}) {
    return (
        <Container >
            <tr>
                <Item>
                    <UserThumb name={name.split(" ").splice(0,2).map((n)=>n[0]).join("")}/>
                </Item>
                <Item>{username}</Item>
                <Item>{email}</Item>
                <Item>{phone.split(" ")[0]}</Item>
                <Item> {posted?.filter(post=> post.userId == id).length} posts</Item>
                <Item> {todos?.filter(todo=> todo.userId == id).length} todos</Item>
                <Item>
                    <button onClick={()=>remove(id)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </Item>
            </tr>
        </Container>
    )
}

export default List

const Container = styled.table`
    width : 100%;
    table-layout: fixed;
    font-size : 12px;
    padding : 5px 20px ;
    &:hover{
        background-color : #939DAE ;
        border-radius : 10px;
    }
`

const Item = styled.td`
    text-align : left;
    span{
        margin-left : 20px;
    }
    button{
        background : none;
        border : none;
        cursor : pointer;
        border-radius : 50%;
        width : 30px;
        height : 30px;
        padding : 5px;
        &:hover{
            background-color : #FFF;
            color : #ff0055;
        }
`