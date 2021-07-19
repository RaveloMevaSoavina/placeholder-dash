// React
import React from 'react'

// Stylesheet
import styled from 'styled-components';

// Internal Component
import Sidebar from './Sidebar/Sidebar'

// Composant pour former le layout dashboard
function Layout({children}) {
    return (
        <LayoutContainter>
            {/** Fixed Sidebar */}
            <Sidebar/>
            {/** Right content for all Page */}
            <Content>
                {children}
            </Content>
        </LayoutContainter>
    )
}

export default Layout


const LayoutContainter = styled.div`
    width : 100vw;
    min-height : 100vh;
    display:flex;
    flex-direction : row;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    color : rgba(0,0,0,0.7);
`
const Content = styled.div`
    height : auto;
    margin-left : 100px;
    // width : 100vw;
    background-color : #DDE4F0;
`