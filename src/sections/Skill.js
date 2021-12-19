import '../style/sections/Skill.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeState'
import BeginnerSkillLight from '../Image/BeginnerSkillLight.png'
import BeginnerSkillDark from '../Image/BeginnerSkillDark.png'
import IntermediateSkillLight from '../Image/IntermediateSkillLight.png'
import IntermediateSkillDark from '../Image/IntermediateSkillDark.png'

export default function Skill() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Container id="skill" className={darkMode ? "skill-section bg-light theme-light" : "skill-section bg-dark theme-dark"}>
            <div className="wrap-skill-content"><h1 className='title'>Skill</h1>
            <Row className="skill-content">
                <Col sm><img className="skill-pic-1" src={darkMode ? BeginnerSkillLight : BeginnerSkillDark}/></Col>
                <Col sm><img className="skill-pic-2" src={darkMode ? IntermediateSkillLight : IntermediateSkillDark}/></Col>
            </Row>
            </div>
            
        </Container>
    )
}