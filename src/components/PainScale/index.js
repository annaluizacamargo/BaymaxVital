import './style.css';
import BoxBaymax from '../BoxBaymax';
import PainScale from './components/PainScale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const PainScaleMain = (props) => {
    const navigate = useNavigate();

    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' onClick={() => navigate('/')} />

            <div className='box'>
                <BoxBaymax
                    img='./images/baymax.svg'
                    text='Olá, eu sou Baymax, seu companheiro de cuidados pessoais de saúde'
                />

                <PainScale key={props.key} />
            </div>
        </div>
    );
};

export default PainScaleMain;
