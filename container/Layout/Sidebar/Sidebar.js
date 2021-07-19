
import Link from 'next/link'
import React from 'react';
import styled from 'styled-components'
import {menuitems} from './Sidebaritems';

function Sidebar() {
    return (
        <Container>
            <Logo src={`http://localhost:3000/assets/images/shazam.png`} alt="Logo"/>
                <ItemList>
                {
                    menuitems.map((item,index) => 
                    <Link key={index} href={item.redirect}>
                        <Item >
                            <Icon>{item.icon}</Icon>
                            <span>{item.label}</span>
                        </Item>
                    </Link>
                    )
                }
                </ItemList>
        </Container>
    )
}

export default Sidebar;

const Logo = styled.img`
    margin : 20px;
    width : 50px;
    padding : 10px 0;
    
`
const Container = styled.div`
    height : 100vh;
    width : 100px;
    background-color : #03060C;
    color : #939DAE;
    position : fixed;
    

`
const ItemList = styled.ul`
    margin : 20px 0px;
    padding : 0;
`
const Item = styled.li`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    list-style : none;
    padding : 10px 20px;
    margin : 10px 0px;
    cursor : pointer;
    font-size : 12px;
    margin-left : 3px;
    &:hover{
        background-color : rgba(255,255,255, 0.09);
        color : #DDE4F0;
        border-left : 3px solid #DDE4F0;
    }

`

const Icon = styled.i`
    width : 20px ;
    margin-bottom : 10px;
`