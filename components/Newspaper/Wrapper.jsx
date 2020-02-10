import React from 'react';

export default function Wrapper(props) {
    const { children, ...other } = props;
    const style = { ...styles.wrapper, ...props.style }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

const styles = {
    wrapper: {
        border: "2px solid black",
        backgroundImage: 'url("https://i.imgur.com/tYT34Ig.jpg")',
        boxShadow: '5px 5px',
        margin: "30px 0px",
        padding: "10px 20px",
        backgroundSize: 'cover',
        minHeight: '800px',
    },
}