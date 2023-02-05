import './style.css';
import * as React from 'react';
import SliderPain from './SliderPain';



const PainScale = () => {
    console.log('PainScale');
    return (
        <div className='pain-scale'>
            <h3>Em uma escala de 1 à 10, qual o nível da sua dor?</h3>
            <div className='slider'>
                <SliderPain className='slider'/>
            </div>
            <div className='description'>
                <h3>sem dor</h3>
                <h3>muita dor</h3>
            </div>
        </div>
    );
};

export default PainScale;
