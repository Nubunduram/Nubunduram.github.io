// Project.tsx
import React from 'react';
import './_Project.scss';

interface ProjectProps {
    project: ProjectData;
}

interface ProjectData {
    title: string;
    details: string;
    stack: string[];
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    const { title, details, stack } = project;

    return (
        <div className="project" id='project'>
            <ul className="project__stack">
                {stack.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className="project__title">{title}</h3>
            <p className="project__detail">{details}</p>
            <p className="project__link"><span>Click to checkout !</span></p>
        </div>
    );
};

export default Project;
