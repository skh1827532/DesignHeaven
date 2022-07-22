import React, { useState } from 'react';


const FileUploader = (props) => {
    const hiddenFileInput = React.useRef(null);
    const [img, setImg] = useState("https://robohash.org/asdasd")

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.setImagePath(prevArray => [...prevArray, fileUploaded ])
        setImg(`${URL.createObjectURL(fileUploaded)}`)
    };
    return (
        <>
            <img 
            className='competition__form__inspirations__ins'
            onClick={handleClick}
            src={`${img}`}/>   
            
            <input type="file"
                accept="image/png, image/jpeg"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};
export default FileUploader;