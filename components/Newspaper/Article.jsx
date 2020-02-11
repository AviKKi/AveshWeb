import { H2 } from './Heading'
import Cursive from './Cursive'

const isVideo = url=>(url.slice(-3) === "mp4")

const Article = ({ videoSrc, title, content, media, ...other }) => (
    <div className="article" style={{padding: "10px 0px", cursor: 'pointer', borderBottom: '1px solid grey'}} {...other} >
        
        <H2><u>{title}</u></H2><br />
        {console.log(isVideo("123.mp4"))}
        {isVideo(media)?
        <video 
            muted 
            autoPlay 
            loop 
            style={{ float: 'left', marginRight: '10px' }} 
            src={media} 
            height="120px" 
        />:
            <img 
            src={media} 
            height='120px' 
            style={{ float: 'left', marginRight: '10px' }}
        />
        }
        <Cursive>
            {content}<strong style={{fontSize:'1rem', fontFamily:'Helvetica',color: ''}}>more...</strong>
        </Cursive>
    </div>)

export default Article