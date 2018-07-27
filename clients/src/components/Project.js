import React from 'react';
import styled from 'styled-components';

const ProjContainer = styled.div`
    width: 600px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 1px 3px 10px;
    margin: 30px 0;
`
const Header = styled.span`
    font-weight: bold;
    font-family: 'Helvetica', sans-serif;
    font-size: 20px;
`

const Description = styled.span`
    font-size: 15px;
    font-style: italic;
    font-family: 'Helvetica', sans-serif;
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