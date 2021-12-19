import '../style/sections/Home.css'
import SideNav from '../components/SideNav';
import Profile from './Profile';
import Skill from './Skill';
import Certificates from './Certificates';
import Project from './Project';

function Home() {
    return (
      <div className="Home-Section">
        <SideNav />
        
        <Profile/>
        <Skill />
        <Certificates />
        <Project />
      </div>
    );
  }

  export default Home;