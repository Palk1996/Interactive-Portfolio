import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../style/components/SideNav.css'
import { FaHome, FaCertificate, FaFacebook, FaLine, FaInstagram, FaGithub } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { AiFillProject } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { ThemeContext } from "../theme/ThemeState";


function SideNav() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const toggleDarkMode = () => {
        darkMode ? theme.dispatch({ type: "LIGHTMODE" }) : theme.dispatch({ type: "DARKMODE" });
    };

    const navContent = [
        {
            title: "Home",
            scrollTo: "#home",
            icon: <FaHome className="dot-icon" />
        },
        {
            title: "Profile",
            scrollTo: "#profile",
            icon: <BsPersonFill className="dot-icon" />
        },
        {
            title: "Skill",
            scrollTo: "#skill",
            icon: <GiSkills className="dot-icon" />
        },
        {
            title: "Certificates",
            scrollTo: "#certificates",
            icon: <FaCertificate className="dot-icon" />
        },
        {
            title: "Project",
            scrollTo: "#project",
            icon: <AiFillProject className="dot-icon" />
        }
    ]

    const contact = [
        { icon: <FaFacebook className={darkMode ? "contact-icon-light" : "contact-icon-dark"} />, directTo: "https://www.facebook.com/profile.php?id=100015487428206" },
        { icon: <FaLine className={darkMode ? "contact-icon-light" : "contact-icon-dark"} />, directTo: "https://line.me/ti/p/d0mn0dtUNl" },
        { icon: <FaInstagram className={darkMode ? "contact-icon-light" : "contact-icon-dark"} />, directTo: "https://www.instagram.com/primary_prim/" },
        { icon: <FaGithub className={darkMode ? "contact-icon-light" : "contact-icon-dark"} />, directTo: "https://github.com/Palk1996" },
    ]
    return (
        <div id="home" className={darkMode ? "wrap-site bg-light" : "wrap-site bg-dark"}>
            <ul className="floating-contact">
                {
                    contact.map((value, index) => {
                        return (
                            <li className="wrap-icon"><a className="icon" href={value.directTo}>{value.icon}</a></li>
                        )
                    })
                }

            </ul>
            <div className="wrap-nav">
                <Container>
                    <Col className={darkMode ? "nav-area theme-light" : "nav-area theme-dark"}>
                        <div className="nav">
                            <ul>
                                {
                                    navContent.map((value, index) => {
                                        return (
                                            <Row className="hover-me" >
                                                <Col ><a className="dot-handler" href={value.scrollTo}>{value.icon}</a></Col>
                                                <Col ><li className="nav-content" key={index}>{value.title}</li> </Col>
                                            </Row>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div class="toggleWrapper">
                            <input type="checkbox" onChange={toggleDarkMode} className="dn" id="dn" />
                            <label for="dn" className="toggle">
                                <span className="toggle__handler">
                                    <span className="crater crater--1"></span>
                                    <span className="crater crater--2"></span>
                                    <span className="crater crater--3"></span>
                                </span>
                                <span className="star star--1"></span>
                                <span className="star star--2"></span>
                                <span className="star star--3"></span>
                                <span className="star star--4"></span>
                                <span className="star star--5"></span>
                                <span className="star star--6"></span>
                            </label>
                        </div>
                    </Col>
                </Container>
            </div>
            <Container className={darkMode ? "home-section theme-light" : "home-section theme-dark"}>
                <div className='wrap-home-content'>
                    <span class="wave">👋</span>
                    <h1 className="home-title">Welcome to my personal website</h1>
                    <h3 className="home-sub">Hello I'm Manisorn</h3>
                    <p className="home-content"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This website was made so that more people may learn about me. I'm hoping that this website will demonstrate my ability to visitors.</p>
                </div>
            </Container>
        </div>
    );
}

export default SideNav;