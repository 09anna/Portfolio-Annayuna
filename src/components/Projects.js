import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import clone from "../assets/img/clone.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ReciFree",
      description: "A Cooking Blog",
      imgUrl: projImg1,
    },
    {
      title: "Social Media Clone",
      description: "Home Page",
      imgUrl: clone,
    },
    {
      title: "UI of Annayuna/Portfolio",
      description: "Simple Portfolio Design",
      imgUrl: projImg3,
    },
    {/*
      title: "ReciFree",
      description: "A Cooking Blog",
      imgUrl: projImg1,
    },
    {
      title: "FurniHaus Design",
      description: "Home Page",
      imgUrl: projImg2,
    },
    {
      title: "Annayuna/Portfolio",
      description: "Simple Portfolio Design",
      imgUrl: projImg3,
    },*/}
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on a few beginner-level projects to strengthen my understanding of Frontend development. ReciFree: A Cooking Blog where users can submit their own created recipes. I designed a clean and simple portfolio layout in Figma, prioritizing user-friendly structure and highlights of my projects. I also built social media clone using MERN stack, which is simple and user-friendly.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>🚀 You don’t have to be great to start, but you have to start to be great.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>💡 Keep going. Every expert was once a beginner. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
