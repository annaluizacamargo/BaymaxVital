import './style.css';
import { Button } from '@mui/material';
import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    const addBtn = document.querySelector('.audio')
    addBtn.appendChild(audio);
};

const VoiceRecording = (props) => {
    const colorPrimary = `var(--${props.color}-primary)`;
    //const colorSecondary = `var(--${props.color}-secondary)`;
    const recorderControls = useAudioRecorder();

    return (
        <div className='voice-recording'>
            <div className='buttons'>
                <AudioRecorder
                    className='audio-recorder'
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                    style={{ backgroundColor: colorPrimary }}
                />
                <div className='audio' style={{ backgroundColor: colorPrimary }}>
                </div>
                <Button variant="btnConfirm">Confirmar</Button>
            </div>
        </div>
    );
};

export default VoiceRecording;
