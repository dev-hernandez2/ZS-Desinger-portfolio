import Link from 'next/link'
import Project from '../../components/Project';
import ProjectFooter from '../../components/ProjectFooter';

const project = {
    logo: "",
    heroImage: "/static/assets/img/Bottom-Proyect-Skills.jpg",
    client: "Carlos “Skills” Rivera",
    roles: [
        "UX Designer",
        "UI Designer"

    ],
    responsibilities: [
        "Research", 
        "User Experience Design",
        "User Interface Design"
    ],
    firstP: [
        <p><a href="http://skillscreativestudios.com/" target="_blank" className="is-black-link"><u>Skills Creative Studios</u></a> and the Strategy-Driven Brand Consultancy Think Telic joined forces to take an Art Gallery online.</p>,
        <p>This Digital Art Space aims to be an extension of their physical location in Bayamon, Puerto Rico.</p>
    ],

    media: {
        isVideo: false,
        hasCredict: false,
        src: "/static/assets/img/cs-scs/SCSMU.jpg",
        credict:""
    },

    secondP: [
        <p>Designing a clean, elegant look was a must.  The  interface is very simple, yet the result is robust.  Building the experience in the art itself.</p>,
        <p>Breaking the typical gallery format resulted daring on aesthetics and effortless to use.</p>
    ],
    whatIdDo: {
        showSection: false,
    },
    imagesPresentation: {
            hasOnlyOneImage: true,
            src: [
                "/static/assets/img/cs-scs/sk-studio-web.jpeg",
                "/static/assets/img/Header-Proyect-Skills.jpg",
            ]
        },


    lastP: [
        <p>The web gallery seeks to reconstruct a positive space in times where negativity is abundant. Going beyond the physical limitations with the same consistent goal that made Skills Creative Studio possible: unifying people through art.</p>,
    ]

}

const ThinkTelic = () => (
    <>
        <Project project={project}/>
        <ProjectFooter project="SkillsCreativeStudios" />
    </>
)

export default ThinkTelic;

