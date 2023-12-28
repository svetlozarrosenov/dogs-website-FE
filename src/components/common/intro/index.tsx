import './Intro.css';
import Shell from '../shell';
import Button from '../Button';

function Intro () {
    return (
        <div className='intro'>
            <Shell>
                <div className='intro__head'>
                    <h1 className='intro__title'>Find Your Perfect Canine Companion with Our Trusted Dog Selling Platform.</h1>
                    
                    <p className='intro__text'>Welcome to our dog selling website! We are dedicated to helping you find your perfect furry companion. We understand that bringing a new dog into your life is a big decision, which is why we are committed to providing you with the best possible experience. With our unique payment system, you can rest assured that you will only pay for your new dog once you have received it from the breeder. This ensures that you can trust the process and feel confident in your purchase. Let us help you find your new best friend today!</p>
                    
                    <Button>Learn More</Button>
                </div>
                <div className='intro__image'>
                    <img src='intro-jack-russell.jpg' alt="" />
                </div>
            </Shell>
        </div>
    );
}

export default Intro;
