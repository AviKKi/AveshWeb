import React from 'react';

export default function Hr(props) {
    const { children, ...other } = props;
    return (
        <>
            <style jsx>{`
                hr{
                    border: 1px solid black
                }
            `}
            </style>
            <hr />
        </>
    )
}