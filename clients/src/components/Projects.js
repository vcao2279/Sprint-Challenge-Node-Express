import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Project from './Project';

const Container = styled.div`
    max-width: 60%;
    width: 60%;
    margin: auto
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Header = styled.h1`
    margin: 0;
    padding-top: 20px;
`

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.fetchData('http://localhost:8000/api/projects');
    }

    fetchData = async (URL) => {
        const response = await axios.get(URL);
        this.setState({
            projects: response.data
        });
    }


    render() {
        return (
            <div>
                <Header>Project Link</Header>
                <Container>
                    {this.state.projects.map(project =>
                        <Project project={project} key={project.id}/>
                    )}
                </Container>
            </div>
        );
    }
}

export default Projects;