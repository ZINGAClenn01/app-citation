import { useLocation } from "react-router-dom"
import { useState } from "react"
import './style.css'


function BlaguePage(props){
    const [likes, setLikes] = useState(0)
    const location = useLocation()
    // function(handleLike) =>{
    //     (e.target.value)
    // }
    return (
        <div className='pad-top padding'>
            <h2>Bienvenue sur la pages des citation sauvergarder</h2>
            <div><h4>Citation N* {props.index+1}</h4></div>
            <div className=''>
                Citation: {location.state.blague}
            </div>
            <div className=''>
                Auteur: {location.state.reponse}
            </div>
            <br/>
           <div>
           <div>
                <button onClick={() =>(setLikes(likes+1))}>
                    jaime
                </button>
            </div>
                <button onClick={() =>(setLikes(likes-1))}>
                    jaime pas
                </button>
           </div>
           <div>
                popularité: {likes}
           </div>
        </div>
        
    )
}

export default BlaguePage