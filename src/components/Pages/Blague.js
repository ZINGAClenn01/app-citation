import '../../style.css'


function Blague (props){
    return (
        <div className="padding">
            <h4>Citation N* {props.index+1}</h4>
            
            <div className='pad-top'>
                Citation: {props.blague}
            </div>
            <div>
                Auteur: {props.reponse}
            </div>
            <br/>
        </div>
    )
}

export default Blague