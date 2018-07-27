import React from 'react';
import styled from 'styled-components';

const ProjContainer = styled.div`
    width: 600px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 1px 3px 10px;
    margin: 30px 0;
`

const Project = props => {
    return (
        <ProjContainer>
            {props.project.name}
            <hr/>
            {props.project.description}
        </ProjContainer>
    );
}

export default Project;