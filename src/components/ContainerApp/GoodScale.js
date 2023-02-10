import BoxBaymax from '../BoxBaymax';
import PainScale from '../PainScale';
import VoiceRecording from '../VoiceRecording';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const GoodScale = () => {
    console.log('GoodScale')
    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' />
            <div className='box'>
                <BoxBaymax
                    img='./images/baymax-good.svg'
                    text='Fico feliz que está se sentindo bem! O que te deixaria ainda melhor?'
                />

                <VoiceRecording
                    color='orange'
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

export default GoodScale;
