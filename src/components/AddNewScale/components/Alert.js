import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const navigate = useNavigate();

    const HandleClickOpen = () => {
        const medicalNumber = document.getElementById('medical-number').value;
        const namePatient = document.getElementById('patient-name').value;
        const parentName = document.getElementById('parent-name').value;
        const boxNumber = document.getElementById('patient-bed').textContent;
        const date = document.getElementById('date').value;
        const dadosLocalStorage = {
            namePatient: namePatient,
            parentName: parentName,
            boxNumber: boxNumber,
            dateScale: date
        };

        switch (true) {
            case (medicalNumber == ''): {
                setMessage('Número do Prontuário do Paciente.');
                setOpen(true);
                break;
            };
            case (namePatient == ''): {
                setMessage('Nome do Paciente.');
                setOpen(true);
                break;
            };
            case (parentName == ''): {
                setMessage('Nome do Responsável pelo Paciente.');
                setOpen(true);
                break;
            };
            case (boxNumber == '' || boxNumber == 'selecione'): {
                setMessage('Leito do Paciente.');
                setOpen(true);
                break;
            };
            case (date == ''): {
                setMessage('Data da Avaliação');
                setOpen(true);
                break;
            };
            default: {
                navigate('/pain-scale-assessment', { state: medicalNumber });
                localStorage.setItem(medicalNumber, JSON.stringify(dadosLocalStorage));
            };
        };
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={HandleClickOpen}>
                Acessar
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Para prosseguir, preencha todos os dados !!!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Por favor, coloque o(a) <b>{message}</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Okay</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}