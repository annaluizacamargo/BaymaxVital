import './style.css';
import { Button } from '@mui/material';
import React from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
};

const VoiceRecording = (props) => {
    const colorPrimary = `var(--${props.color}-primary)`;
    const colorSecondary = `var(--${props.color}-secondary)`;
    const recorderControls = useAudioRecorder();

    return (
        <div className='voice-recording'>
            <p className='transcription' style={{ backgroundColor: colorPrimary }}>Aqui neste box será inserida a transcrição do áudio do paciente para fins de registro médico.</p>
            <div className='buttons'>
                <AudioRecorder
                    className='audio-recorder'
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                />
                <Button variant="btnConfirm">Confirmar</Button>
            </div>
        </div>
    );
};

export default VoiceRecording;
