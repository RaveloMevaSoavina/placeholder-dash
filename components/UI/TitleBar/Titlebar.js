// React
import React from 'react'
// Stylesheet
import styled from 'styled-components'


// COMPONENT REUSEABLE Titlebar
const Titlebar = ({title , subtitle}) => {
    return (
        <TitleContainer>
            {/* TITRE DE PREMIER NIVEAU OVERVIEW */}
                <Title>{title}</Title>
            {/* TITRE DE DEUXIEME NIVEAU OVERVIEW */}
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