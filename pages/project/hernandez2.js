import Link from 'next/link'
import Project from '../../components/Project';
import ProjectFooter from '../../components/ProjectFooter';

const project = {
    logo: "",
    heroImage: "/static/assets/img/Header-Proyect-H2.jpg",
    client: "William Hernandez²",
    roles: [
        "Roles",
        "Brand Designer",
        "Visual Designer",
        "UX/UI Designer",
        "Copywriter"

    ],
    responsibilities: [
        "Research", 
        "Ideation", 
        "Brand Identity", 
        "Brand Voice", 
        "Content Creation", 
        "Business Collateral Design", 
        "User Experience Design",
        "User Interface Design"
    ],
    firstP: [
        <p>Development can be complicated.  Having a professional that understands how to choose the right stack and can code for the needs of the proyect at hand is a necesity.</p>,
        <p>William Hernandez² has work on a variety of scenarios.  Putting the buisnesses short and long term goals into perspective has allowed him to build different Digital Products.</p>
    ],

    media: {
        isVideo: false,
        hasCredict: false,
        src: "/static/assets/img/cs-h2/BSH2.jpg",
        credict:""
    },

    secondP: [
        <p>Developing an identity that would stand apart in such a big community was a challenge.  Especially when it was requested that just by looking at the icon, the line of work would be deduce.
        </p>
    ],
    whatIdDo: {
        showSection: true,
        hasBtn: false,
        btnHref: "",
        company: {
            color: "Hernandez2",
            isMedia: false,
            logo: "/static/assets/img/svg/ThinkTelic-Logo.svg",
            name: "{William Hernandez2}"
        },
        role: "Logo Design + Brand Development",
        description: `William has the same last name twice, being a math geek he came up with the square root
        reference while at college. I decided to use his analogy to embrace the nature of development
        as a whole. The brackets that surround the H are use to open and close programming
        commands in most languages, as such they're a recognizable symbol that need no meaning
        explanations in the development community.`
    },
    imagesPresentation: {
            hasOnlyOneImage: false,
            src: [
                "/static/assets/img/cs-h2/H2WEBMU.jpg",
                "/static/assets/img/cs-h2/H2WEBMUMov2.jpg",
                "/static/assets/img/cs-h2/Resume-H2.jpg",
                "/static/assets/img/Header-Proyect-H2.jpg"
            ]
        },


    lastP: [
        <p>The web portfolio for William was design with a clean aesthetic, as not to take away from his work.</p>,
        <p>I also designed the printed business collateral including a the resume, a contract, and mini business cards.</p>,

    ]

}

const ThinkTelic = () => (
    <>
        <Project project={project}/>
        <ProjectFooter project="Hernandez2" />
    </>
)

export default ThinkTelic;

