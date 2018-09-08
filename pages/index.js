import Link from 'next/link'
import {APP_NAME, COMPANY_EMAIL} from "../config/stringConstant"

const Index = () => (
    <div>
       <h1 className="is-main-title m-b-20"> 
            Hi, I’m a <span className="highlight">Visual &#38; Brand Designer</span> focused on user interface and experience design.
       </h1>
       <h1 className="is-main-title">
            Take a look around, drop me <a href="#" className="is-black-link is-bold" ><u>a line</u></a>, check my Linked<a href="https://www.linkedin.com/in/zoraidasalcedo" className="is-black-link is-aileron-bold" target="_black"><u>in</u></a> or download my <a href="#" className="is-black-link is-bold"><u>CV</u></a>.
       </h1>
    
    </div>
)


export default Index
