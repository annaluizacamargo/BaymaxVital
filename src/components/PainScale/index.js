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
                <div className='slider'>
                    <SliderPain />
                </div>
            </div>
            <div className='description'>
                <h4 className='one' id='zero'>Sem Dor</h4>
                <h4 className='two' id='one'>Leve</h4>
                <h4 className='two' id='two'>Moderada</h4>
                <h4 className='two' id='three'>Forte</h4>
                <h4 className='two' id='four'>Muito Forte</h4>
                <h4 className='two' id='five'>Pior Possível</h4>
            </div>
        </div>
    );
};

export default PainScale;
