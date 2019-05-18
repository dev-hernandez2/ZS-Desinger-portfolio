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
    definingPersonas: "I developed three user personas as defined through research and questioning the CEO and management employees. No access was allowed to the end users or production companies, this made it a little difficult to understand their needs. But we trusted management, who had direct access to them.",

    imgSrc: "https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-User-Personas.jpg"
  }
};

class StayTunes extends React.Component {
  render() {
    return (
      <>
        <CaseStudy project={project} />
        <ProjectFooter project="SkillsCreativeStudios" />
      </>
    );
  }
}

export default StayTunes;
