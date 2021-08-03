import React from "react";
import { Row,Col,Card} from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import Snow from "../src/Snow";
import SilentAuction from "../src/asserts/silentAuction.jpg"


const Home=()=>{
    const projectDetails=[
        {
        projectName:"Merchant Marketplace",
        projectDescription:"",
        projectImage:MerchantMarketPlace
        },
        {
        projectName:"Silent Auction",
        projectDescription:"",
        projectImage:SilentAuction
        },
        {
        projectName:"Anywhere Fitness",
        projectDescription:"",
        projectImage:""
        },
        {
        projectName:"Potluck Planner",
        projectDescription:"",
        projectImage:""
        }
]

    return(
        <>
        <Snow/>
        
        <h1>AboutMe</h1>
        <p>I'm a full-stack developer passionate about building software users love and that solve big problems at scale. I have experience building reusable frontend components using React, managing complex application state using Redux, building backend services using Node.js and Express.js, and database management using PostgreSQL.

My background in learning and remote collaboration gives me the resources to ask the right questions, get the right answers, and delivering on time. And now I can build full-stack web applications I'm a natural fit for a remote software development team.

I am currently seeking full-stack or frontend development opportunities based in Seattle, WA or anywhere in the world if remote working is an option.</p>
           
           <Row xs={1} md={2} className="g-4">
                {projectDetails.map((project) => (
                    <Col key={project.projectName}>
                        <Card key={project.projectName}>
                            <Card.Img variant="top"  src={project.projectImage} />
                            <Card.Body>
                                <Card.Title>{project.projectName}</Card.Title>
                                <Card.Text>
                                    {project.projectDescription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Home;