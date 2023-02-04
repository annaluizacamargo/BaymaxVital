import './style.css';
import { Slider } from '@mui/material';

const PainScale = () => {
    console.log('PainScale');
    return (
        <div className='pain-scale'>
            <h3>Em uma escala de 1 à 10, qual o nível da sua dor?</h3>
            <div className='scale'>
                <StyledRating
                    name="highlight-selected-only"
                    defaultValue={2}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value: number) => customIcons[value].label}
                    highlightSelectedOnly
                />
            </div>
            <div className='slider'>
                <Slider
                    aria-label="SliderPainScale"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                />
            </div>
            <div className='description'>
                <h3>sem dor</h3>
                <h3>muita dor</h3>
            </div>
        </div>
    );
};

export default PainScale;
