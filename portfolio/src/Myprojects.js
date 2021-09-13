import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import SilentAuction from "../src/asserts/silentAuction.jpg"
import AnywhereFitness from "../src/asserts/AnywhereFitness.jpg";
import { useHistory } from "react-router-dom";

const MyProjects=()=>{
    let history= useHistory()
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
const ViewProjectHandler=()=>{
    history.push("/:id/projectDetail")
}
        
    return (
        <>
        <br></br>
            <h1>My Projects</h1>
          <br></br>
            <Row xs={1} md={2} className="g-4">
                {projectDetails.map((project) => (
                    <Col key={project.projectName}>
                        <Card key={project.projectName}>
                            <Card.Img variant="top"  src={project.projectImage} onClick={ViewProjectHandler} />
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