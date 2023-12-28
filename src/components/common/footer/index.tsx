import './Footer.css';
import Shell from '../shell';
import Copyright from '../copyright';
import Socials from '../socials';
import FooterNav from '../footerNav';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <Shell>
                    <div className='footer__head'>
                        <FooterNav/>

                        <FooterNav/>

                        <Socials/>
                    </div>
                </Shell>
            </div>

            <Copyright/>
        </div>
    )
}

export default Footer;