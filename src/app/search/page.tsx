import Filter from "@/components/common/filter";
import Suggested from "@/components/common/suggested";

function Search() {
    return (
        <div className="home">
            <Filter />
            
            <Suggested title={'results:'} />
        </div>
    )
}
export default Search;