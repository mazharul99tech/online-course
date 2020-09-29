import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Items.css';

const Items = (props) => {
    // console.log(props)
    const handleAddCourse = props.handleAddCourse;
    const {title, price, instructor} = props.course;
    return (
        <div className="items-container">
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>Course Title: {title}</h4>
                        <p>Course Price Only: ${price}</p>
                        <p>Instructor: {instructor}</p>
                        <Button onClick={() => handleAddCourse(props.course)} variant="success">Enroll Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Items;