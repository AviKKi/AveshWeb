import React from 'react'
import Wrapper from './Wrapper'
import { H1 } from './Heading'
import Article from './Article'

const Newspaper = ({ ribbon,articles, onClick }) => (
    <Wrapper style={styles.wrapper}>
        <H1 style={styles.heading}>
            <img src={ribbon} className='resizeImg'/>
        </H1>
        <div style={styles.mainContent}>
            {articles.map(artcl => <Article {...artcl} onClick={onClick.bind(this, artcl)} content={artcl.description} media={artcl.media} />)}
        </div>
        <style jsx>{`
            .resizeImg{
                height:150px;
                width:auto;
            }
            @media (max-width:1096px){
                .resizeImg{
                    width:75%;
                    height:auto;
                }
            }
            @media (max-width:768px){
                .resizeImg{
                    width:90%;
                    height:auto;
                }
            }
        `}</style>
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