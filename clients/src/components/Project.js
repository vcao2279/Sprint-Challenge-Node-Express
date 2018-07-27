import React from 'react';
import styled from 'styled-components';

const ProjContainer = styled.div`
    width: 600px;
    border: 2px solid #D5D8C5;
    padding: 10px;
    box-shadow: 1px 3px 10px;
    margin: 30px 0;
`
const Header = styled.span`
    font-weight: bold;
    font-family: 'Helvetica', sans-serif;
    font-size: 20px;
    color: #949FD3;
`

const Description = styled.span`
    font-size: 15px;
    font-style: italic;
    font-family: 'Helvetica', sans-serif;
    color: #566047;
`

const Project = props => {
    return (
        <ProjContainer>
            <Header>
                {props.project.name}
            </Header>
            <hr/>
            <Description>
                {props.project.description}
            </Description>
        </ProjContainer>
    );
}

export default Project;