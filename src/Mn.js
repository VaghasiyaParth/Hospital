import mycs from './mycss.module.css';
import { Nav, Navbar, Container, NavDropdown, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBookMedical } from "react-icons/fa";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

import { FcCheckmark } from "react-icons/fc";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiEye } from "react-icons/fi";
import { IoIosArrowDroprightCircle } from "react-icons/io";




import About from "./About";


function Mn() {

  return (
    <>






      <div className={mycs.m4}>
        <Row>

          <Col lg="10" className={mycs.m11}>
            <p className={mycs.m5}>We provide <b style={{ color: "orange" }}>medical</b> services that you can <b style={{ color: "orange" }}>trust!</b></p>
            <p className={mycs.m6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>

          </Col>
          <Col lg="2" className={mycs.m10}>
            <img id='abc' className={mycs.doctor} src={require('./image/doctor.png')}></img>

          </Col>
        </Row>
      </div>

      <div style={{ backgroundColor: "whitesmoke" }}>
        <Container className={mycs.m9} >
          <Row>
            <Col lg="4" md="12" sm="display=none">
              <p>OUR SERVICES</p>
              <h1><b>We are always ready to help you & your family</b></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </Col>
            <Col>
              <Row>
                <Col lg="6">
                  <p><  FaBookMedical style={{ height: "1%", width: "8%", marginLeft: "24%" }} /></p>
                  <p style={{ margin: "-2% 0 0 25%", fontSize: "20px", color:"#1e5ad7" }}><b>General Treatment</b></p>
                  <p style={{ margin: "2% 0 10% 25%", fontFamily: "Tw Cen MT", fontSize: "18px"   }}>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </Col>

                <Col lg="6">
                  <p><  MdOutlineInsertChartOutlined style={{ height: "1%", marginLeft: "24%", width: "10%" }} /></p>
                  <p style={{ margin: "-3% 0 0 25%", fontSize: "20px" , color:"#1e5ad7"}}><b>Ear Treatment</b></p>
                  <p style={{ margin: "2% 0 10% 25%", fontFamily: "Tw Cen MT", fontSize: "18px" }}>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </Col>


              </Row>
              <Row >
                <Col lg="6">
                  <p><  FiEye style={{ width: "10%", height: "1%", marginLeft: "24%" }} /></p>
                  <p style={{ margin: "-3% 0 0% 25%", fontSize: "20px", color:"#1e5ad7" }}><b>Vision Problems</b></p>
                  <p style={{ margin: "2% 0 10% 25%", fontFamily: "Tw Cen MT", fontSize: "18px" }}>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </Col>
                <Col lg="6">
                  <p><  AiFillHeart style={{ height: "1%", width: "10%", marginLeft: "24%"}} /></p>
                  <p style={{ margin: "-3% 0 0% 25%", fontSize: "20px", color:"#1e5ad7" }}><b>Heart Surgery</b></p>
                  <p style={{ margin: "2% 0 10% 25%", fontFamily: "Tw Cen MT", fontSize: "18px" }}>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>

      </div>
      <Container>
        <Row>
          <Col lg="12">
            <h1 style={{ textAlign: "center", marginTop: "5%", fontFamily: "poppins" }}><b>Latest News & Tips</b></h1>
            <p style={{ backgroundColor: "blue", height: "4%", width: "3%", marginLeft: "49%" }}></p>
          </Col>
          <Col lg="12" style={{ fontFamily: "Copperplate Gothic", fontSize: "19px", padding: "3% 13.5%", textAlign: "center" }}>Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada.</Col>
        </Row>
      </Container>
      <div>
        <Container className={mycs.main}>
          <Row lg="12">
            <Col>
              <Card className={mycs.sub} style={{ width: '24rem' }}>
                <img src={require('./image/1.jpg')} className={mycs.imag}></img>
                <Card.Body>
                  <p className={mycs.m13}>24 March 2020</p>
                  <p className={mycs.admin}>By Admin</p>
                  <p className={mycs.clinic}>Doctor , Clinic</p>
                  <h3 className={mycs.medical}>Medical and Love Have 4 Things In Common</h3>
                  <Card.Text style={{ margin: "6% 5% 6% 0", fontFamily: "calibri", fontSize: "18px", opacity: "0.4" }}>
                    consequat vulputate eget metumpeng magna commodo purus etiam.
                  </Card.Text>
                  <Button
                    style={{
                      borderRadius: "30px",
                      padding: "3% 8%",
                      backgroundColor: "white",
                      color: "#777",
                      border: "1px solid black",
                      fontWeight: "bold",
                      opacity: " 0.8",
                      fontSize: "18px"
                    }}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '24rem' }} className={mycs.sub}>
                <img src={require('./image/2.jpg')} className={mycs.imag}></img>
                <Card.Body>
                  <p className={mycs.m13}>28 March 2020</p>
                  <p className={mycs.admin}>By Helth</p>
                  <p className={mycs.clinic}>Health , Medical</p>
                  <h3 className={mycs.medical}>22 Tips To Start Building A Medical</h3>
                  <Card.Text style={{ margin: "6% 5% 6% 0", fontFamily: "calibri", fontSize: "18px", opacity: "0.4" }}>
                    consequat vulputate eget metumpeng magna commodo purus etiam.
                  </Card.Text>
                  <Button
                    style={{
                      borderRadius: "30px",
                      padding: "3% 8%",
                      backgroundColor: "white",
                      color: "#777",
                      border: "1px solid black",
                      fontWeight: "bold",
                      opacity: " 0.8",
                      fontSize: "18px"
                    }}>Read More</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Card style={{ width: '24rem' }} className={mycs.sub}>
                <img src={require('./image/3.jpg')} className={mycs.imag}></img>
                <Card.Body>
                  <p className={mycs.m13}>30 March 2020</p>
                  <p className={mycs.admin}>By Admin</p>
                  <p className={mycs.clinic}>Care , Surgery</p>
                  <h3 className={mycs.medical}>Being A Star In You dustry Is A Matter</h3>
                  <Card.Text style={{ margin: "6% 5% 6% 0", fontFamily: "calibri", fontSize: "18px", opacity: "0.4" }}>
                    consequat vulputate eget metumpeng magna commodo purus etiam.
                  </Card.Text>
                  <Button
                    style={{
                      borderRadius: "30px",
                      padding: "3% 8%",
                      backgroundColor: "white",
                      color: "#777",
                      border: "1px solid black",
                      fontWeight: "bold",
                      opacity: " 0.8",
                      fontSize: "18px"
                    }}
                  >Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      <div className={mycs.bi}>

        <p className={mycs.m14}>OUR CLINIC PROVIDES</p>
        <p className={mycs.m15}>
          <h2>BEST QUALITY</h2>
          <h1 style={{ fontWeight: "bold" }}>MEDICAL TREATMENT FOR YOUR AND YOUR FAMILY</h1>
          <p style={{ padding: "4% 0 0 0" }} className={mycs.m16}>⁕ Risus nec luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien and luctus</p>

          <p className={mycs.m16}>⁕ Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
          <Button className={mycs.bt} style={{ backgroundColor: "#00a3c8", padding: "2% 5%", marginTop: "3%", letterSpacing: "1px" }} >Discover More</Button>

        </p>
        <img src={require('./image/4.jpg')} style={{ height: "850px", width: "100%", position: "relative" }}></img>
      </div>

      <div className={mycs.m17}>

        <Container>
          <Row >
            <Col lg="4" md="12" sm="12" className={mycs.m18}><p>Opening Hours</p>
              <table width="100%" className={mycs.tbl}>
                <tr style={{ borderBottom: "0.5px black dashed" }} >
                  <td className={mycs.var}>Mon-Wed</td>
                  <td className={mycs.dash}>-</td>
                  <td className={mycs.time}>9:00 Am - 7:00 Pm</td>
                </tr>
                <tr style={{ borderBottom: "0.5px black dashed" }}>
                  <td className={mycs.var}>Thursday</td>
                  <td className={mycs.dash}>-</td>
                  <td className={mycs.time}>9:00 Am - 6:30 Pm</td>
                </tr>

                <tr style={{ borderBottom: "0.5px black dashed" }}>
                  <td className={mycs.var}>Friday</td>
                  <td className={mycs.dash}>-</td>
                  <td className={mycs.time}>9:00 Am - 6:00 Pm</td>
                </tr>
                <tr>
                  <td className={mycs.var}>Sat-Sun</td>
                  <td className={mycs.dash}>-</td>
                  <td className={mycs.time} style={{ paddingLeft: "30%" }}>CLOSED</td>
                </tr>
              </table>
            </Col>
            <Col className={mycs.m19}><p>Doctors Timetable</p>
              <p style={{ fontWeight: "normal", fontSize: "18px", paddingTop: "5%" }}>
                An magnis nulla dolor at sapien augue iaculis purus tempor magna ipsum vitae and purus primis ipsum magna ipsum at tempus feugiat dolor impedit felis magna ipsum primis cubilia laoreet augue suscipit lectus mauris
              </p>
              <Button className={mycs.bt} style={{ backgroundColor: "#00a3c8", padding: "2% 5%", marginTop: "3%", letterSpacing: "1px" }} >View Timeline</Button>

            </Col>
            <Col className={mycs.m21}><p>Emergency Cases</p>
              <h2 style={{ fontWeight: "bold", color: "blue" }}>📞1-800-123-4560</h2>
              <p style={{ fontWeight: "normal", fontSize: "18px", paddingTop: "5%" }}>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum vitae a purus primis ipsum magna ipsum tempus feugiat dolor impedit felis magna</p>
            </Col>
          </Row>
        </Container>


      </div>

      <div className={mycs.m20}>
        <p className={mycs.ig}>

          <img src={require('./image/2.png')}></img>

        </p>
        <p style={{ marginLeft: "12%" }}>
          <h5 style={{ fontSize: "16px", fontWeight: "bold", color: "blue" }}>OUR PRICING</h5>
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold", margin: "2% 0 0 0" }}>Our Packages Are Budget Friendly for Everyone</h1>
          <p style={{ fontWeight: "normal", fontSize: "18px", opacity: "0.5", fontFamily: "roboto", margin: "1% 0 0 0" }}>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, primis in orci integer metus mollis faucibus enim</p>

          <table width="37%" className={mycs.tb}>
            <tr style={{ borderBottom: "0.5px black dashed", backgroundColor: "white" }} >
              <td className={mycs.f}><b>#</b></td>
              <td className={mycs.s} style={{ opacity: "1" }}><b>Service</b></td>
              <td className={mycs.t} style={{ opacity: "1" }}><b>Price</b></td>

            </tr>
            <tr style={{ borderBottom: "0.5px black dashed" }} >
              <td className={mycs.f}>1</td>
              <td className={mycs.s}>X-Ray</td>
              <td className={mycs.t}>From<b>$325.00</b></td>
            </tr>
            <tr style={{ borderBottom: "0.5px black dashed" }}>
              <td className={mycs.f}>2</td>
              <td className={mycs.s}>Magnetic Resonance Imaging</td>
              <td className={mycs.t}>From<b>$435.00</b></td>
            </tr>

            <tr style={{ borderBottom: "0.5px black dashed" }}>
              <td className={mycs.f}>3</td>
              <td className={mycs.s}>Computer Tomography</td>
              <td className={mycs.t}>From<b>$315.00</b></td>
            </tr>
            <tr>
              <td className={mycs.f}>4</td>
              <td className={mycs.s}>Laboratory Tests</td>
              <td className={mycs.t}>From<b>$90.00</b></td>
            </tr>
          </table>
        </p>
      </div>
      <div className={mycs.min}>
        <Container >
          <Col>
            <Row style={{ textAlign: "center" }}>
              <h1>Have a Question? Get In Touch</h1>
              <p>Have a question? Want to book an appointment for yourself or your children? Give us a call or send an email to<br></br> contact the MedService.</p>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col lg="3" md="12">
                <Row>
                  <h4>General Information</h4>
                  <p>121 King Street, Melbourne,

                    Victoria 3 0 0 0 Australia

                    Phone: + 1 29 87 65 43 21

                    Email: hello@yourdomain.com</p>
                </Row>
                <Row>
                  <h4>Patient Experience</h4>
                  <p>
                    Hannah Harper - Patient Experience Coordinator

                    Phone: +12 9 8765 4321

                    Email: hello@yourdomain.com
                  </p>
                </Row>
                <Row>
                  <h4>Working Hours</h4>
                  <p>Monday – Friday : 8:00 AM - To - 8:00 PM

                    Saturday : 10 :00  AM  - To -  6: 00 PM

                    Sunday : 10:00 AM - 4:00 PM</p>
                </Row>
              </Col>

              <Col lg="8" style={{ margin: "0 50px" }}>
                <Row lg="3" md="3" sm="3" xs="3" style={{ marginBottom: "15px" }}>
                  <input type="text" placeholder="Your Name*"></input>
                  <input type="text" placeholder="Your Email" style={{ marginLeft: "50px" }}></input>

                </Row>
                <Row lg="3" md="3" sm="3" xs="3" style={{ marginBottom: "15px" }}>
                  <input type="text" placeholder="Your Phone Number"></input>
                  <select style={{ marginLeft: "50px", border: "1px solid black", borderRadius: "4px", opacity: "1" }}>
                    <option  >Have You Visited Us Before?*</option>
                    <option>New Patient</option>
                    <option>Returning Patient</option>
                    <option>Other</option>

                  </select>
                  {/* <input type="select" placeholder="Your Name*" style={{marginLeft:"50px"}}></input> */}
                </Row>
                <Row lg="1" style={{ marginBottom: "15px" }}>
                  <input type="text" placeholder="Subject*"></input>

                </Row>
                <Row lg="1">
                  <input type="text" placeholder="Your Message..." style={{ paddingBottom: "150px" }}></input>

                </Row>
                <Row lg="4">
                  <input className={mycs.in} type="button" value="Send Your Message" style={{ marginTop: "30px", color: "#fff" }}></input>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>


      <div className={mycs.footer}>

        <Container style={{ color: "#fff", padding: "100px 0 100px 0" }}>

          <Row className={mycs.ww}>
            <Col xs="12" sm="12" lg="6" md="6" xxl="4">
              <img className={mycs.logo} style={{ margin: "0 0 20px 0" }} src={require('./image/1.png')}></img>
              <p style={{ backgroundColor: "blue", height: "3px", width: "40px" }}></p>
              <div style={{ padding: "30px 0 0 0" }} className={mycs.he}>
                <p>Penatibus in, litora dictumst suspendamuanim<br></br> egestas, libero mollis molestiae sit et sem nisl<br></br> inquam vitae euismoellentesque.nd this is<br></br> over head.</p>
                <ul>
                  <li>

                    <button className={mycs.bu} style={{ border: "none", borderRadius: "50%", width: "35px", height: "35px" }}>  <FiFacebook /></button>

                  </li>
                  <li>
                    <button className={mycs.bu} style={{ border: "none", borderRadius: "50%", width: "35px", height: "35px" }}>  < FiInstagram /></button>
                    {/* <a href="instagram.com/parth_vaghasiya_111/">hy</a> */}
                  </li>
                  <li>
                    <button className={mycs.bu} style={{ border: "none", borderRadius: "50%", width: "35px", height: "35px" }}>  < FiTwitter /></button>

                  </li>
                  <li>
                    <button className={mycs.bu} style={{ border: "none", borderRadius: "50%", width: "35px", height: "35px" }}>  < FiLinkedin /></button>

                  </li>
                </ul>
              </div>
            </Col>

            <Col xs="12" sm="6" md="6" lg="6" xxl="2">
              <h4 style={{ padding: "0 0 20px 0" }}>Usefull Link</h4>
              <p style={{ backgroundColor: "blue", height: "3px", width: "40px" }}></p>

              <ul className={mycs.in2} >
                <li>
                  <button className={mycs.ic} >
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> About</b>
                  </button>


                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Our Services</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Our Mission</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Find Doctor</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Appointment</b>
                  </button>
                </li>
              </ul>


            </Col>

            <Col xs="12" sm="6" md="6" lg="4" xxl="2">
              <h4 style={{ padding: "0 0 20px 0" }}>Our Services</h4>
              <p style={{ backgroundColor: "blue", height: "3px", width: "40px" }}></p>

              <ul className={mycs.in2} >
                <li>
                  <button className={mycs.ic} >
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}>Cardiology</b>
                  </button>


                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Out Patient</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Gynaecological</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}>Dental Surgery</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Laboratory</b>
                  </button>
                </li>
              </ul>

            </Col>

            <Col xs="12" sm="6" md="6" lg="4" xxl="2">
              <h4 style={{ padding: "0 0 20px 0" }}>Terms</h4>
              <p style={{ backgroundColor: "blue", height: "3px", width: "40px" }}></p>

              <ul className={mycs.in2} >
                <li>
                  <button className={mycs.ic} >
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Announcement</b>
                  </button>


                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Privacy Policy</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Terms Of Service</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Refund Policy</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Lisence Info</b>
                  </button>
                </li>
              </ul>

            </Col>

            <Col xs="12" sm="6" md="6" lg="4" xxl="2">
              <h4 style={{ padding: "0 0 20px 0" }}>Support</h4>
              <p style={{ backgroundColor: "blue", height: "3px", width: "40px" }}></p>

              <ul className={mycs.in2} >
                <li className={mycs.qq}>
                  <button className={mycs.ic} >
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> F.A.Q</b>
                  </button>


                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Get Support</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Our Forum</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
                    <b className={mycs.in1}> Member Area</b>
                  </button>

                  <button className={mycs.ic}>
                    <b className={mycs.in}><IoIosArrowDroprightCircle /></b>
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
export default Mn;  