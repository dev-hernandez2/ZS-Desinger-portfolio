import Link from "next/link";
import CaseStudy from "../../components/CaseStudy";
import ProjectFooter from "../../components/ProjectFooter";
import Layout from "../../components/Layout";

const project = {
  title: [
    <h1 className="is-main-title m-b-20">
     Building <span className="highlight">Hernandez2 </span> Portfolio.
    </h1>
  ],

  about: [
    <p className="is-size-4 aileron-bold">
      William Hernandez² has worked as a Full-Stack Developer for various companies. Work is abundant when people know who you are, and what you can do. But Hernandez² was moving away from home, and he knew, without a portfolio, he wouldn't get far.
    </p>,
    <p className="is-size-4 aileron-bold">
      In the end, more than a portfolio was developed, and he got a job within three months.
    </p>
  ],
  details: {
    team: "Product Designer, Full-Stack Developer",
    duration: "2 Weeks (Jan 2018)",
    responsibilities: "Research, Structure, Brand, UX and UI Design",
    contribution:
      "Brand Identity, Copywriting, Sitemap, Wireframes, UX|UI Design",
    challenge:
      "Distinguish his best work, develop a recognizable brand and collaterals that would help him get noticed",
    tools: "Pen and paper, Figma, Adobe Suite"
  },

  background: [
    <p>
      After a meeting, hours of discussion, and a written plan in a napkin, I started designing a portfolio that was simple to use and focused on recruiters looking for new talent.
    </p>
  ],

  theProblem: [
    <p>
      Being able to always get work by references and word-of-mouth, meant that there was no point in developing a brand. When Hernandez² realized he couldn't go further in his career in his home country, he decided to go on an adventure.
    </p>,
    <p>
      But he didn't have a place where he could showcase what he had done and prove he deserved an opportunity.
    </p>
  ],

  discovery: "I conducted a discovery session with Hernandez² to define the goals of the site and reviewed examples of his liking.",

  steps: {
    one:
      "I researched other developers portfolios, development sites, and job posting sites to understand what companies were looking for and cared about when looking for a potential employee.",
    two:
      "It was clear we couldn't start from scratch, a brand needed to be developed for Hernandez² to stand-out.",
    three:
      "Based on research three projects were selected. A contact table and must have social platforms were set at the footer for quick access. An about area and blog were also added."
  },

  uxDesign: [
    <p>
      The site was designed with a clean aesthetic, as not to take away from his work. Focusing on simple navigation so that recruiters and hiring managers could find what they needed.
    </p>
  ],
  map: [
    <h3 className="is-size-4 aileron-bold ">Sitemap</h3>,
    <p>
      The final sitemap is bellow, as mention, the focus is on simple navigation.
    </p>
  ],
  mapImg: {
    src:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Flowmap.jpg"
  },

  wireframes: {
    body:  "There were many iterations on paper, this saved time and helped define style and function.",
    imgs: [
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Sketch-1.jpg",
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Sketch-2.jpg",
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Sketch-3.jpg"
    ]
  },

  visualDesign: {
    body: "An identity that would stand apart in such a big community was a challenge. Especially when it was requested that just by looking at the icon, the line of work would be deduced."
  },

  whatIdDo: {
    showSection: true,
    hasBtn: false,
    btnHref: "",
    company: {
        color: "Hernandez2",
        isMedia: true,
        logo: "/static/assets/img/cs-h2/WilliamH2.svg",
        name: "{William Hernandez2}"
    },
    role: "Logo Design + Brand Development",
    description: [
      <p>William has the same last name twice, being a math geek he came up with the square root
      reference while at college. I decided to use his analogy to embrace the nature of development
      as a whole. The brackets that surround the H are use to open and close programming
      commands in most languages, as such they're a recognizable symbol that need no meaning
      explanations in the development community.</p>,
      <p>
        I also designed the printed business collateral including his resume, a contract, and mini business cards.
      </p>
    ]
},

  imagesPresentation: {
    hasOnlyOneImage: false,
    src: [
        "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Business-Cards.jpg",
        "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Movil.jpg",
        "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Resume.jpg",
    ]
},

  outcomes: [
    <p>
      The final products allow company management to define employees roles and
      determines there access to delicate information. It lets employees request
      specific files from users, upload documentation and select specific
      individuals as the recipient. This helped management save time in each
      enrollment by eliminating the use of email and phone calls. Among others,
      the software classifies all data automatically.
    </p>,
    <p>
      The clients, on the other end, can access their data with ease. The most
      important data for them can be found in their home-screen ones they
      log-in. The engagement from the client side was significant and made it
      easy for them to upload media files. In their customizable profiles, they
      can update their links to their social media accounts, and they receive a
      monthly report which they can download or print, these reports are also
      saved automatically to their profiles.
    </p>
  ],

  linkCard: {
    img:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-View-Site.jpeg",
    body: "Click the button below to see the project live.",
    linkTxt: "visit the website",
    linkHref: "https://hernandez2.com/"
  }
};

const Hernandez = () => (
  <>
    <CaseStudy project={project} />
    <ProjectFooter project="Hernandez2" />
  </>
);

export default Hernandez;
