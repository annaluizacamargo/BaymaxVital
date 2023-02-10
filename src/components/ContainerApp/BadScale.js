import BoxBaymax from '../BoxBaymax';
import PainScale from '../PainScale';
import VoiceRecording from '../VoiceRecording';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const BadScale = () => {
    console.log('BadScale ')
    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' />
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
    )
}

//<BoxBaymax />
//<VoiceRecording color='blue' />
//<VoiceRecording color='orange' />
//<PainScale />

export default BadScale;
