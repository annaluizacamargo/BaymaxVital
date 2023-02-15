import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const BaymaxVitalEnd = () => {
    const navigate = useNavigate();

    return (
        <div className='container-app'>
            <FontAwesomeIcon icon={faChevronLeft} className='btn-return' onClick={() => navigate('/pain-scale-assessment')} />
            
            <div className='box-baymax-end'>
                <div className='img-baymax'>
                    <img src='./images/baymax-flower.svg'></img>
                </div>
                <div className='box-text'>
                    <h3>Vou avisar o médico e enfermeiro, qualquer coisa é só me chamar para falar comigo de novo</h3>
                    <Button className='btn-end' variant="btnConfirm" onClick={() => navigate('/')}>Confirmar</Button>
                </div>
            </div>
        </div>
    );
};

export default BaymaxVitalEnd;
