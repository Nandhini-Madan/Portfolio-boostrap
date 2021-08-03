import React from "react";
import { Row,Col,Card} from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
const Home=()=>{
    return(
        <>
        <h1>Nandhini Madan</h1>
        
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
export default Home;