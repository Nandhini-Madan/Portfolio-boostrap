import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import SilentAuction from "../src/asserts/silentAuction.jpg";

const AboutMe = () => {
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
    return (
        <>
            <h1>AboutMe</h1>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MerchantMarketPlace} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default AboutMe;