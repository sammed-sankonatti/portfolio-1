import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/webp/umass-logo.webp";
import DPSRKPLogo from "../assets/webp/dpsrkp-logo.webp";
import TEDxRKPLogo from "../assets/webp/tedxyouth-logo.webp";
import BUILDLogo from "../assets/webp/build-logo.webp";
import AerossLogo from "../assets/webp/aeross-logo.webp";
import VirtuBoxLogo from "../assets/webp/virtubox-logo.webp";
import HackUMassLogo from "../assets/webp/hackumass-logo.webp";

import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";
import DPSRKPFallbackLogo from "../assets/jpg/dpsrkp-logo.jpg";
import TEDxRKPFallbackLogo from "../assets/jpg/tedxyouth-logo.jpg";
import BUILDFallbackLogo from "../assets/jpg/build-logo.jpg";
import AerossFallbackLogo from "../assets/jpg/aeross-logo.jpg";
import VirtuBoxFallbackLogo from "../assets/jpg/virtubox-logo.jpg";
import HackUMassFallbackLogo from "../assets/jpg/hackumass-logo.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="Experience" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              {/* <ExperienceCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Software Developer"
                organization="BUILD UMass"
                address="Amherst, MA, USA"
                alternateTitle="Software Developer, BUILD UMass"
                duration="September 2020 - Present"
                details={
                  <React.Fragment>
                    • Developing a modern website for UMass Entrepreneurship Club
                    <br />
                    • Part of 4-member development team responsible for the same
                    <br />
                    • Engineering front-end with React, SCSS, and Bootstrap
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={HackUMassLogo}
                fallback_image={HackUMassFallbackLogo}
                title="Graphic Designer"
                organization="HackUMass Organizing Team"
                address="Amherst, MA, USA"
                alternateTitle="Graphic Designer, HackUMass"
                duration="March 2020 - Present"
                details={
                  <React.Fragment>
                    • Designed logos, icons, and branding materials for HackUMass VIII
                    <br />
                    • Developed the design and layout for the sponsorship prospectus
                    <br />
                    • Engaged in planning HackUMass IX as a member of organizing team
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={VirtuBoxLogo}
                fallback_image={VirtuBoxFallbackLogo}
                title="Business Development Associate"
                organization="VirtuBox Infotech Pvt. Ltd."
                address="Remote"
                alternateTitle="Business Development, VirtuBox Infotech"
                duration="July 2020 - August 2020"
                details={
                  <React.Fragment>
                    • Planned the transition from Vue.js to React framework for web CMS
                    <br />
                    • Worked on competitor analysis and app-store search optimization
                    <br />
                    • Produced 10+ video tutorials about the company’s CMS dashboard
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={UMassLogo}
                fallback_image={UMassFallbackLogo}
                title="Computer Science Peer Tutor"
                organization="College of Information and Computer Science"
                address="Amherst, MA, USA"
                alternateTitle="CS Peer Tutor, UMass CICS"
                duration="January 2020 - May 2020"
                details={
                  <React.Fragment>
                    • Held one-on-one tutoring sessions for two introductory CS courses
                    <br />
                    • Conducted weekly meetings to discuss assignments and homework
                    <br />
                    • Explained various implementations of essential data structures
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={DPSRKPLogo}
                fallback_image={DPSRKPFallbackLogo}
                title="President"
                organization="Student Council, Delhi Public School"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="President, Student Council"
                duration="April 2018 - April 2019"
                details={
                  <React.Fragment>
                    • Oversaw student discipline and adherence to code of conduct
                    <br />
                    • Represented the students’ interests in administrative meetings
                    <br />
                    • Liaised between students, faculty, and administration
                    <br />• Supervised the student-run events in lieu of school coordinator
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={TEDxRKPLogo}
                fallback_image={TEDxRKPFallbackLogo}
                title="Lead Designer"
                organization="TEDxYouth@DPSRKPuram"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="Lead Designer, TEDxYouth@DPSRKPuram"
                duration="November 2018 - April 2019"
                details={
                  <React.Fragment>
                    • Led the organization's design initiative for annual event
                    <br />
                    • Created posters, banners, & prospectus for November event
                    <br />
                    • Designed ID cards & certificates for speakers and volunteers
                    <br />
                    • Coordinated with other departments of the Organizing Committee
                  </React.Fragment>
                }
              />
              <ExperienceCard
                image={AerossLogo}
                fallback_image={AerossFallbackLogo}
                title="Honorary Advisor"
                organization="Aerospace Society, Delhi Public School"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="Honorary Advisor, Aerospace Society"
                duration="May 2018 - April 2019"
                details={
                  <React.Fragment>
                    • Mentored junior teams for aerospace competitions and summits
                    <br />
                    • Took part in promoting space exploration and colonization to peers
                    <br />
                    • Advised the executive team regarding new focuses for the club
                  </React.Fragment>
                }
              /> */}
              <h1> STILL STUDENT</h1>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experience;
