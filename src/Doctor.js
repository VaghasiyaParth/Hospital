
import mycs from './mycss.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown, Button, Row, Col, Card } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiEye } from "react-icons/fi";




function Doctor() {

    return (

        <>
            <div className={mycs.pri}>
                <div className={mycs.head}>
                    <h1 style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>OUR DOCTORS</h1>
                    <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.5)", fontSize: "20px" }}>Meet Our Qualified Doctors</p>

                </div>
            </div>



            <div className={mycs.d1}>
                <Container>

                    <Row>
                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>
                                    <img src={require('./image/9.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Emily Haden</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>


                            </div>


                        </Col>


                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>
                                    <img src={require('./image/10.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Hellen Hill</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>





                            </div>

                        </Col>


                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>

                                    <img src={require('./image/11.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Audrey Button</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>




                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={mycs.d2}>
                <Container>

                    <Row>
                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>
                                    <img src={require('./image/12.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Emily Haden</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>


                            </div>


                        </Col>


                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>
                                    <img src={require('./image/13.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Hellen Hill</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>





                            </div>

                        </Col>


                        <Col xl="4" lg="4">
                            <div className={mycs.mainbox}>

                                <div className={mycs.imgbox}>

                                    <img src={require('./image/14.jpg')}></img>

                                </div>
                                <div className={mycs.oicon}>
                                    <ul>
                                        <li>
                                            <button className={mycs.oicon1} > <FiFacebook /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon2}> <FiInstagram /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon3}> <FiTwitter /></button>

                                        </li>

                                        <li>
                                            <button className={mycs.oicon4} > <FiLinkedin /></button>

                                        </li>
                                    </ul>
                                </div>
                                <p className={mycs.caption}>
                                    <h2>Audrey Button</h2>
                                    <p style={{ color: "blue" }}>Dental Surgeon</p>
                                </p>
                                <p className={mycs.line}></p>




                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>



        </>

    )

}

export default Doctor;