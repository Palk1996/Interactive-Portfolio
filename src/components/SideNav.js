import { Container, Row, Col } from 'react-bootstrap'
import '../style/components/SideNav.css'
import { FaHome, FaInfo, FaCertificate} from 'react-icons/fa'
import { GiSkills} from 'react-icons/gi'
import { AiFillProject} from 'react-icons/ai'

function SideNav() {
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
            icon: <FaCertificate className="dot-icon"/>
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
                <Col className="nav-area">
                    <div className="nav">
                        <ul>
                            {
                                navContent.map((value, index) => {
                                    return (
                                        <Row>
                                            <Col ><a className="dot-handler" key={index}>{value.icon}</a></Col>
                                            <Col ><li className="nav-content" href={value.scrollTo}>{value.title}</li> </Col>
                                        </Row>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default SideNav;