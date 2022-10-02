import Title from "../../Title"
import Blague from "../Pages/Blague" 
import '../../style.css'
import AddBlague from "../Pages/AddBlague"
import { useState } from 'react'
import Nav from "../Nav"


const init_blagues = [
    {
        blague : "L'ennemis de l'homme c'est l'homme",
        reponse : "KAYZEUR"
    },
    {
        blague : "Tout ce que je sais c'est que je ne sais rien",
        reponse : "Einsten"
    },
]

function HomePage(){

    const [blagues, setBlages] = useState(init_blagues)

    function updateState(blague){
        setBlages(oldblagues => [...oldblagues, blague])
    }

    return (
        <div>
            <Title/>
            <Nav/>
            
            <AddBlague updateState= {updateState}/>
        
           <div className="pad-top">
                {blagues.map((element, index)=>{
                    return(
                        <Blague index={index} blague={blagues[index].blague} reponse={blagues[index].reponse}/>
                    )
                })}
           </div>
            
            
        </div>
    )
}



export default HomePage