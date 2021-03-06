import Link from 'next/link'
import Project from '../../components/Project';
import ProjectFooter from '../../components/ProjectFooter';
import Layout from '../../components/Layout'

const project = {
    logo: "",
    heroImage: "/static/assets/img/Header-Proyect-ThinkTelic.jpg",
    client: "Think Telic",
    roles: [
        "Brand Designer", 
        "Visual Designer", 
        "UX/UI Designer", 
        "Copywriter"
    ],
    responsibilities: [
        "Research", 
        "Ideation", 
        "Concept Creation", 
        "Brand Identity", 
        "Brand Voice", 
        "Content Creation", 
        "Business Collateral Design", 
        "User Experience Design",
        "User Interface Design"
    ],
    firstP: [
        <p>Branding can add value or it can be costly.  The right agency can make all the difference.</p>,
        <p><a href="https://www.thinktelic.com" target="_blank" className="is-black-link"><u>Think Telics'</u></a> goal is to protect businesses investment in the digital medium, simplifying their message, connecting them with their customers and growing their brand by creating delightful online experiences.</p>
    ],

    media: {
        isVideo: true,
        hasCredict: true,
        src: "https://player.vimeo.com/video/288643899",
        credict:`Think Telics' logo animatic by Luis "Keru" Ortiz`
    },

    secondP: [
        <p>Creating a complete and memorable experience for Think Telic started with the name, from there a visual system was established that  would earn this business a place at the forefront of Puerto Ricos' startup scene.</p>
    ],
    whatIdDo: {
        showSection: true,
        hasBtn: true,
        btnLink: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/ThinkTelic-BrandGuideSpecifications.pdf",
        company: {
            color: "ThinkTelic",
            isMedia: true,
            logo: "/static/assets/img/svg/ThinkTelic-Logo.svg",
            name: ""
        },
        role: "Naming + Logo Design + Brand Development",
        description: "Telic means doing something with a purposeful action, Think Telic means to think about doing something purposeful.  The icon is a defragmentation of a mathematical analogy: Think is less than (<) Telic; purpose is the key to all strategy."
    },
    imagesPresentation: {
            hasOnlyOneImage: false,
            src: [
                "/static/assets/img/cs-tt/TTBCMUW.jpg",
                "/static/assets/img/cs-tt/patters.jpeg",
                "/static/assets/img/cs-tt/Proposal-Template-TT.jpg",
                "/static/assets/img/cs-tt/tt-tablet.jpeg",
                "/static/assets/img/cs-tt/Bottom-Proyect-ThinkTelic.jpg"
            ]
        },


    lastP: [
        <p>All design that fallow is base on the identity. </p>,
        <p>Everything on the corporate website has its purpose and reason to be where it is, this website is constantly monitored and changed according to user behaviour.</p>,
        <p>Being able to contribute to a constantly evolving business is a challenging great deed, and a very instructive experience.</p>

    ]

}

const ThinkTelic = () => (
    <>
        <Project project={project}/>
        <ProjectFooter project="ThinkTelic" />
    </>
)

export default ThinkTelic;

