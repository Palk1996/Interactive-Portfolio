import { Container, Row, Col } from 'react-bootstrap'
import '../style/components/SideNav.css'

function SideNav() {
    const navContent = [
        {
            title: "Home",
            scrollTo: "/"
        },
        {
            title: "About",
            scrollTo: "/"
        },
        {
            title: "Skill",
            scrollTo: "/"
        },
        {
            title: "Certificate",
            scrollTo: "/"
        },
        {
            title: "Project",
            scrollTo: "/"
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
                                        <li className="dot-handler" key={index}><a className="nav-content" href={value.scrollTo}>{value.title}</a></li>
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