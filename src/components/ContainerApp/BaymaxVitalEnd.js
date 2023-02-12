import BoxBaymax from '../BoxBaymax';
import './style-end.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const BaymaxVitalEnd = () => {
    const navigate = useNavigate();
    
    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' onClick={() => navigate('/')}/>
            <div className='box'>
                <BoxBaymax
                    img='./images/baymax-flower.svg'
                    text='Vou avisar o médico e enfermeiro, qualquer coisa é só me chamar para falar comigo de novo'
                />
                <Button variant="btnConfirm" onClick={() => navigate('/')}>Confirmar</Button>
            </div>
        </div>
    )
}

export default BaymaxVitalEnd;
