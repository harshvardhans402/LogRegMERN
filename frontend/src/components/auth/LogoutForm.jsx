import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

export default function LogoutForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        localStorage.removeItem('token');
        localStorage.removeItem('reduxState')

        navigate('/login');

    }

    return (
        <div>

            <Container>
                <Form onSubmit={handleSubmit} >

                    <Button variant="success" className="m-3" type="submit">Logout</Button>

                </Form>

            </Container>
        </div>
    )
}