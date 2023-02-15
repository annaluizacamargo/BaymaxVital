import styled from '@emotion/styled';
import { Alert, Button, MenuItem, TextField } from '@mui/material';
import './style.css';
import { useFormControl } from '@mui/material/FormControl';
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
    console.log('add')
    //const [statusBtn, setStatusBtn] = useState(true)

    function checkInput() {
        const medicalNumber = document.getElementById('medical-number')
        const namePatient = document.getElementById('patient-name').value
        const parentName = document.getElementById('parent-name').value
        const boxNumber = document.getElementById('patient-bed').textContent
        const date = document.getElementById('date').value

        console.log(boxNumber)

        switch (true) {
            case (medicalNumber.value == ''): {
                alert('Por favor, coloque o número do prontuário do Paciente!')
                return (<Alert severity="error">This is an error alert — check it out!</Alert>)
                break
            }
            case (namePatient == ''): {
                alert('Por favor, coloque o nome do Paciente')
                break
            }
            case (parentName == ''): {
                alert('Por favor, coloque o nome do Responsável pelo Paciente')
                break
            }
            case (boxNumber == '' || boxNumber == 'selecione' ): {
                alert('Por favor, selecione o leito do Paciente')
                break
            }
            case (date == ''): {
                alert('Por favor, coloque a data da avaliação')
                break
            }
            default: {
                AlertDialog()
            }
        }
    }

    return (
        <div className='add-patient'>
            <div className='description'>
                <img src='./images/baymax-vital.svg'></img>
                <h3>Bem-vindo ao <b>BaymaxVitae</b>, para utilizar esta ferramenta favor preencher os campos com os dados do paciente.</h3>
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
