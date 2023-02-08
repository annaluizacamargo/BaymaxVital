import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const VoiceRecording = () => {
    console.log('VoiceRecording');
    return (
        <div className='voice-recording'>
            <p className='transcription'>Aqui neste box será inserida a transcrição do áudio do paciente para fins de registro médico.</p>
            <div className='buttons'>
                <FontAwesomeIcon icon={faMicrophone} className='icon' />
                <button>CONFIRMAR</button>
            </div>
        </div>
    );
};

export default VoiceRecording;
