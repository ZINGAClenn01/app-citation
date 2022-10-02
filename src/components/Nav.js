import '../style.css'
import { Link } from 'react-router-dom'




function Nav (props) {
    return (
        <div>
            <nav>
                <ul className=''>
                    <li className='lien centre'><a href="">Home</a> </li>
                    <li className='lien centre'><a href=""><Link to="/citation_sauvegarder"
                    state={{index:props.index,blague:props.blague,reponse:props.reponse}}>citation sauvergerder</Link></a> </li>
                    
                    <div>
                        <input className='input-nav' name='searchBar' id='searchBar' placeholder='Rechercher' type="text" />
                    </div>
                    <li className='lien centre'><a href="">Contactez-nous</a> </li>
                    <li className='lien centre'><a href="">Paramètres</a> </li>
                </ul>
             </nav>
        </div>
    )
}

export default Nav