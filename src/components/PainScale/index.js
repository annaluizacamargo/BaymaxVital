import './style.css';
import * as React from 'react';
import SliderPain from './SliderPain';
import FacesScale from './FacesScale';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const PainScale = () => {
    const [painValue, setPainValue] = React.useState(0);
    const [colorSlider, setColorSlider] = React.useState('');
    const navigate = useNavigate();

    const changeColor = (painValue) => {
        switch (true) {
            case (painValue <= 3):
                setColorSlider('success');
                break;
            case (painValue <= 5):
                setColorSlider('secondary');
                break;
            case (painValue <= 7):
                setColorSlider('primary');
                break;
            case (painValue <= 9):
                setColorSlider('warning');
                break;
            default:
                setColorSlider('error');
        }
    }

    const changeValue = (event) => {
        const targetValue = event.target.value;
        setPainValue(parseInt(targetValue));
        changeColor(targetValue);
    }

    return (
        <div className='pain-scale'>
            <h3>Em uma escala de 1 à 10, qual o nível da sua dor?</h3>
            <div className='container-slider'>
                <div className='faces'>
                    <FacesScale value={painValue} changeValue={changeValue} />
                </div>
                <div className='slider'>
                    <SliderPain value={painValue} changeValue={changeValue} colorSlider={colorSlider || 'success'} />
                </div>
                <div className='description'>
                    <h5 className='one' id='zero'>Sem Dor</h5>
                    <h5 className='two' id='one'>Leve</h5>
                    <h5 className='two' id='two'>Moderada</h5>
                    <h5 className='two' id='three'>Forte</h5>
                    <h5 className='two' id='four'>Muito Forte</h5>
                    <h5 className='two' id='five'>Pior Possível</h5>
                </div>
            </div>
            <Button variant="btnConfirm" onClick={() => painValue < 4? navigate('/good-scale') : navigate('/bad-scale')}>Confirmar</Button>
        </div>
    );
};

export default PainScale;
