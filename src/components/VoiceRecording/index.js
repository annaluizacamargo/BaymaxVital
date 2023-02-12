import './style.css';
import { Button } from '@mui/material';
import React from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useNavigate } from "react-router-dom";

const addAudioElement = (blob, namePatient) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    const addBtn = document.querySelector('.audio');
    addBtn.appendChild(audio);
    //localStorage.setItem(namePatient, JSON.stringify(blob))
};

const VoiceRecording = (props) => {
    const navigate = useNavigate();
    const colorPrimary = `var(--${props.color}-primary)`;
    const namePatient = props.namePatient
    const recorderControls = useAudioRecorder();

    return (
        <div className='voice-recording'>
            <div className='buttons'>
                <AudioRecorder
                    className='audio-recorder'
                    onRecordingComplete={(blob) => addAudioElement(blob, namePatient)}
                    recorderControls={recorderControls}
                    style={{ backgroundColor: colorPrimary }}
                />
                <div className='audio' style={{ backgroundColor: colorPrimary }}>
                </div>
                <Button variant="btnConfirm" onClick={() => {
                    document.getElementsByTagName('audio').length > 0
                        ? navigate('/baymax-vital-end')
                        : alert('Queremos melhorar cada vez mais, por favor clique no botão do microfone e nos diga o que podemos fazer para te deixar melhor :)')
                }}>Confirmar</Button>
            </div>
        </div>
    );
};

export default VoiceRecording;
