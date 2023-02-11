import BoxBaymax from '../BoxBaymax';
import PainScale from '../PainScale';
import VoiceRecording from '../VoiceRecording';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PainScaleMain = () => {
    console.log('GoodScale')
    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' />
            <div className='box'>
                <BoxBaymax
                    img='./images/baymax.svg'
                    text='Olá [nome usuário], eu sou Baymax, seu companheiro de cuidados pessoais de saúde'
                />

                <PainScale />
            </div>
        </div>
    )
}

//<BoxBaymax />
//<VoiceRecording color='blue' />
//<VoiceRecording color='orange' />
//<PainScale />

export default PainScaleMain;
