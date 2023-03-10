import BoxBaymax from '../BoxBaymax';
import VoiceRecording from './components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const BadScale = () => {
    const navigate = useNavigate();

    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' onClick={() => navigate('/pain-scale-assessment')} />
            <div className='box'>
                <BoxBaymax
                    img='./images/baymax-bad.svg'
                    text='Porque você está se sentindo assim? O que podemos fazer para você se sentir melhor?'
                />

                <VoiceRecording
                    color='blue'
                    namePatient='Anna'
                />
            </div>
        </div>
    );
};

export default BadScale;
