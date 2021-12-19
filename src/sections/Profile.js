import '../style/sections/Profile.css'
import { Container } from 'react-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeState'
import my_pic from '../Image/mp.png'
function Profile() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Container id="profile" className={darkMode ? "profile-section bg-light theme-light" : "profile-section bg-dark theme-dark"}>
            <div className="wrap-profile-content">
                <h1 className='title'>Profile</h1>
                <div>
                    <img className='size_pic' src={my_pic} alt="my pic" />
                    <p className='details'>
                        ชื่อ : นางสาวมณิสร  สมานกุล <br />
                        ชื่อเล่น : ปริม <br />
                        อายุ : 17 ปี <br />
                        วันเกิด : 11 มีนาคม พ.ศ. 2547 <br />
                        กรุ๊ปเลือด : เอบี <br />
                        ศาสนา : พุทธ <br />
                        สัญชาติ : ไทย <br />
                        เชื้อชาติ : ไทย <br />
                        กำลังศึกษาที่ : วิทยาลัยเทคนิคอุบลราชธานี <br />
                        แผนก : เทคนิคคอมพิวเตอร์ <br />
                        <br />
                        “ If you can’t explain it simply,
                        you don’t understand it well
                        enough. ”
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Profile;