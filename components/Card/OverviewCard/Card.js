// React
import React from 'react'

// Next 
import { useRouter } from 'next/router'


// Stylesheet
import styled from 'styled-components'
// Tiers Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 


function Card({icon , label, itemnumber ,redirect}) {
    const router = useRouter()

    return (
        <Container onClick={()=>redirect(label.toLowerCase())}>
            <Icon><FontAwesomeIcon icon={icon} size="lg"/></Icon> {/* Resources icon */}
            <Label>{label}</Label>
            <Number>{itemnumber}</Number>
        </Container>
    )
}

export default Card

const Container = styled.div`
    width :150px;
    height : 90px;
    margin : 10px 20px;
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