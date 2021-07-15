import React ,{useState} from 'react'
import styled from 'styled-components'
import UserThumb from '../../components/UI/UserThumb/UserThumb'

function List({id , name , username,email, phone, posted, todos}) {
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
`