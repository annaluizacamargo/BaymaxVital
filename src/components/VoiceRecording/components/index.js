import './style.css';
import { Button } from '@mui/material';
import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useNavigate } from "react-router-dom";

const VoiceRecording = (props) => {
    const [statusBtn, setStatusBtn] = useState(true);
    const recorderControls = useAudioRecorder();
    const colorPrimary = `var(--${props.color}-primary)`;
    const colorSecondary = `var(--${props.color}-secondary)`;
    const namePatient = props.namePatient;
    const navigate = useNavigate();

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        const addBtn = document.querySelector('.audio');
        audio.src = url;
        audio.controls = true;
        addBtn.appendChild(audio);
        setStatusBtn(false);
    };

    return (
        <div className='voice-recording'>
            <div className='audio' style={{ backgroundColor: colorPrimary }} />

            <div className='buttons'>
                <div
                    className='recorder'
                    style={{
                        backgroundColor: colorPrimary,
                        border: `${colorSecondary} 2px outset`,
                        borderRadius: '5px'
                    }}>

                    <AudioRecorder
                        className='audio-recorder'
                        onRecordingComplete={(blob) => addAudioElement(blob, namePatient)}
                        recorderControls={recorderControls}
                        style={{ backgroundColor: colorPrimary }}
                    />
                </div>

                <Button
                    disabled={statusBtn}
                    variant='btnConfirm'
                    id='btnConfirm'
                    //</div>onClick={() => {document.getElementsByTagName('audio').length > 0 ? navigate('/baymax-vital-end') : alert('Queremos melhorar cada vez mais, por favor clique no botão do microfone e nos diga o que podemos fazer para te deixar melhor 🥰')}}
                >Confirmar</Button>
            </div>
        </div>
    );
};

export default VoiceRecording;
