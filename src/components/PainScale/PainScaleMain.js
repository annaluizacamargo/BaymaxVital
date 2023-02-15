import BoxBaymax from '../BoxBaymax';
import PainScale from './components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PainScaleMain = () => {
    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' />
            <div className='box'>
                <BoxBaymax
                    img='./images/baymax.svg'
                    text='Olá, eu sou Baymax, seu companheiro de cuidados pessoais de saúde'
                />

                <PainScale />
            </div>
        </div>
    )
};

export default PainScaleMain;