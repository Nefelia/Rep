import React from 'react';

const section = ({id, title, children}) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    );
};

export default section