import './Suggested.css';
import Shell from '../shell';
import Button from '../Button';

function Suggested(props: {title: string}) {
    return (
        <div className='suggested'>
            <div className='suggested__container'>
                <Shell>
                    <h2 className='suggested__title'>{props.title}</h2>
                    
                    <ul className='suggested-boxes'>
                        <li className='suggested-boxes-item'>
                            <a className='suggested-boxes-item__link' href="#"></a>
                            
                            <h4 className='suggested-boxes-item__title'>doberman breeder</h4>
                            
                            <img src="doberman.jpg" alt="" />
                        </li>

                        <li className='suggested-boxes-item'>
                            <a className='suggested-boxes-item__link' href="#"></a>
                            
                            <h4 className='suggested-boxes-item__title'>jack russell breeder</h4>
                            
                            <img src="jack-russell.jpg" alt="" />
                        </li>

                        <li className='suggested-boxes-item'>
                            <a className='suggested-boxes-item__link' href="#"></a>
                            
                            <h4 className='suggested-boxes-item__title'>german shepherd breeder</h4>
                            
                            <img src="sable-german-shepherd.jpg" alt="" />
                        </li>
                    </ul>
                </Shell>
            </div>

            <div className='suggested__actions'>
                <Shell>
                    <Button background='blue'>See All</Button>
                </Shell>
            </div>
        </div>
    )
}

export default Suggested;