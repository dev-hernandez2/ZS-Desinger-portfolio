import Link from "next/link";
import CaseStudy from "../../components/CaseStudy";
import ProjectFooter from "../../components/ProjectFooter";
import Layout from "../../components/Layout";

const project = {
  title: [
    <h1 className="is-main-title m-b-20">
      Building <span className="highlight">StayTuned</span> Software.
    </h1>
  ],

  about: [
    <p className="is-size-4 aileron-bold">
      The goal for this project was to give StayTuned an online management
      software (OMS) that would set them apart from other YouTube Partners in
      the Latin America market, by providing direct insides at a quick pace.
    </p>,
    <p className="is-size-4 aileron-bold">
      With offices in Miami, Florida, and Medellin, Colombia they were in need
      of giving more control to their staff and clients. The OMS became a tool
      to better manage profiles, media, invoicing, and reports.
    </p>
  ],
  details: {
    team: "Product Designer, Full-Stack Developer",
    duration: "4 Months (Jun - Sep 2016)",
    responsibilities: "Research, Structure, UX and UI Design",
    contribution:
      "Persona Development, Flowmaps, Information Architecture, Wireframes, UX|UI MVP Design",
    challenge:
      "Can non-tech-savy clients really on a custom tool that’s easier to use than the YouTube dashboard, and get the information they need without calling the service provider (StayTuned)?",
    tools: "Pen and paper, Xtensio, Marvel, Adobe Suite"
  },

  background: [
    <p>
      It started with an in-person kickoff between my self, the developer, and
      the CEO. In this meeting, we listen, took notes and understood the
      problem.
    </p>
  ],

  theProblem: [
    <p>
      StayTuned clients needed relevant information fast. They had access to
      their YouTube dashboard but it was hard for them to read what they needed.
      Other tools existed that provided filtered information but in the CEO’s
      mind, they were still to complex.
    </p>,
    <p>
      After understanding their existing users, business goals, user goals, and
      management team needs. I defined the two main audiences: management, and
      the end-user (client), and the types of datasets they needed to simplify
      the onboarding and continuous update processes.
    </p>
  ],

  personas: {
    definingPersonas:
      "I developed three user personas as defined through research and questioning the CEO and management employees. No access was allowed to the end users or production companies, this made it a little difficult to understand their needs. But we trusted management, who had direct access to them.",

    userPersonas: [
      <p className="section">
        <span className="highlight">Owner Larry </span>needs to feel reassured
        that while he’s looking for new talents, his employees are able to take
        care of the business without having to contact him every day.
      </p>,
      <p className="section">
        <span className="highlight">Manager Marie </span>needs to keep clients
        happy and do the work as efficiently as possible without having to
        bother Larry.
      </p>,
      <p className="section">
        <span className="highlight">Tommy Jerry </span> wants to know exactly
        how much he made this month, and if things are getting better or worse.
      </p>
    ],

    imgSrc:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-User-Personas.jpg"
  },

  steps: {
    one:
      "After conducting interviews with the CEO and management team, I was able to further understand the necessities and identified the must-haves for the MVP.",
    two:
      "Between the interview process and some wireframe a/b testing we were able to identify the common grounds for the development process.",
    three:
      "By verifying with the management team how users were interacting with the wireframes, we understood the key factors and iterated the home-screen to reflect the feedback."
  },

  uxDesign: [
    <p>
      Management needed to request specific files from users, upload
      documentation and determine specific individuals as the recipient.
    </p>,
    <p>
      The clients, on the other end, needed to upload media files, have
      customizable profiles with links to their social media accounts, and
      receive a monthly report which they could download or print.
    </p>
  ],
  map: [
    <h3 className="is-size-4 aileron-bold ">Flowmap</h3>,
    <p>
      After defining what was needed I sketch some flowcharts to develop the
      correct information architecture. The final flowmap is bellow.
    </p>
  ],
  mapImg: {
    src:
      "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-Wireframe.jpg"
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
    img: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-Request-Pass-Image.jpg",
    body: "To access the user view MVP please request the password by email.",
    linkTxt: "MVP User View ",
    linkHref: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/documents/User-View-StayTuned-Software.pdf"
  }
};

class StayTunes extends React.Component {
  render() {
    return (
      <>
        <CaseStudy project={project} />
        <ProjectFooter project="StayTuned" />
      </>
    );
  }
}

export default StayTunes;
