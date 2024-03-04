import { useInactivePosters } from '@/hooks';

import MyInactivePostersList from '@/components/myPosters/inactiveList';
import { fetchInactivePostersAction } from '@/app/actions';

function MyPosters() {
    const posters = fetchInactivePostersAction();


    return (
        <MyInactivePostersList posters={posters} />
    );
}

export default MyPosters;