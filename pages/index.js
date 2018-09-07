import Link from 'next/link'
import {APP_NAME, COMPANY_EMAIL} from "../config/stringConstant"

const Index = () => (
    <div>
        <h1>{APP_NAME} <span className="highlight">The</span> BaseApp</h1>
        {COMPANY_EMAIL} 
    </div>
)


export default Index
