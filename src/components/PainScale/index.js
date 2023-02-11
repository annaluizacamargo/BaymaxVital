import './style.css';
import * as React from 'react';
import SliderPain from './SliderPain';
import FacesScale from './FacesScale';
import { Button } from '@mui/material';

const PainScale = () => {
    const [painValue, setPainValue] = React.useState(0)
    //const [colorSlider, setColorSlider] = useState('');

    const changeValue = (event) => {
        const targetValue = event.target.value
        //console.log(target.value)
        setPainValue(parseInt(targetValue))


    }

    return (
        <div className='pain-scale'>
            <h3>Em uma escala de 1 à 10, qual o nível da sua dor?</h3>
            <div className='container-slider'>
                <div className='faces'>
                    <FacesScale value={painValue} changeValue={changeValue} />
                </div>
                <div className='slider'>
                    <SliderPain value={painValue} changeValue={changeValue} />
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
            <Button variant="btnConfirm">Confirmar</Button>
        </div>
    );
};

export default PainScale;
