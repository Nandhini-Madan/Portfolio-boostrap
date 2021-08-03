import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import SilentAuction from "../src/asserts/silentAuction.jpg"
import AnywhereFitness from "../src/asserts/AnywhereFitness.jpg";

const MyProjects=()=>{
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
        projectImage:AnywhereFitness
        },
        {
        projectName:"Potluck Planner",
        projectDescription:"",
        projectImage:""
        }
]
        
    return (
        <>
            <h1>My Projects</h1>
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
export default MyProjects;