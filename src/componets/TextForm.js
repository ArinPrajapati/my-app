import React, { useEffect, useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlerts("Converted to UpperCase", "success");

    };

    const handleLowClick = () => {
        // console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.showAlerts("Converted to LowerCase", "success");

    }
    const handleCleClick = () => {
        let newText = '';
        setText(newText);
        props.showAlerts("Text Cleared", "success");

    }
    const handleSenClick = () => {
        let newtext = text.toLowerCase().split(' ');
        for (let i = 0; i < newtext.length; i++) {
            let newtext2 = newtext[i];
            newtext2 = newtext2.split('');
            newtext2[0] = newtext2[0].toUpperCase();
            newtext2 = newtext2.join('');

            newtext[i] = newtext2;
            setText(newtext.join(' '));
        }
        props.showAlerts("Converted to Sentence Case", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);

    };
    const handleCopy = () => {
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    // {// css}

    const cardStyle = {
        Width: '20%',
    }

    const paraStyle = {
        fontSize: '5rem',
    };
    // colors

    const [themeColor, setThemeColor] = useState();

    useEffect(() => {
        if (props.colorTheme === 'Blue') {
            setThemeColor("primary");
        }
        else if (props.colorTheme === 'Yellow') {
            setThemeColor("warning");
        }
        else if (props.colorTheme === 'Green') {
            setThemeColor("success");
        }
        else if (props.colorTheme === 'Gray') {
            setThemeColor("secondary");
        }
        else {
            setThemeColor("primary");
        }
    }, [props.colorTheme]);

    const [bgColor, setBgColor] = useState();
    const [textColor, setTextColor] = useState();

    useEffect(() => {
        if (props.mode === 'light') {
            setBgColor("white");
            setTextColor("black");
        }
        else {

            if (props.colorTheme === 'Blue') {
                setBgColor("#0B0B51");
                setTextColor("white");
            }
            else if (props.colorTheme === 'Yellow') {
                setBgColor("#FFD700");
                setTextColor("black");
            }
            else if (props.colorTheme === 'Green') {
                setBgColor("#00FF00");
                setTextColor("black");
            }
            else if (props.colorTheme === 'Gray') {
                setBgColor("#808080");
                setTextColor("white");
            }
            else {
                setBgColor("#0B0B51");
                setTextColor("black");
            }
        }
    }
        , [props.mode, props.colorTheme]);







    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} style={{ backgroundColor: bgColor, color: textColor }} onChange={handleOnChange} id="Mybox" placeholder={text} rows="10" ></textarea>


                </div>
                <button className={` btn btn-${themeColor}  me-4`}
                    onClick={handleUpClick}>Upper Case</button>
                <button className={` btn btn-${themeColor}  me-4`}
                    onClick={handleLowClick}>Lower Case</button>
                <button className={` btn btn-${themeColor}  me-4`}
                    onClick={handleCleClick}>Clear</button>
                <button className={` btn btn-${themeColor}  me-4`}
                    onClick={handleSenClick}>Sentence Case</button>




            </div>

            <div className={`container my-5 text-${props.mode === 'light' ? 'dark' : 'light'}  `}>
                <h2>Your text Summary</h2>


                <div className="container d-flex flex-row my-5">
                    <div className={`card text-bg-${themeColor} mx-3 flex-fill`} style={cardStyle} >
                        <div className="card-header text-center">Numner of  Words</div>
                        <div className="card-body">

                            <p className="card-text text-center" style={paraStyle}>{text.split(" ").length - 1}</p>
                        </div>
                    </div>
                    <div className={`card text-bg-${themeColor} mx-3 flex-fill`} style={cardStyle} >
                        <div className="card-header text-center">NUmber of Characters</div>
                        <div className="card-body">

                            <p className="card-text text-center" style={paraStyle}>{text.length}</p>
                        </div>

                    </div>
                    <div className={`card text-bg-${themeColor} mx-3 flex-fill`} style={cardStyle} >
                        <div className="card-header text-center">Minutes to Read</div>
                        <div className="card-body">

                            <p className="card-text text-center" style={paraStyle}>{(0.008 * (text.split(" ").length - 1)).toFixed(2)}</p>
                        </div>

                    </div>
                </div>
                <div className="card" style={{ backgroundColor: bgColor, color: textColor }}>
                    <div className="card-header ">
                        Preview
                    </div>
                    <div className="card-body" >

                        <p className="card-text"  >
                            {text}
                        </p>
                        <div className="text-start">
                            <button className={`btn  btn-${themeColor} me-4`} onClick={handleCopy}>Copy</button>
                        </div>


                    </div>
                </div>
            </div>



        </>

    )
}

TextForm.defaultProps = {
    colorTheme: 'Blue',
}
