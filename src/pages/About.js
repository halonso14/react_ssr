import React from 'react';
import { useParams } from 'react-router';

const About = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>About</h2>
            {id}
        </div>
    );
};

export default About;