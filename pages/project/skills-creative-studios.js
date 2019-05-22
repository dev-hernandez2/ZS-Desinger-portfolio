import Link from "next/link";
import CaseStudy from "../../components/CaseStudy";
import ProjectFooter from "../../components/ProjectFooter";
import Layout from "../../components/Layout";

const project = {
  title: [
    <h1 className="is-main-title m-b-20">
      Building <span className="highlight">Skills Creative Studios</span>{" "}
      Portfolio.
    </h1>
  ],

  about: [
    <p className="is-size-4 aileron-bold">
      Now one of the leading art galleries in Bayamon, Puerto Rico; Skills
      Creative Studios understood from the start that to go global a digital
      presence was essential.
    </p>,
    <p className="is-size-4 aileron-bold">
      This digital space aims to be an extension of their physical location.
      Giving art the prominence it deserves on all endeavors.
    </p>
  ],
  details: {
    team: "Product Designer, Full-Stack Developer",
    duration: "1 Month (Sep - Nov 2017)",
    responsibilities: "Research, Structure, UX and UI Design",
    contribution: "Sitemap, Wireframes, UX|UI Design",
    challenge:
      "Provide a digital extension for the art gallery, create brand recognition, and promote not only art, but artist",
    tools: "Pen and paper, Figma, Adobe Suite"
  },

  background: [
    <p>
      There was an existing physical space and two social media sites when the
      request to build this website was made. References from different art
      sites and artist portfolios where given.
    </p>,
    <p>
      It was asked from me to design something that looked original and pleased
      the audience they already had. This audience is mostly tattoo enthusiast
      who do not know much about fine-arts.
    </p>
  ],

  theProblem: [
    <p>
      The request was made after hurricane Maria hit Puerto Rico, with no power
      nor internet access, it was a very difficult task. Many sketches were made
      and lost. A lot of trips where given in search of power outlets and wi-fi.
    </p>,
    <p>
      The website needed to be done before the gallery grand opening, which was
      to be the first art exhibit after the storm on the entire island.
    </p>
  ],

  discovery:
    "There was a need to do a deep dive to understand the audience, end users, and the art market.",

  steps: {
    one:
      "I conducted interviews with the owner, his assistants, and fellow artist who were part of the ecosystem. I also used their Facebook data to understand their audience and used this to define the flow of the site.",
    two:
      "A survey was conducted to define if it was better to focus on the owner or the studio, the studio won.",
    three:
      "The offerings of competitors helped us understand the key differentiators that made Skills Creative Studios unique. The peoples’ involvement became it."
  },

  uxDesign: [
    <p>
      The main focus is art. From the moment the user arrives, it doesn’t matter
      wish section the user chooses but what they experience while getting
      there.
    </p>
  ],
  map: [
    <h3 className="is-size-4 aileron-bold ">Sitemap</h3>,
    <p>
      I separated out each feature according to the different art forms and
      information. The final sitemap is bellow.
    </p>
  ],
  mapImg: {
    src:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-Sitemap.jpg"
  },

  wireframes: {
    body:
      "The functionality of the site was addressed in wireframes, this highlighted the art people would be familiar with. And define wish was the best method to get the fill of a gallery.",
    imgs: [
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-Wireframe-Process.jpg"
    ]
  },

  visualDesign: {
    body:
      "Designing a clean, elegant look was a must. The interface is very simple, yet the result is robust, building the experience in the art itself. The design emphasizes values such as daring, supportive, creative, and independent. I went with the fonts Muli, the thick slab serif conveys a strong stableness for the headers while easy to read on computer screens as well as print. The colors green, pink, yellow, and the neutral blues offer a sense of artsy ambiance. I relied heavily on the art to tell the story along with the concise copy."
  },

  notShow: true,

  visuals: {
    src:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-UI-Desing.jpg"
  },

  outcomes: [
    <p>
      The website satisfies and solves all concerns that existed around the
      projection of what Skills Creative Studios is and will grow to be.
      Creating a base from which other platforms are nourished. Breaking the
      typical gallery format resulted in daring on aesthetics and effortless to
      use.
    </p>,
    <p>
      The web gallery seeks to reconstruct a positive space in times where
      negativity is abundant. Going beyond the physical limitations with the
      same consistent goal that made Skills Creative Studio possible: unifying
      people through art.
    </p>
  ],

  linkCard: {
    img:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-View-Site.jpg",
    body: "Click the button below to see the project live.",
    linkTxt: "visit the website",
    linkHref: "http://skillscreativestudios.com/"
  }
};

const Skills = () => (
  <>
    <CaseStudy project={project} />
    <ProjectFooter project="SkillsCreativeStudios" />
  </>
);

export default Skills;
