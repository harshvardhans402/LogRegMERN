import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import './register.css'

export default function RegisterForm() {
    let navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        dateOfBirth: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/api/auth/register", data, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setData({ email: "", password: "", name: "", dateOfBirth: "" });
            })
            .catch((err) => {
                console.log("Error couldn't create forum");
                console.log(err.message);
            });

        navigate("/login");
    }

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    function handleCancel(e) {
        setData({
            email: "",
            password: "",
            name: "",
            dateOfBirth: "",
        });
    }

    return (
        <div className='registerContainer'>
            <Container>
                <h4 className="my-3">Sign up here</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="username">Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            onChange={handleChange}
                            value={data.email}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter your password..."
                            onChange={handleChange}
                            value={data.password}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your name..."
                            onChange={handleChange}
                            value={data.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            name="dateOfBirth"
                            onChange={handleChange}
                            value={data.dateOfBirth}
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mx-2">
                        Register
                    </Button>
                    <Button onClick={handleCancel} variant="outline-secondary" className="mx-2">
                        Cancel
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
