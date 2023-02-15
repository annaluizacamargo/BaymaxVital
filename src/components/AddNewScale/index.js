import './style.css';
import { Alert, MenuItem, TextField } from '@mui/material';
import AlertDialog from './components/Alert';
import AlertDialogSlide from './components/Alert';

const box = [
    {
        value: 'selecione',
        label: 'selecione',
    },
    {
        value: '101A',
        label: '101A',
    },
    {
        value: '102A',
        label: '102A',
    },
    {
        value: '102B',
        label: '102B',
    },
    {
        value: '103B',
        label: '103B',
    },
    {
        value: '104A',
        label: '104A',
    },
];

const AddNewScale = () => {
    return (
        <div className='add-patient'>
            <div className='description'>
                <img src='./images/baymax-vital.svg'></img>
                <h3>Bem-vindo ao <b>BaymaxVital</b>, para utilizar esta ferramenta favor preencher os campos com os dados do paciente.</h3>
                <h5>Caso seja seu primeiro acesso, <a href='htps://youtube.com'>acesse aqui o nosso tutorial</a>.</h5>
            </div>

            <form className='form'>
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
                    id="parent-name"
                    label="Nome do Responsável"
                />
                <TextField
                    required
                    id="patient-bed"
                    select
                    label="Leito"
                    defaultValue="selecione"

                >
                    {box.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    InputLabelProps={{ shrink: true }}
                    id="date"
                    label="Data"
                    type="date"
                />

                <AlertDialogSlide />
            </form>
        </div>
    )
};

export default AddNewScale;
