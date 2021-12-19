import '../style/sections/Certificates.css'
import { Container } from 'react-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeState'
import C1 from '../Image/C1.png'
import C2 from '../Image/C2.jpeg'
import C3 from '../Image/C3.png'
import C4 from '../Image/C4.png'
import C5 from '../Image/C5.jpg'
import C6 from '../Image/C6.png'
import C7 from '../Image/C7.png'
import C8 from '../Image/C8.png'
import C9 from '../Image/C9.png'
import C10 from '../Image/C10.png'
import C11 from '../Image/C11.png'

export default function Certificates() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const certificates1 = [
        { image: C1 },
        { image: C2 }
    ]
    const certificates2 = [
        { image: C3 },
        { image: C4 }
    ]
    const certificates3 = [
        { image: C5 },
        { image: C6 }
    ]
    const certificates4 = [
        { image: C7 },
        { image: C8 }
    ]
    const certificates5 = [
        { image: C9 },
        { image: C10 }
    ]
    const certificates6 = [
        { image: C11 }
    ]
    return (
            <Container id="certificates" className={darkMode ? "certificates-section bg-large-light theme-light" : "certificates-section bg-large-dark theme-dark"}>
                <div className="wrap-certificates-content title"><h1>Certificates</h1>
                    <div className="wrap-pic">
                        {
                            certificates1.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                    <div className="wrap-pic">
                        {
                            certificates2.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                    <div className="wrap-pic">
                        {
                            certificates3.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                    <div className="wrap-pic">
                        {
                            certificates4.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                    <div className="wrap-pic">
                        {
                            certificates5.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                    <div className="wrap-pic">
                        {
                            certificates6.map((value, index) => {
                                return (<img className="cer-pic" src={value.image} alt="cer" />)
                            })
                        }
                    </div>
                </div>
            </Container>
    )
}