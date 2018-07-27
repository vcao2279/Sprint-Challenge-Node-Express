import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
                <h2>Project List</h2>
                <Container>
                    {this.state.projects.map(project =>
                        <Link key={project.id} to={`/projects/${project.id}`} style={{color: 'black', textDecoration: 'none'}}>
                            <Project project={project} />
                        </Link>
                    )}
                </Container>
            </div>
        );
    }
}
 
export default Projects;