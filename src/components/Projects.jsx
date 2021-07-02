import React from 'react'
import sanityClient from '../client'
import { Link } from 'react-router-dom'
import '../components/css/Project.css'
export default function Projects() {
    const [projectData, setProjectData] = React.useState(null);

    console.log(projectData);
    React.useEffect(() => {
        sanityClient.fetch(`*[_type=="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="container">
            <div className="articles">
                {projectData && projectData.map((project, index) => (
                        <div className="project" key={index}>
                            <h2 className="title">{project.title}</h2>
                            <div className="row">
                                <span>{project.place}</span>
                                <span>{project.projectType}</span>
                            </div>
                            <div className="description">
                                <p>{project.description}</p>
                            </div>
                            <Link to={{pathname:project.link}} target="_blank" className="view-project">View project</Link>
                        </div>
                ))}
            </div>
        </div>
    )
}
