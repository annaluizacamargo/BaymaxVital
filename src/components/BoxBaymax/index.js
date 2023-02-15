import './style.css';

const BoxBaymax = (props) => {
    const imgBaymax = props.img;
    const txtBox = props.text;

    return (
        <div className='box-baymax'>
            <div className='img-baymax'>
                <img src={imgBaymax}></img>
            </div>
            <div className='box-text'>
                <h3>{txtBox}</h3>
            </div>
        </div>
    );
};

export default BoxBaymax;
