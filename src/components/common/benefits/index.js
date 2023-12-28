import './Benefits.css';
import Shell from '../shell';

function Benefits() {
    return (
        <div className='benefits'>
            <Shell>
                <div className='benefits-boxes'>
                    <div className='benefits-box'>
                        <h2 className='benefits-box__title'>Benefits for clients</h2>

                        <ul className='benefits-list'>
                            <li>Access to a wide range of high-quality dogs from reputable breeders and sellers.</li>
                            <li>Ability to compare prices and features of different dogs to find the perfect fit for their needs.</li>
                            <li>
    Convenient online platform that allows them to easily browse and purchase dogs from the comfort of their own home.</li>
                            <li>Assurance that all dogs listed on the platform have been screened for health and temperament issues, reducing the risk of future problems.</li>
                            <li>Support from customer service representatives who can answer questions and provide guidance throughout the buying process.</li>
                        </ul>
                    </div>

                    <div className='benefits-box benefix-box--blue'>
                        <h2 className='benefits-box__title'>Benefits for breaders</h2>
                        
                        <ul className='benefits-list'>
                            <li>Increased exposure for their dogs to a wider audience, potentially leading to more sales and higher profits.</li>
                            <li>
    Reduced marketing costs since they don't have to advertise their dogs individually.</li>
                            <li>Ability to connect with a larger pool of potential buyers, increasing the chances of finding the right match for their dogs.</li>
                            <li>Streamlined payment and delivery process through the platform, saving time and resources.</li>
                            <li>Access to data and analytics that can help them optimize their pricing and marketing strategies.</li>
                        </ul>
                    </div>
                </div>
            </Shell>
        </div>
    );
}

export default Benefits;