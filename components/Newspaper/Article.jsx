import { H2 } from './Heading'
import Cursive from './Cursive'

const Article = ({ videoSrc, title, content, ...other }) => (
    <div className="article" style={{padding: "10px 0px"}} {...other} >
        <video 
            muted 
            autoPlay 
            loop 
            style={{ float: 'left', marginRight: '10px' }} 
            src={videoSrc||"/static/videos/maze.mp4"} 
            height="150px" 
        />
        <H2><u>{title}</u></H2><br />
        <Cursive>
            {content}
        </Cursive>
    </div>)

export default Article