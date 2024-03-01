import '../styles/footer.css'
import { Link }  from 'react-router-dom';

function Footer() { 
    return(
<footer className="profile-footer">
     {/* Link the user back to the homepage. The to prop is used in place of an href */}
     <Link to="/">← Go Back</Link>
    </footer>
    );
}

export default Footer;