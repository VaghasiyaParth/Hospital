
import { Nav, Navbar, Container, NavDropdown, Button, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mycs from './mycss.module.css';
import { FcCheckmark } from "react-icons/fc";
import { FiFacebook,FiInstagram,FiTwitter,FiLinkedin } from "react-icons/fi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import TelegramIcon from '@mui/icons-material/Telegram';
function About() {
    return (

        <>
            

            <div className={mycs.a1}>
                <h1 style={{ textAlign: "center", color: "#fff", fontWeight: "bold", padding: "8% 0 0 0" }}>
                    Short Story About
                    <br></br>
                    Fovia Clinic Since 1999.
                </h1>
                <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.5)", fontSize: "20px", padding: "1% 0 0 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br></br>
                    suspendisse ultrices gravida. Risus commodo viverra maecenas<br></br>
                    accumsan lacus vel.</p>

                <p style={{ textAlign: "center", margin: "2% 0 0 0", color: "#000" }}><button style={{ backgroundColor: "#ffc107", fontWeight: "bold", borderRadius: "6px", border: "none", padding: "1.2%" }}>READ OUR STORY</button></p>

            </div>
            <div style={{ margin: "5%" }}>
                <Row >
                    <Col xxl="6" lg="8" md="12">
                        <img className={mycs.pic} src={require('./image/1.jpeg')} height="400px"  ></img>
                    </Col>
                    <Col className={mycs.a2} xxl="6" lg="4" md="12">
                        <p style={{ color: "skyblue" }}>BRIEF HISTORY</p>
                        <h2 style={{ fontWeight: "bold", fontSize: "40px", margin: "-1% 0 0 0" }}>Get to know us more</h2>
                        <h4 style={{ fontWeight: "normal", fontSize: "22px", margin: "2% 0" }}>Excepteur sint occaecat cupidatat non proident, sunt in<br></br>
                            culpa qui officia deserunt mollit anim id est laborum.</h4>
                        <p style={{ color: "#000", opacity: "0.7", fontSize: "17px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a <br></br>labore aliquam beatae expedita. Blanditiis impedit numquam libero<br></br> molestiae et fugit cupiditate, quibusdam expedita, maiores eaque <br></br>quisquam.</p>
                    </Col>
                </Row>
            </div>

            <Container>
                <Row >
                    <Col lg="12" xxl="6" style={{ padding: "2%" }}>
                        <img style={{ padding: "2%", borderRadius: "25px" }} src={require('./image/5.jpg')} height="300px" className={mycs.ss}></img>
                        <img style={{ padding: "2%", borderRadius: "25px" }} src={require('./image/6.jpg')} height="300px" className={mycs.ss}></img>
                        <img style={{ padding: "2%", borderRadius: "25px" }} src={require('./image/7.jpg')} height="300px" className={mycs.ss}></img>
                        <img style={{ padding: "2%", borderRadius: "25px" }} src={require('./image/8.jpg')} height="300px" className={mycs.ss}></img>

                    </Col>
                    <Col lg="12" xxl="6" style={{ padding: "4% 2% 2% 2%" }}>
                        <h1 style={{ padding: "2% 0 3% 0", fontWeight: "bold" }}>30 Years More Services Experiences</h1>
                        <p style={{ backgroundColor: "blue", height: "0.4%", width: "8%" }}></p>
                        <h4 style={{ fontSize: "21px", wordSpacing: "1px", opacity: "0.7", padding: "0 0 2% 0", fontFamily: "lato" }}>Suspendisse nulla praesent, neque volutpat lacinia libero <br></br>nullam ut, in auctor nonummy mi augu massa ult tellus ut<br></br> integer ultrices facilisis semper.</h4>
                        <p>
                            <b className={mycs.head}>Heart Surgery </b><h5 style={{ margin: "-4% 0 0 94%", color: "blue", fontSize: "18px" }}>75%</h5>
                            < ProgressBar now={75} className={mycs.progress} />
                        </p>
                        <p>
                            <b className={mycs.head}>Laborate Analysis</b> <h5 style={{ margin: "-4% 0 0 94%", color: "blue", fontSize: "18px" }}>85%</h5>
                            <ProgressBar className={mycs.progress} now={85} />
                        </p>
                        <p>
                            <b className={mycs.head}>Customer Support</b> <h5 style={{ margin: "-4% 0 0 94%", color: "blue", fontSize: "18px" }}>65%</h5>
                            <ProgressBar className={mycs.progress} now={65} />
                        </p>
                        <p>
                            <b className={mycs.head}>Medical Research</b><h5 style={{ margin: "-4% 0 0 94%", color: "blue", fontSize: "18px" }}>95%</h5>
                            <ProgressBar className={mycs.progress} now={95} />
                        </p>
                    </Col>
                </Row>
            </Container>

            <div style={{ backgroundColor: "#f9f9f9" }}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h1 style={{ textAlign: "center", marginTop: "5%", fontFamily: "sans-serif", fontWeight: "bold" }}><b>Choose Pricing Plans </b></h1>
                            <p style={{ backgroundColor: "blue", height: "2%", width: "4%", marginLeft: "49%" }}></p>
                        </Col>
                        <Col lg="12" style={{ fontFamily: "sans-serif", fontSize: "19px", padding: "2% 0 3% 0", textAlign: "center", opacity: "0.7" }}>Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum<br></br> Feugiat elit placerat. Diam tempor malesuada.</Col>
                    </Row>
                    <Row lg="12">
                        <Col  lg="4" md="6">
                            <div className={mycs.box}>
                                <p className={mycs.inr}>
                                    <b style={{ fontSize: "24px" }}>Basic</b>
                                    <h2 style={{ padding: "2% 0 0 0" }}>
                                        <sup style={{ fontWeight: "normal", fontSize: "18px" }}>$</sup>
                                        57
                                        <sub>/month</sub>
                                    </h2>

                                </p>
                                <ul >

                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Liver Function Tests.
                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Full Blood Examination.

                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        TSH (Thyroid Stimulating
                                    </li>
                                    <li>

                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        INR (International Normalized
                                    </li>
                                </ul>

                                <p style={{textAlign:"center",margin:"30px 0 0% 0"}}><input type="button" value="BUY NOW" className={mycs.btun}></input></p>
                            </div>

                        </Col>

                        <Col lg="4" md="6"  className={mycs.box2}>
                            <div className={mycs.box} >
                                <p className={mycs.inr}>
                                    <b style={{ fontSize: "24px" }}>Standard</b>
                                    <h2 style={{ padding: "2% 0 0 0" }}>
                                        <sup style={{ fontWeight: "normal", fontSize: "18px" }}>$</sup>
                                        86
                                        <sub>/month</sub>
                                    </h2>
                                </p>
                                <ul >

                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Liver Function Tests.
                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Full Blood Examination.

                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        TSH (Thyroid Stimulating
                                    </li>
                                    <li>

                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        INR (International Normalized
                                    </li>
                                </ul>
                                <p style={{textAlign:"center",margin:"30px 0 0% 0"}}><input type="button" value="BUY NOW" className={mycs.btun}></input></p>

                            </div>

                        </Col>

                        <Col lg="4" md="12">
                            <div className={mycs.box}>
                                <p className={mycs.inr}>
                                    <b style={{ fontSize: "24px" }}>Premium</b>
                                    <h2 style={{ padding: "2% 0 0 0" }}>
                                        <sup style={{ fontWeight: "normal", fontSize: "18px" }}>$</sup>
                                        98
                                        <sub>/month</sub>
                                    </h2>
                                </p>
                                <ul >

                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Liver Function Tests.
                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        Full Blood Examination.

                                    </li>
                                    <li>
                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        TSH (Thyroid Stimulating
                                    </li>
                                    <li>

                                        <i style={{ margin: "0 2% 0 0", fontSize: "20px" }}><FcCheckmark /></i>
                                        INR (International Normalized
                                    </li>
                                </ul>
                                <p style={{textAlign:"center",margin:"30px 0 0% 0"}}><input type="button" value="BUY NOW" className={mycs.btun}></input></p>

                            </div>

                        </Col>
                    </Row>
                </Container> 
            </div>

            <div style={{backgroundColor:"#1e5ad7",height:"300px",marginTop:"5%"}}>

                <Container style={{textAlign:"center",paddingTop:"80px"}}>
                    
                         
                        <h1 style={{color:"#fff",margin:"0 0 2% 0",fontWeight:"bold"}}>Singup for Our Newsletter</h1>
                        <form  class="col-lg-12" >
                            <input type="text" name="email" placeholder="Enter Your Email" style={{padding:"0 80px 0 25px",height:"60px",width:"60%",borderRadius:"30px",border:"none"}} ></input>
                            <button className={mycs.bn}><TelegramIcon/></button>
                        </form>
                      
                  
                </Container>

            </div>




            <div className={mycs.footer}>

                <Container style={{color:"#fff",padding:"100px 0 100px 0"}}>

                    <Row className={mycs.ww}>
                        <Col xs="12" sm="12" lg="6" md="6" xxl="4">
                            <img className={mycs.logo} style={{margin:"0 0 20px 0"}} src={require('./image/1.png')}></img>
                        <p style={{backgroundColor:"blue", height:"3px", width:"40px"}}></p>
                        <div style={{padding:"30px 0 0 0"}} className={mycs.he}>
                            <p>Penatibus in, litora dictumst suspendamuanim<br></br> egestas, libero mollis molestiae sit et sem nisl<br></br> inquam vitae euismoellentesque.nd this is<br></br> over head.</p>
                            <ul>
                                <li>
                                  
                                      <button className={mycs.bu}style={{border:"none",borderRadius:"50%",width:"35px",height:"35px"}}>  <FiFacebook/></button> 
                                      
                                </li>
                                <li>
                                <button className={mycs.bu}style={{border:"none",borderRadius:"50%",width:"35px",height:"35px"}}>  < FiInstagram/></button> 

                                </li>
                                <li>
                                <button className={mycs.bu}style={{border:"none",borderRadius:"50%",width:"35px",height:"35px"}}>  < FiTwitter/></button> 

                                </li>
                                <li>
                                <button className={mycs.bu}style={{border:"none",borderRadius:"50%",width:"35px",height:"35px"}}>  < FiLinkedin/></button> 

                                </li>
                            </ul>
                        </div>
                        </Col>

                        <Col xs="12" sm="6" md="6" lg="6" xxl="2">
                        <h4 style={{padding:"0 0 20px 0"}}>Usefull Link</h4>
                        <p style={{backgroundColor:"blue", height:"3px", width:"40px"}}></p>

                        <ul className={mycs.in2} >
                            <li>    
                                            <button className={mycs.ic} >
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> About</b>
                                            </button>
                                            
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Our Services</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Our Mission</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Find Doctor</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Appointment</b>
                                            </button>
                            </li>
                        </ul>
                       

                        </Col>

                        <Col xs="12" sm="6" md="6" lg="4" xxl="2">
                        <h4 style={{padding:"0 0 20px 0"}}>Our Services</h4>
                        <p style={{backgroundColor:"blue", height:"3px", width:"40px"}}></p>

                        <ul className={mycs.in2} >
                            <li>    
                                            <button className={mycs.ic} >
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}>Cardiology</b>
                                            </button>
                                            
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Out Patient</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Gynaecological</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}>Dental Surgery</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Laboratory</b>
                                            </button>
                            </li>
                        </ul>

                        </Col>

                        <Col xs="12" sm="6" md="6" lg="4" xxl="2">
                        <h4 style={{padding:"0 0 20px 0"}}>Terms</h4>
                        <p style={{backgroundColor:"blue", height:"3px", width:"40px"}}></p>

                        <ul className={mycs.in2} >
                            <li>    
                                            <button className={mycs.ic} >
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Announcement</b>
                                            </button>
                                            
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Privacy Policy</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Terms Of Service</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Refund Policy</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Lisence Info</b>
                                            </button>
                            </li>
                        </ul>

                        </Col>

                        <Col xs="12" sm="6" md="6" lg="4" xxl="2">
                        <h4 style={{padding:"0 0 20px 0"}}>Support</h4>
                        <p style={{backgroundColor:"blue", height:"3px", width:"40px"}}></p>

                        <ul className={mycs.in2} >
                            <li className={mycs.qq}>    
                                            <button className={mycs.ic} >
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> F.A.Q</b>
                                            </button>
                                            
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Get Support</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Our Forum</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Member Area</b>
                                            </button>
                            
                                            <button className={mycs.ic}>
                                               <b className={mycs.in}><IoIosArrowDroprightCircle/></b> 
                                               <b className={mycs.in1}> Contact Us</b>
                                            </button>
                            </li>
                        </ul>

                        </Col>
                    </Row>


                </Container>


            </div>

        </>
    );

}

export default About;