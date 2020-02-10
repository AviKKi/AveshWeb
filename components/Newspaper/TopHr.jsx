import React from 'react'
const childrens = [
    <hr style={{ borderTop: "3px solid black ", margin: 0, padding: 0, borderBottom: 'none' }} />,
    <hr style={{ borderTop: "1px solid black ", margin: '2px', padding: 0, borderBottom: 'none' }} />,
]

const TopHr = ({ reverse }) => reverse ? childrens: childrens.reverse()  

export default TopHr