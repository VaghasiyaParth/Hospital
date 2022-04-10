import { Container, Row, Col } from 'react-bootstrap';
import mycs from './mycss.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheck } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FiFacebook,FiInstagram,FiTwitter,FiLinkedin } from "react-icons/fi";






function Pricing() {

    return (


        <>
            <div className={mycs.pri}>
                <div className={mycs.head}>
                    <h1 style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>PAY AS YOU GROW</h1>
                    <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.5)", fontSize: "20px" }}>With our no hassle pricing plans </p>

                </div>
            </div>


            <div className={mycs.p1}>

                <Container>
                    <Row style={{width:"100%"}}>
                        <Col sm="12" md="6" xl="4">
                            <div className={mycs.free}>
                                <small style={{fontWeight:"bold",color:"#6C757D"}}>FREE</small>
                                <h1 style={{fontWeight:"700",fontSize:"80px",fontFamily:"readex pro"}}>
                                    $25
                                    <span style={{fontWeight:"normal",fontSize:"18px",marginLeft:"8%",fontWeight:"bold",color:"#6C757D"}}>/mo.</span>
                                </h1>
                                <ul  style={{padding:"0px"}}>
                                    <li >
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <strong style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>1 users</strong>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>5GB storage</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Unlimited public projects</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Community access</span>
                                    </li>

                                    <li>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>× Unlimited private projects</span>
                                    </li>

                                    <li>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>× Dedicated support</span>
                                    </li>

                                    <li>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>× Free linked domain</span>
                                    </li>

                                    <li>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>× Monthly status reports</span>
                                    </li>

                                    

                                </ul>

                                <div className={mycs.cp}>
                                    <input type="button"  value="CHOOSE PLAN" style={{width:"80%",height:"55px",borderRadius:"6px",border:"1px solid #0D6EFD",fontWeight:"bold"}}></input>
                                </div>

                            </div>
                        </Col>
                        <Col sm="12" md="6" xl="4">
                            <div className={mycs.free}>

                            <small style={{fontWeight:"bold"}}>⭐PRO</small>
                                <h1 style={{fontWeight:"700",fontSize:"80px",fontFamily:"readex pro"}}>
                                    $50
                                    <span style={{fontWeight:"normal",fontSize:"18px",marginLeft:"8%",fontWeight:"bold",color:"#6C757D"}}>/mo.</span>
                                </h1>
                                <ul  style={{padding:"0px"}}>
                                    <li >
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <strong style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>5 users</strong>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>5GB storage</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"0.5%"}}>Unlimited public projects</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Community access</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Unlimited private project</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Dedicated support</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Free linked domain</span>
                                    </li>

                                    <li>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>× Monthly status reports</span>
                                    </li>

                                    

                                </ul>

                                <div className={mycs.cp1}>
                                    <input type="button"  value="CHOOSE PLAN" style={{width:"80%",height:"55px",borderRadius:"6px",border:"1px solid #0D6EFD",fontWeight:"bold"}}></input>
                                </div>

                            </div>
                        </Col>
                        <Col sm="12" md="12" xl="4">
                            <div className={mycs.enter}>
                            <small style={{fontWeight:"bold",color:"#6C757D"}}>ENTERPRISE</small>
                                <h1 style={{fontWeight:"700",fontSize:"80px",fontFamily:"readex pro"}}>
                                    $999
                                    <span style={{fontWeight:"normal",fontSize:"18px",marginLeft:"8%",fontWeight:"bold",color:"#6C757D"}}>/mo.</span>
                                </h1>
                                <ul  style={{padding:"0px"}}>
                                    <li >
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <strong style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Unlimited users</strong>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>5GB storage</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"0.5%"}}>Unlimited public projects</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Community access</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Unlimited private project</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}>Dedicated support</span>
                                    </li>

                                    <li>
                                        <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:".5%"}}><b>Unlimited</b> linked domain</span>
                                    </li>

                                    <li>
                                    <i style={{color:"blue"}}><BsCheck/></i>
                                        <span style={{color:"#212529",fontFamily:"readex pro",marginLeft:"1.5%",opacity:".6"}}>Monthly status reports</span>
                                    </li>

                                    

                                </ul>

                                <div className={mycs.cp}>
                                    <input type="button"  value="CHOOSE PLAN" style={{width:"80%",height:"55px",borderRadius:"6px",border:"1px solid #0D6EFD",fontWeight:"bold"}}></input>
                                </div>


                                </div>
                        </Col>

                    </Row>
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

    )

}


export default Pricing;