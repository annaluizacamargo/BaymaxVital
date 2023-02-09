import './style.css';

const BoxBaymax = () => {
    console.log('BoxBaymax');
    return (
        <div className='box-baymax'>
            <div className='img-baymax'>
                <img src='./images/baymax-1.svg'></img>
            </div>
            <div className='box-text'>
                <h3>Olá [nome usuário], eu sou Baymax, seu companheiro de cuidados pessoais de saúde</h3>
            </div>
        </div>
    );
};

export default BoxBaymax;
