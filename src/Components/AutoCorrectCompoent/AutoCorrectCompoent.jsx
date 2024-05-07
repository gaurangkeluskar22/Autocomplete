import './AutoCorrectComponent.css'

const AutoCorrectCompoent = ({searchData, onClick}) => {


    return(
        <div className="autocorrect-container">
            {
                searchData?.map((item,index)=>{
                    return(
                        <div key={index} className='autocorrect-element' onClick={()=>onClick(item)}>{item}</div>
                    )
                })
            }
        </div>
    )
}

export default AutoCorrectCompoent;