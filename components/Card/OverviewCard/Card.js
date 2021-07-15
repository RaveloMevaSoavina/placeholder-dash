import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component


function Card({icon , label, itemnumber}) {
    return (
        <Container>
            <Icon><FontAwesomeIcon icon={icon} size="lg"/></Icon>
            <Label>{label}</Label>
            <Number>{itemnumber}</Number>
        </Container>
    )
}

export default Card

const Container = styled.div`
    margin : 10px 20px;
    width :150px;
    height : 90px;
    background-color : #03060C;
    color : #DDE4F0;
    border-radius : 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
const Icon = styled.div`
    padding : 15px 20px 0  20px;
`

const Label = styled.p`
    font-size : 11px;
    padding : 5px 20px ;
`

const Number = styled.h4`
    padding : 0;
    margin; 0;
    position : relative;
    top : -45px;
    left : 100px;
`