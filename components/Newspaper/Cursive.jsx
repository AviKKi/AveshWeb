import React from 'react';

export default function Cursive(props) {
    const { children, ...other } = props;
    return (
        <>
            <style jsx>{`
                @font-face {
                    font-family: 'Satisfy';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Satisfy Regular'), local('Satisfy-Regular'), url(https://fonts.gstatic.com/s/satisfy/v10/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                p {
                    margin: 0;
                    font-family: Satisfy;
                    font-size: 25px;
                }
            `}
            </style>
            <p>{props.children}</p>
        </>
    )
}