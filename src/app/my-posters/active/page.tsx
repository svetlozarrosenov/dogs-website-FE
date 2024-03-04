import { fetchActivePostersAction } from '@/app/actions';
import MyActivePostersList from '@/components/myPosters/activeList';

async function MyActivePosters() {
    const posters = await fetchActivePostersAction();

    return (
        <MyActivePostersList posters={posters} />
    );
}

export default MyActivePosters;