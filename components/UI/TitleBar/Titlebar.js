import React from 'react'
import styled from 'styled-components'

function Titlebar({title , subtitle}) {
    return (
        <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
        </TitleContainer>
    )
}

export default Titlebar

const TitleContainer = styled.div`
    margin: 20px;
`


const Title = styled.h1`
    margin : 0;
    padding : 0;
    font-size : 17px;
    color : #4B5563;

`

const SubTitle = styled.h1`
    margin : 0;
    padding : 0;
    font-size : 14px;
    font-weight : 400;
    color : #939DAE;

`