import React from "react";
import { Container, Row } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import CourseworkButton from "../components/CourseworkButton";
import TitleBar from "../components/TitleBar";

import BMSLOGO from "../assets/download.png";
import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";
import TUNGALLOGO from "../assets/jpg/Tungal.jpg";
import SSDPLOGO from "../assets/jpg/117444714_101671911654883_6741166999499840099_n.jpg";

class Education extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="Education" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <EducationCard
                image={BMSLOGO}
                fallback_image={UMassFallbackLogo}
                title="BMSCE"
                address="Bangalore, India"
                degree="Bachelor of Technology"
                major="Electrical and Electronics Engineering"
                class="Batch of 2017"
                duration="August 2017 - July 2021"
                grade="8.40 CGPA"
                details={
                  <React.Fragment>
                    • Major: Electrical and Electronics Engineering (with Mathematics)
                    <br />
                   
                  </React.Fragment>
                }
              />
               <EducationCard
                image={TUNGALLOGO}
                fallback_image={UMassFallbackLogo}
                title="TUNGAL SCIENCE"
                address="Jamkhandi, Karnataka"
                degree="Science"
                major="Mathematics and Statistics"
                class="Batch of 2015"
                duration="June 2015 - May 2017"
                grade="Result: 92 %"
                details={
                  <React.Fragment>
                    • Major: PCMS
                    
                  </React.Fragment>
                }
              />
              <EducationCard
                image={SSDPLOGO}
                fallback_image={SSDPLOGO}
                title="SSDP School"
                address="Kokatnoor, Athani"
                degree="High School"
                major=""
                class="Batch of 2014"
                duration="June 2014 - March 2015"
                grade={
                  <React.Fragment>
                    96.0% (Grade 12) <br /> 10.0 CGPA (Grade 10)
                  </React.Fragment>
                }
                details={
                  <React.Fragment>
                    • 
                  </React.Fragment>
                }
              />
            </Row>
          </Container>
          {/* <TitleBar title="Coursework" /> */}
          <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
            <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
              {/* <CourseworkButton
                title="Introduction to Algorithms"
                shortcode="COMPSCI 311"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
              />
              <CourseworkButton
                title="Artificial Intelligence"
                shortcode="COMPSCI 383"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
              />
              <CourseworkButton
                title="Statistics I"
                shortcode="STATISTC 515"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
              />
              <CourseworkButton
                title="Advanced Multivariate Calculus"
                shortcode="MATH 425"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
              />
              <CourseworkButton
                title="Computer Systems Principles"
                shortcode="COMPSCI 230"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
              />
              <CourseworkButton
                title="Reasoning Under Uncertainty"
                shortcode="COMPSCI 240"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
              />
              <CourseworkButton
                title="Ordinary Differential Equations"
                shortcode="MATH 331"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
              />
              <CourseworkButton
                title="Introduction to Computation"
                shortcode="COMPSCI 250"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
              />
              <CourseworkButton
                title="Programming Methodology"
                shortcode="COMPSCI 220"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
              />
              <CourseworkButton
                title="Introduction to Linear Algebra"
                shortcode="MATH 235"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
              />
              <CourseworkButton
                title="Introduction to Data Analysis in R"
                shortcode="CICS 197R"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
              />
              <CourseworkButton
                title="Programming with Data Structures"
                shortcode="COMPSCI 187"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
              />
              <CourseworkButton
                title="Multivariate Calculus"
                shortcode="MATH 233"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
              /> */}
              {/* <CourseworkButton
                title="Physics II"
                shortcode="AP Physics C: Electricity & Magnetism"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Physics I"
                shortcode="AP Physics C: Mechanics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Introductory Computer Science"
                shortcode="AP Computer Science A"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Introduction to Statistics"
                shortcode="AP Statistics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              />
              <CourseworkButton
                title="Calculus I & II"
                shortcode="AP Calculus BC"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
              /> */}
            </Row>
          </Container>
          {/* <Container fluid style={{ textAlign: "center" }}>
            <h1>Coursework</h1>
            <Row style={{ display: "inline-flex" }}>
              <CourseworkCard
                title="Introduction to Algorithms"
                shortcode="COMPSCI 311"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to algorithms for graph and network problems, scheduling, searching, sorting, greedy
                    paradigm, divide-and-conquer, dynamic programming, and network flows, combined with study of
                    efficiency, NP-completeness, intractability, approximations and randomized algorithms.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Artificial Intelligence"
                shortcode="COMPSCI 383"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of core concepts and algorithms in AI, involving search, knowledge representation, machine
                    learning, and formal logic, with topics like Graph, Local and Adversarial Search, CSPs, MDPs,
                    Reinforcement Learning, Unsupervised Learning, Naive Bayes, Perceptrons, and Artificial Neural
                    Networks.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Statistics I"
                shortcode="STAT 515"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to calculus-based probability, involving basic axioms of probability, counting,
                    conditional probability, independence, random variables, discrete and continuous distributions,
                    expectation, variance, covariance and correlation, central limit theorem, and Poisson approximation.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Advanced Multivariate Calculus"
                shortcode="MATH 425"
                term="Spring 2021"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of advanced differential and integral calculus in many variables, including directional and
                    partial derivatives, gradient, extrema, Lagrange-multipliers, Hessian, vector fields, divergence,
                    curl and exterior derivatives, line and surface-integrals, and the fundamental theorems of calculus.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Computer Systems Principles"
                shortcode="COMPSCI 230"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of principles behind high-performance scalable systems, using C language, such as features of
                    modern architectures, assembly languages, and operating system services such as I/O and
                    synchronization.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Reasoning Under Uncertainty"
                shortcode="COMPSCI 240"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of mathematical uncertainties, using laws of counting and probability, statistical bounds,
                    random variables, Central Limit Theorem, Game Theory, Markov Chains, and Bayesian Networks.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Ordinary Differential Equations"
                shortcode="MATH 331"
                term="Fall 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to ordinary differential equations, with 1st and 2nd order linear differential
                    equations, systems of linear differential equations, Laplace transforms, numerical methods, and
                    applications.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Computation"
                shortcode="COMPSCI 250"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of discrete mathematics involving logic, elementary number theory, mathematical induction,
                    tree recursion, search algorithms, regular expressions, finite state machines, and computability.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Programming Methodology"
                shortcode="COMPSCI 220"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of modern programming methodologies emphasizing on good software engineering skills, including
                    programming abstractions, testing, debugging, and design patterns.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Linear Algebra"
                shortcode="MATH 235"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introductory linear algebra with matrices, determinants, systems of linear equations, vector spaces,
                    linear transformations, and eigenvalues.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Introduction to Data Analysis in R"
                shortcode="CICS 197R"
                term="Spring 2020"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Study of data analysis involving data wrangling, summary statistics, modeling, and visualization
                    using R with Tidyverse packages.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Programming with Data Structures"
                shortcode="COMPSCI 187"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Introduction to building and encapsulating data objects and their associated operations through
                    linked structures, recursive structures, trees, heaps, graphs, hash tables, and search-sort
                    algorithms.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Multivariate Calculus"
                shortcode="MATH 233"
                term="Fall 2019"
                institution="University of Massachusetts Amherst"
                details={
                  <React.Fragment>
                    Extension of single-variable calculus to functions of several variables, covering vectors in two-
                    and three-dimensional space, partial derivatives, double and triple integrals, line integrals,
                    surface integrals, Green’s theorem, Stokes’s theorem, and Divergence theorem.
                  </React.Fragment>
                }
              />
              <CourseworkCard
                title="Physics II"
                shortcode="AP Physics C: Electricity & Magnetism"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Physics I"
                shortcode="AP Physics C: Mechanics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Introductory Computer Science"
                shortcode="AP Computer Science A"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Introduction to Statistics"
                shortcode="AP Statistics"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
              <CourseworkCard
                title="Calculus I & II"
                shortcode="AP Calculus BC"
                term="May 2019"
                institution="CollegeBoard Advanced Placement Exams"
                details={<React.Fragment>WORK-IN-PROGRESS</React.Fragment>}
              />
            </Row>
          </Container> */}
        </div>
      </div>
    );
  }
}

export default Education;
