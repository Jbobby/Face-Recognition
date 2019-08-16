import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <h4 className='f3 tc'> This App Recognises The Face When You Upload An Image. Try It Out. </h4>
            <div className='center'>
                <div className='shadow-5 br3 pa4 bg-hot-pink pattern'>
                    <input className='pa2 f4 w-70' type='text' placeholder='Paste Image URL' onChange={ onInputChange }/>
                    <button className='f4 grow w-30 link pv2 dib white bg-light-purple' onClick={ onButtonSubmit }> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;