import './socials.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee)

function Socials() {
    return (
        <div className='socials'>
            <h3 className='socials__title'>Connect with us:</h3>

            <ul className='socials-icons'>
                <li><a><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
                
                <li><a><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a></li>
                
                <li><a><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
            </ul>
        </div>
    )
}

export default Socials;