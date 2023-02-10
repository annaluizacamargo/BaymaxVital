import './style.css';

const BoxBaymax = () => {
    console.log('BoxBaymax');
    return (
        <div className='box-baymax'>
            <div className='img-baymax'>
                <img src='./images/baymax-1.svg'></img>
            </div>
            <div className='box-text'>
                <h3>Olá [nome usuário], eu sou Baymax</h3>
            </div>
        </div>
    );
};

export default BoxBaymax;
