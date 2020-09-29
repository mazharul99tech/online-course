import React, { useEffect, useState } from 'react';
import './Course.css';
import {fakeData} from '../../fakeData/fakeData';
import Items from '../Items/Items';
import Cart from '../Cart/Cart';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        setCourses(fakeData);
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="course-container">
                        <div className="cart-container text-center">
                            <h4>Total Courses: {courses.length}</h4>
                            <Cart cart={cart}></Cart>
                            <h4 className="course-item">Recent Courses</h4>
                        </div>
                        <div className="courses-area">
                            {
                                courses.map(course => <Items course={course} handleAddCourse={handleAddCourse} key={course.id}></Items>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;