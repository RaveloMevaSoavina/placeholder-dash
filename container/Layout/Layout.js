import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar'

function Layout({children}) {
    return (
        <LayoutContainter>
            <Sidebar/>
            <Content>
                {children}
            </Content>
        </LayoutContainter>
    )
}

export default Layout


const LayoutContainter = styled.div`
    width : 100%;
    height: 100%;
    background-color : #DDE4F0;
    display:flex;
    flex-direction : row;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    color : rgba(0,0,0,0.7);
`
const Content = styled.div`
    display: flex;
    flex-grow : 1;
    height : 100%;
    margin-left : 110px;
`