import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user";
import { Container, Form, Button } from "react-bootstrap";
import './Login.css';
export default function LoginForm() {

    // const isAuthenticated = useSelector((state) => state.user.isLoggedIn);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [data, setData] = useState({
        "email": "",
        "password": ""
    });

    const [loginError, setLoginError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();


        axios
            .post("/api/auth/login", data,
                { withCredentials: true })
            .then((res) => {
                dispatch(login({ userId: res.data, email: data.email, token: res.token, isLoggedIn: true }));
                setData({ email: "", password: "" });
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status == 401) {
                    setLoginError(true);
                    setData({ email: "", password: "" });
                }
                console.log("Error couldn't create user" + err.message);
            });
    }

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleCancel(e) {
        setData({
            "name": "",
            "password": ""
        })
    }

    return (
        <div className="division">

            <div className="loginContainer">

                <div style={{ color: 'cyan', textAlign: 'center', borderRadius: '20px' }}>
                    <Container style={{}}>
                        <h4 className="heading" >SIGN IN</h4>
                        {loginError && <p >Username or password is incorrect</p>}
                        <Form onSubmit={handleSubmit} style={{ placeContent: '' }}>
                            <Form.Group className="login"  >

                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder='username   '
                                    onChange={handleChange}
                                    defaultValue={data.username}
                                />
                            </Form.Group>
                            <Form.Group className="login" >

                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder='Enter your password...'
                                    onChange={handleChange}
                                    defaultValue={data.password}
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary" className='button'  >Login</Button>

                            <p className="mt-3">New Here ?
                                <Link to="/register" >  Sign up</Link>
                            </p>
                        </Form>
                    </Container>
                </div>
            </div >
        </div>
    )
}