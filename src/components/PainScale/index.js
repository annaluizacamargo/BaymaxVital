import './style.css';
import * as React from 'react';
import SliderPain from './SliderPain';
import FacesScale from './FacesScale';



const PainScale = () => {
    console.log('PainScale');
    return (
        <div className='pain-scale'>
            <h3>Em uma escala de 1 à 10, qual o nível da sua dor?</h3>
            <div className='container-slider'>
                <div className='faces'>
                    <FacesScale />
                </div>

                <SliderPain className='slider' />
            </div>
            <div className='description'>
                <h3>Sem Dor</h3>
                <h3>Dor Leve</h3>
                <h3>Dor Moderada</h3>
                <h3>Dor Forte</h3>
                <h3>Dor Muito Forte</h3>
                <h3>Pior Dor Possível</h3>
            </div>
        </div>
    );
};

export default PainScale;
