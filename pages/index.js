import Link from 'next/link'
import {APP_NAME, COMPANY_EMAIL} from "../config/stringConstant"
import "../resources/sass/styles.scss"

const Index = () => (
    <div>
        <ul>
            <li><Link href="/"><a></a></Link></li>
        </ul>
        <h1>{APP_NAME} BaseApp</h1>
        {COMPANY_EMAIL} 
        <img src="/static/homer-simpson.svg" alt="my image" />
    </div>
)


export default Index
