import styled from '@emotion/styled';
import { Button, MenuItem, TextField } from '@mui/material';
import './style.css';

const box = [
    {
        value: 'Enfermaria 10 / Leito 1',
        label: '101 - A',
    },
    {
        value: 'Enfermaria 10 / Leito 2',
        label: '102 - A',
    },
    {
        value: 'Enfermaria 10 / Leito 3',
        label: '103 - A',
    },
    {
        value: 'Enfermaria 10 / Leito 3',
        label: '103 - B',
    },
    {
        value: 'Enfermaria 10 / Leito 4',
        label: '104 - B',
    },
];

const AddNewScale = () => {
    console.log('add')
    return (
        <div className='add-patient'>
            <div className='description'>
                <img src='./images/baymax-vital.svg'></img>
                <h2>Bem-vindo ao <b>BaymaxVitae</b>, para utilizar esta ferramenta favor preencher os campos com os dados do paciente.</h2>
                <h3>Caso seja seu primeiro acesso, acesse aqui o nosso tutorial.</h3>
            </div>
            <div className='form'>
                <TextField
                    required
                    id="medical-number"
                    label="Número do prontuário"
                    type="number"
                />
                <TextField
                    required
                    id="patient-name"
                    label="Nome do Paciente"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Nome do Responsável"
                />
                <TextField
                    required
                    id="select-patient-bed"
                    select
                    label="Leito"
                    helperText="Por favor, selecione o leito"
                >
                    {box.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>



                <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-password-input"
                    label="Data"
                    type="date"
                />
                <Button>Acessar</Button>
            </div>
        </div>
    )
};

export default AddNewScale;
