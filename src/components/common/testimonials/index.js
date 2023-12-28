import './Testimonials.css';
import Shell from '../shell';
import Avatar from '../avatar';

function Testimonials() {
    return (
        <div className='testimonials'>
            <Shell>
                <ul className='testimonials-list'>
                    <li className='testimonial'>
                        <div className='testimonial__head'>
                            <Avatar src='avatar.jpeg'/>
                        </div>

                        <div className='testimonial__foot'>
                            <p className='testimonial__content'>"I was hesitant to purchase a dog online, but this platform made it so easy and reassuring. I was able to browse through a variety of breeds and connect with a seller who was knowledgeable and helpful throughout the process. I'm so happy with my new furry friend!"</p>
                            
                            <h5 className='testimonial__author'>John Snow</h5>
                        </div>
                    </li>

                    <li className='testimonial'>
                        <div className='testimonial__head'>
                            <Avatar src='avatar.jpeg'/>
                        </div>

                        <div className='testimonial__foot'>
                            <p className='testimonial__content'>"As a breeder, I've struggled to reach a wider audience and find the right buyers for my dogs. This platform has been a game-changer for me. I've been able to connect with more buyers than ever before and the streamlined payment and delivery process has made my life so much easier. Highly recommend!"</p>
                            
                            <h5 className='testimonial__author'>John Snow</h5>
                        </div>
                    </li>

                    <li className='testimonial'>
                        <div className='testimonial__head'>
                            <Avatar src='avatar.jpeg'/>
                        </div>

                        <div className='testimonial__foot'>
                            <p className='testimonial__content'>"I was looking for a specific breed of dog and had been having trouble finding a reputable seller in my area. This platform connected me with several sellers who met my criteria, and I was able to easily compare prices and features to find the perfect match. The customer service was excellent too!"</p>
                            
                            <h5 className='testimonial__author'>John Snow</h5>
                        </div>
                    </li>

                    <li className='testimonial'>
                        <div className='testimonial__head'>
                            <Avatar src='avatar.jpeg'/>
                        </div>

                        <div className='testimonial__foot'>
                            <p className='testimonial__content'>"I was worried about the health and temperament of the dog I was purchasing, but this platform put my mind at ease. The sellers had been thoroughly screened and I was able to view health and pedigree information upfront. My new puppy is happy and healthy and I couldn't be happier with my experience using this platform."</p>
                            
                            <h5 className='testimonial__author'>John Snow</h5>
                        </div>
                    </li>
                </ul>
            </Shell>
        </div>
    )
}

export default Testimonials;