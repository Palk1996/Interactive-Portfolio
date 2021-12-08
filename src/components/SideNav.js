import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../style/components/SideNav.css'
import { FaHome, FaInfo, FaCertificate } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { AiFillProject } from 'react-icons/ai'

function SideNav() {
    const class_name = "toLightMode"
    const [theme, setTheme] = useState(true)

    const toggleDarkMode = () => {
        setTheme(!theme)
    }

    const navContent = [
        {
            title: "Home",
            scrollTo: "/",
            icon: <FaHome className="dot-icon" />
        },
        {
            title: "About",
            scrollTo: "/",
            icon: <FaInfo className="dot-icon" />
        },
        {
            title: "Skill",
            scrollTo: "/",
            icon: <GiSkills className="dot-icon" />
        },
        {
            title: "Certificate",
            scrollTo: "/",
            icon: <FaCertificate className="dot-icon" />
        },
        {
            title: "Project",
            scrollTo: "/",
            icon: <AiFillProject className="dot-icon" />
        }
    ]
    return (
        <div className="wrap-nav">
            <Container>
                <Col className={theme ? "nav-area theme-light" : "nav-area theme-dark"}>
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
    );
}

export default SideNav;