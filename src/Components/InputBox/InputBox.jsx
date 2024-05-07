import './InputBox.css'

const InputBox = ({inputText, setInputText}) => {

    const handleInputChange = (e) =>{
        const value = e?.target?.value
        setInputText(value)
    }

    const handleCancelClick = () => {
        setInputText('')
    }

    return(
        <div className='input-wrapper'>
            <input type="text" value={inputText} onChange={handleInputChange} placeholder="Search..." className='input-textbox'></input>
            <button className='input-cancel' onClick={handleCancelClick}>X</button>
        </div>
    )
}

export default InputBox;