import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    max-width: 50%;
    width: 50%;
    margin: auto
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Container = styled.div`
    width: 500px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 1px 3px 10px;
    margin: 20px auto;
`
class ProjectActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            project: '',
            actions: []
         }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchProjectActions(id);
    }

    fetchProjectActions = async id => {
        const project = await axios.get(`http://localhost:8000/api/projects/${id}`);
        const actions = await axios.get(`http://localhost:8000/api/projects/${id}/actions`);
        this.setState({ 
            project: project.data.name,
            actions: actions.data
        });
    }

    render() { 
        console.log(this.state.project.actions);
        return (
            <ProjectsContainer>
                <h3>{this.state.project}</h3>
                {this.state.actions.map(action => {
                    return (
                        <Container key={action.id}>
                            {action.description}
                            <hr />
                            {action.notes}
                        </Container>
                    )
                })}
            </ProjectsContainer>
        );
    }
}
 
export default ProjectActions;