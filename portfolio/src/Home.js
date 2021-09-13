import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import Snow from "../src/Snow";
import SilentAuction from "../src/asserts/silentAuction.jpg";
import AnywhereFitness from "../src/asserts/AnywhereFitness.jpg";


const Home = () => {
    const projectDetails = [
        {   projectID:1,
            projectName: "Merchant Marketplace",
            projectDescription: "",
            projectImage: MerchantMarketPlace
        },
        {
            projectID:2,
            projectName: "Silent Auction",
            projectDescription: "",
            projectImage: SilentAuction
        },
        {   projectID:3,
            projectName: "Anywhere Fitness",
            projectDescription: "gfgf",
            projectImage: AnywhereFitness
        },
        {
            projectID:4,
            projectName: "Potluck Planner",
            projectDescription: "",
            projectImage: ""
        }
    ]

    return (
        <>
            <Snow />

            <h1>AboutMe</h1>
            <br></br>
            <p>I'm a full-stack developer passionate about building software users love and that solve big problems at scale. I have experience building reusable frontend components using React, managing complex application state using Redux, building backend services using Node.js and Express.js, and database management using PostgreSQL.</p>

            <p> My background in learning and remote collaboration gives me the resources to ask the right questions, get the right answers, and delivering on time. And now I can build full-stack web applications I'm a natural fit for a remote software development team.</p>

             <p>I am currently seeking full-stack or frontend development opportunities based in Seattle, WA or anywhere in the world if remote working is an option.</p>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                {projectDetails.map((project) => (
                    <Col key={project.projectName}>
                        <Card key={project.projectName}>
                            <Card.Img variant="top" src={project.projectImage} />
                            <Card.Body>
                                <Card.Title>{project.projectName}</Card.Title>
                                <Card.Text>
                                    {project.projectDescription}
                                </Card.Text>
                                <div className="link">
                                <a href="">GitHub</a>
                                <a href="">Demo</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Home;