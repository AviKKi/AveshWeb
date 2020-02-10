import React from 'react'
import Wrapper from './Wrapper'
import { H1 } from './Heading'
import Article from './Article'

const Newspaper = ({ articles, onClick }) => (
    <Wrapper style={styles.wrapper}>
        <H1 style={styles.heading}>
            <img height="150px" src="../static/img/ribbon_robotics.png" />
        </H1>
        <div style={styles.mainContent}>
            {articles.map(artcl => <Article {...artcl} onClick={onClick.bind(this, artcl)} content={artcl.description} />)}
        </div>
    </Wrapper>
)

const styles = {
    wrapper: {
        overflow: 'hidden',
        position: 'relative',
        width: "100%",
    },
    heading: {
        textAlign: "center",
        flex: 5
    },
    mainContent: {
        border: '1px solid black',
        padding: '30px 30px',
        left: '0',
        marginRight: '10px',
        marginLeft: '10px',
    }

}

export default Newspaper