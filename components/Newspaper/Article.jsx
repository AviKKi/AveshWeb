import { H2 } from './Heading'
import Cursive from './Cursive'

const isVideo = url=>(url.slice(-3) === "mp4")

const Article = ({ videoSrc, title, content, media, ...other }) => (
    <div className="article" style={{padding: "10px 0px", cursor: 'pointer', borderBottom: '1px solid grey'}} {...other} >
        
        <H2><u>{title}</u></H2><br />
        {isVideo(media)?
        <video 
            muted 
            autoPlay 
            loop 
            src={media} 
            className='resizeMedia'
        />:
            <img 
            src={media} 
            className='resizeMedia'
        />
        }
        <Cursive>
            {content}<strong style={{fontSize:'1rem', fontFamily:'Helvetica',color: ''}}>more...</strong>
        </Cursive>
        <style>{`
            .resizeMedia{
                float:left;
                margin-right:10px;
                height:120px;
                width:auto;
            }
            @media (max-width:768px){
                .resizeMedia{
                    width:60%;
                }
            }
            @media (max-width:440px){
                .resizeMedia{
                    width:100%;
                }
            }
        `}</style>
    </div>)

export default Article