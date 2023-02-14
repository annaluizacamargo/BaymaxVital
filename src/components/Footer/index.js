import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    console.log('Footer');
    return (
        <footer className='footer'>
            <div className='credits'>
                <p>© Desenvolvido por Anna Luiza - 2023</p>
            </div>
            <ul className='contact'>
                <li>
                    <a href='https://www.linkedin.com/in/anna-luiza-camargo-fistarol/'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/annaluizacamargo'>
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                </li>
                <li>
                    <a href='mailto:luizafistarol@gmail.com'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
