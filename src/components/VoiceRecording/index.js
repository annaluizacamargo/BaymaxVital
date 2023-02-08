import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';

const VoiceRecording = (props) => {
    const colorPrimary = `var(--${props.color}-primary)`;
    const colorSecondary = `var(--${props.color}-secondary)`;
    console.log(props.color);
    
    return (
        <div className='voice-recording'>
            <p className='transcription' style={{backgroundColor: colorPrimary}}>Aqui neste box será inserida a transcrição do áudio do paciente para fins de registro médico.</p>
            <div className='buttons'>
                <FontAwesomeIcon icon={faMicrophone} className='icon' style={{color: colorSecondary}}/>
                <Button variant="btnConfirm">Confirmar</Button>
            </div>
        </div>
    );
};

export default VoiceRecording;
