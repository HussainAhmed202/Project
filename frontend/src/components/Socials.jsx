import fbImage from '../assets/fb.png'; 
import linkedinImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';

export default function Socials() {
    return (
    
            <div className="login-social-media">
                <img src={fbImage} alt="Facebook" width="50px" height="50px" />
                <img src={linkedinImage} alt="Linkedin" width="50px" height="50px" />
                <img src={twitterImage} alt="Twitter" width="50px" height="50px" />
           </div>
    
         
    )
    
}