import '../style/sections/Project.css'
import { Container, Row, Col } from 'react-bootstrap'
import Project_img from '../Image/IoT.png'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeState'

export default function Project() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Container id="project" className={darkMode ? "project-section bg-light theme-light" : "project-section bg-dark theme-dark"}>
            <div className="wrap-project-content title"><h1>Project</h1>
                <Col sm className="wrap-project">
                    <div className="card">
                        <img src={Project_img} alt="Thumbnail" className="thumbnail" />
                        <div className="content">
                            <p className={darkMode ? "date-light" : "date-dark"}>Published on Oct 8, 2021</p>
                            <h3 className={darkMode ? "project-title-light link-to" : "project-title-dark link-to"}>Iot Application</h3>
                            <Container className="row-btn">
                                <Row className="wrap-project-btn">
                                    <a className="liveDemo" href="https://github.com/ISongwuts/IOT-APP">
                                        Source Code
                                    </a>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    )
}