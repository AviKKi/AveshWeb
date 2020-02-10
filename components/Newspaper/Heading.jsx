import React from 'react';

export function H1(props) {
    const { children, ...other } = props;
    return (
        <>
            <style jsx>{`
                @font-face{
                    font-family: 'HP';
                    src: url('../static/font/HARRYP__.TTF')
                }
                h1{
                    font-family: HP;
                    font-weight: 200;
                    letter-spacing: 0.15rem;
                    font-size: 4em;
                    margin: 10px 0px;
                }
            `}
            </style>
            <h1 {...other}>{props.children}</h1>
        </>
    )
}

export function H2(props){
    const { children, ...other } = props;
    return (
        <>
            <h2 {...other}>{props.children}</h2>

            <style jsx>{`
                @font-face{
                    font-family: 'HP';
                    src: url('../static/font/HARRYP__.TTF')
                }
                h2{
                    font-family: HP;
                    font-weight: 200;
                    letter-spacing: 0.05rem;
                    font-size: 2.8em;
                    margin: 0;
                }
            `}
            </style>
        </>
    )
}