import Filter from "@/components/common/filter";
import Suggested from "@/components/common/suggested";
import Intro from "@/components/common/intro";
import Benefits from "@/components/common/benefits";
import Testimonials from "@/components/common/testimonials";

function Home() {
    return (
        <div className="about">
            <Intro/>
            
            <Benefits/>
            
            <Suggested title={'Suggested Breaders'}/>

            <Testimonials/>
        </div>
    )
}
export default Home;