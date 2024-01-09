'use client';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export default function useLoginGuard() {
    const router = useRouter();
    const {status} = useSession();

    if (status == 'loading') return;

    if (status !== 'authenticated') {
        router.push('/login'); 
    }
}