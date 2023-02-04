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
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            </div>
            <div className='description'>
                <h3>sem dor</h3>
                <h3>muita dor</h3>
            </div>
        </div>
    );
};

export default PainScale;
