import Link from 'next/link'
import ProjectFooter from '../../components/ProjectFooter'
import ProjectSlider from '../../components/ProjectSlider'
import Layout from '../../components/Layout'


const polybits = {
    client: "Polybits",
    roles: [
        "Brand Designer", 
        "Visual Designer"
    ],
    responsibilities: [
        "Research", 
        "Ideation", 
        "Concept Creation", 
        "Brand Identity",  
        "Business Collateral Design", 
    
    ],

    firstP: [
        <p>Logo Design and Branding for an organization that aims to be a bridge between different technology leaders, where the community of developers can take advantage of shared goals:  learn and improve.
        </p>,
        <p>The structure for the logo comes from the defragmentation of the name: Poly coming from polygon, a plane figure; and Bits wish in larger digits are bytes that can be interpreted as 3D figures since they are a combination of fours' or eights', meaning: cubes.
        </p>
    ],
    carousel: [
        {src: "/static/assets/img/colletions/Polybits/1-POLYMU.jpg", alt: ""},
        {src: "/static/assets/img/colletions/Polybits/2-POLYMUTS.jpg", alt: ""},
        {src: "/static/assets/img/colletions/Polybits/3-POLYMUFY.jpg", alt: ""}
    ]

}


const tttext = `The icon is a defragmentation of a mathematical analogy: Think is less than (<) Telic; purpose is the key to all strategy.  From there a visual system was established, being able to contribute with a startup has been a challenging great deed, and a very instructive experience.`;

const thinkTelic = {
    client: "Think Telic",
    roles: [
        "Brand Designer",
        "Visual Designer",
        "UX Designer",
        "UI Designer"
    ],
    responsibilities: [
        "Research", 
        "Ideation",      
        "Concept Creation" ,
        "Brand Identity",
        "Business Collateral Design",
        "UX and UI"
    
    ],

    firstP: [
        <p>Logo Design, Branding, Collateral and Digital Applications for this firm started by developing an identity, that started with their name. Telic means doing something with a purposeful action, Think Telic means to think about doing something purposeful.</p>,
        <p>
            {tttext}
        </p>
    ],
    carousel: [
        {src: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/ThinkTelic-Collection/1-ThinkTelic-Icon.jpg", alt: ""},
        {src: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/ThinkTelic-Collection/2-ThinkTelic-BC.jpg", alt: ""},
        {src: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/ThinkTelic-Collection/3-ThinkTelic-Web.jpg", alt: ""},
        {src: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/ThinkTelic-Collection/4-ThinkTelic-LogoW.jpg", alt: ""}
    ]

}


const PrimitivoMarchandSchool = {
    client: "Primitivo Marchand School",
    roles: [
        "Brand Designer", 
        "Visual Designer"
    ],
    responsibilities: [
        "Research",  
        "Ideation",
        "Concept Creation",   
        "Brand Identity",     
        "Uniform Application"
    ],

    firstP: [
        <p>Logo Design and Uniform Application as donation for Primitivo Marchand a small  Community School.
        </p>,
        <p>
            The logo celebrates the Puerto Rican culture, with the coqui taino representing the children and the colors taken from the flag.  The logo sits right above the heart in the uniform. 

        </p>
    ],
    carousel: [
        {src: "/static/assets/img/colletions/Primitivo/1-Primitivo-Official-Logo.jpg", alt: ""},
        {src: "/static/assets/img/colletions/Primitivo/2-Primitivo-Logo-Varietion.jpg", alt: ""},
        {src: "/static/assets/img/colletions/Primitivo/3-Primitivo-Uniform.jpg", alt: ""}
    ]

}

const VirgilioQuiñones = {
    client: "Virgilio Quiñones",
    roles: [
        "Brand Designer", 
        "Visual Designer"
    ],
    responsibilities: [
        "Research",  
        "Ideation",
        "Concept Creation",   
        "Brand Identity",     
        "Uniform Application"

    
    ],

    firstP: [
        <p>Logo Design and Branding for a freelance mechanic, who understand that image can impact your income.
        </p>,
        <p>
          The acronym for Virgil Auto Repair was chosen to focus on a simple pronusiation on multimple languages.  The detail on the A of the logo is a piston,  as to imply the line of work without having access to the whole name.  The V was shortened to complete a sigle image with the A, as was the R.  The result is a simple an versatile logo, thats recognizable and works in multiple sizes.  The second version was design to take advantage in larger prints and implise Virgils' speciality on high performance cars. 
        </p>
    ],
    carousel: [
        {src: "/static/assets/img/colletions/VAR/1-VAR-LOGO.jpg", alt: ""},
        {src: "/static/assets/img/colletions/VAR/2-VAR-LOGO.jpg", alt: ""},
        {src: "/static/assets/img/colletions/VAR/3-VAR-Collaterals.jpg", alt: ""}
    ]

}


const ThinkTelic = () => (
    <section className="section">
        <header className="m-b-150 columns is-mobile bottom-highlight">
            <div class="column is-half-widescreen is-three-quarters-mobile">
                <h1 className="is-main-title m-b-20"> 
                    Identity <span className="highlight">&#38;</span> Designs Selected Work
                </h1>
            </div>
        </header>
        <section className="bottom-highlight m-t-50">
            <h2 className="highlight is-sub-title is-bold p-l-100">Polybits</h2>
            <ProjectSlider project={polybits} />
        </section>
        <section className="bottom-highlight m-t-50">
            <h2 className="highlight is-sub-title is-bold p-l-100">Think Telic</h2>
            <ProjectSlider project={thinkTelic} />
        </section>
        <section className="bottom-highlight m-t-50">
            <h2 className="highlight is-sub-title is-bold p-l-100">Primitivo Marchand</h2>
            <ProjectSlider project={PrimitivoMarchandSchool} />
        </section>
        <section className="bottom-highlight m-t-50">
            <h2 className="highlight is-sub-title is-bold p-l-100">VAR</h2>
            <ProjectSlider project={VirgilioQuiñones} />
        </section>
        <ProjectFooter project="Identities&Designs" />
    </section>
)

export default ThinkTelic;

