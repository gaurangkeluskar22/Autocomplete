import './InputBox.css'
import { useEffect, useState } from 'react'
import AutoCorrectCompoent from '../AutoCorrectCompoent/AutoCorrectCompoent'

const InputBox = ({data}) => {
    const [inputText, setInputText] = useState('')
    const [searchData, setSearchData] = useState([])
    const [hide,setHide] = useState(false)

    useEffect(()=>{
        setHide(false)
        if(inputText?.length){
            const filterData = data.filter((d)=> d.toLowerCase().includes(inputText.toLowerCase()))
            setSearchData(filterData)
        }
    },[inputText])

    const handleInputChange = (e) =>{
        const value = e?.target?.value
        setInputText(value)
    }

    const handleCancelClick = () => {
        setInputText('')
    }

    const handleSelectInput = (item) => {
        setInputText(item)
        setHide(true)
    }

    return(
        <div className='inputbox-container'>
            <div className='input-wrapper'>
                <input type="text" value={inputText} onChange={handleInputChange} placeholder="Search..." className='input-textbox'></input>
                <button className='input-cancel' onClick={handleCancelClick}>X</button>
            </div>
            {!hide && <AutoCorrectCompoent searchData={searchData} onClick={handleSelectInput}/>}
        </div>
    )
}

export default InputBox;