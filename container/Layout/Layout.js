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
    width : 100vw;
    height : auto;
    background-color : #DDE4F0;
    display:flex;
    flex-direction : row;
    flex: 1 1 auto;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    color : rgba(0,0,0,0.7);
`
const Content = styled.div`
    display: flex;
    flex: 1 1 auto;
    height : auto;
    margin-left : 110px;
`