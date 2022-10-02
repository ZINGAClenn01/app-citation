import '../../style.css'
import { useState } from 'react'


function AddBlague(props){

    const [blague, setBlague] = useState("")
    const [reponse, setReponse] = useState("")

    function handleChange(event){
        if(event.target.name=="blague"){
            setBlague(event.target.value)
        }
        else if(event.target.name=="reponse") {
            setReponse(event.target.value)
        }
    }

    function handleCreate(){
        props.updateState({blague:blague, reponse:reponse})
        setBlague("")
        setReponse("")
    }
   

    return (

        <div className='padding pad-top centre flex-direction add'>
            <div className='citinput pad-top row flex-direction'>
                <label>La Citation</label>
                <input value={blague} onChange={handleChange} name="blague">
                </input>
            </div>
            <div className='citinput pad-top row flex-direction'>
                <label>L'auteur</label>
                <input value={reponse} onChange={handleChange} name="reponse">
                </input>
            </div>
            
            <button className='pad-top btn' onClick={handleCreate}>
                créer
            </button>
           
        </div>
    )
}

export default AddBlague