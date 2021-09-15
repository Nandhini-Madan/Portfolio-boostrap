import React from "react";
import { Row, Col, Card,Button,Badge } from "react-bootstrap";
import MerchantMarketPlace from "../src/asserts/MerchantMarket.png";
import Snow from "../src/Snow";
import SilentAuction from "../src/asserts/silentAuction.jpg";
import AnywhereFitness from "../src/asserts/AnywhereFitness.jpg";
import Portfolio from "../src/asserts/Nandhini-FullStackDeveloper.pdf";
import potluck from "../src/asserts/potluck.png";
const Home = () => {
    const projectDetails = [
        {   projectID:1,
            projectName: "Anywhere Fitness",
            projectDescription: "",
            projectImage: AnywhereFitness,
            Github:"https://github.com/Nandhini-Madan/AnywhereFitness",
            Demo:"https://anywherefitness12.netlify.app/"
        },
        {
            projectID:2,
            projectName: "Silent Auction",
            projectDescription: "",
            projectImage: SilentAuction,
            Github:"https://github.com/Nandhini-Madan/SilentAuction-1",
            Demo:"https://anywherefitness12.netlify.app/"
        },
        {   projectID:3,
            projectName: "Merchant Marketplace",
            projectDescription: "",
            projectImage: MerchantMarketPlace,
            Github:"https://github.com/Nandhini-Madan/MerchantMarketPlace",
            Demo:"https://anywherefitness12.netlify.app/"
        },
        {
            projectID:4,
            projectName: "Potluck Planner",
            projectDescription: "",
            projectImage: potluck,
            Github:"https://github.com/Nandhini-Madan/Potluck2021BE",
            Demo:"https://potluckfood2021.netlify.app"
        }
    ]


    const skills=[{
        skillId:1,
        SkillName:"react",
        link:""
    },
    {
        skillId:2,
        SkillName:"redux",
        link:""
    },
    {
        skillId:3,
        SkillName:"Node",
        link:""
    },
    {
        skillId:4,
        SkillName:"Express",
        link:""
    },
    {
        skillId:5,
        SkillName:"JavaScript",
        link:""
    },
    {
        skillId:6,
        SkillName:"HTML",
        link:""
    },
    {
        skillId:7,
        SkillName:"CSS",
        link:""
    },
    {
        skillId:8,
        SkillName:"Responsive Design",
        link:""
    },
    {
        skillId:9,
        SkillName:"Context API",
        link:""
    },
    {
        skillId:10,
        SkillName:"SQL",
        link:""
    },
    {
        skillId:11,
        SkillName:"Knex",
        link:""
    },
    {
        skillId:12,
        SkillName:"Axios",
        link:""
    },
    {
        skillId:13,
        SkillName:"Yup",
        link:""
    },
    {
        skillId:14,
        SkillName:"Boostrap",
        link:""
    },
    {
        skillId:15,
        SkillName:"Styled Components",
        link:""
    },
    {
        skillId:16,
        SkillName:"Client-Side Routing",
        link:""
    },
    {
        skillId:17,
        SkillName:"JSON Web Tokens",
        link:""
    },
    {
        skillId:18,
        SkillName:"Relational Database Design",
        link:""
    },
    {
        skillId:19,
        SkillName:"Postman",
        link:""
    },
    {
        skillId:20,
        SkillName:"Insomnia",
        link:""
    },
    {
        skillId:21,
        SkillName:"Docker",
        link:""
    },
    {
        skillId:22,
        SkillName:"Python",
        link:""
    },
    {
        skillId:23,
        SkillName:"Material UI",
        link:""
    },
    {
        skillId:24,
        SkillName:"PostgreSQL",
        link:""
    }
    ]

    return (
        <>
            <Snow />
            <h2>AboutMe</h2>
            <br></br>
            <p>I'm a full-stack developer passionate about building software users love and that solve big problems at scale. I have experience building reusable frontend components using React, managing complex application state using Redux, building backend services using Node.js and Express.js, and database management using PostgreSQL.</p>
            <p> My background in learning and remote collaboration gives me the resources to ask the right questions, get the right answers, and delivering on time. And now I can build full-stack web applications I'm a natural fit for a remote software development team.</p>
             <p>I am currently seeking full-stack or frontend development opportunities based in Seattle, WA or anywhere in the world if remote working is an option.</p>
             <div className="link">
                                <a href="https://github.com/Nandhini-Madan">GitHub</a>
                                <a href="https://www.linkedin.com/in/nandhinimadan/">LinkedIn</a>
                                </div>
             <p>Download <a href={Portfolio} download>My resume</a></p>
            <br></br>
            <h2>Skills</h2>
            <br></br>
            <Row xs={12} md={12} className="g-4">
                {skills.map((skill) => (
                    <Col key={skill.skillId}>
                        
                        <Badge className="badge" bg="primary">{skill.SkillName}</Badge>
                    </Col>
                ))}
            </Row>
            <br></br>
            <br></br>
            <h2>My Projects</h2>
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
                                <a href={project.Github}>GitHub</a>
                                <a href={project.Demo}>Demo</a>
                                </div>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </Col>
                ))}
            </Row>


        </>
    )
}
export default Home;