import { useCurrentUser } from "@/hooks";
import { useRouter } from 'next/navigation';

export default function UserGuard () {
    const router = useRouter();
    const { data: currentUser } = useCurrentUser();

    if (!currentUser) {
        router.push('login'); 
    }
}