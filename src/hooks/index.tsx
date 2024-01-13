'use client';
import axios from "axios";
import { stat } from "fs";
import { useSession } from "next-auth/react";
import useSWR, { mutate } from "swr";

export const URLs = {
    login: `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/auth/login`,
    activePostersList: `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/list/active`,
    inactivePostersList: `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/list/inactive`,
    createPoster: `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/create`,
    editPoster: `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/edit`,
    deactivatePoster: (posterId: string) => `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/deactivate/${posterId}`,
    activatePoster: (posterId: string) => `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/activate/${posterId}`,
    removePoster: (posterId: string) => `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/remove/${posterId}`,
}

export const useActivePosters = () => {
    const { data: session, status } = useSession();
    
    const jwtToken = session?.nestjsAccessToken;


    const { data: result, error, isLoading } = useSWR(URLs.activePostersList, async (url) => await axios.get(url, { 
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    }),)

    return {
        data: result?.data,
        isLoading,
        isError: error
    }
}

export const useInactivePosters = () => {
    const { data: session, status } = useSession();

    const jwtToken = session?.nestjsAccessToken;

    const { data: result, error, isLoading } = useSWR(URLs.inactivePostersList, async (url) => await axios.get(url, { 
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    }),)

    return {
        data: result?.data,
        isLoading,
        isError: error
    }
}

export const mutatePosterActivate = async (posterId: string, options = {}) => {
    return await mutate(
        URLs.inactivePostersList,
        async (current) => {
            const response = await axios.post(URLs.activatePoster(posterId), {
                withCredentials: true,
            });

            return {
                data: axios.isAxiosError(response) ?
                current.data : [...current.data.filter(poster => poster._id !== response.data._id)]
            }
        },
        false
    );
};

export const mutatePosterRemove = async (posterId: string, options = {}) => {
    return await mutate(
        URLs.inactivePostersList,
        async (current) => {
            const response = await axios.post(URLs.removePoster(posterId), {
                withCredentials: true,
            });

            return {
                data: axios.isAxiosError(response) ?
                current.data : [...current.data.filter(poster => poster._id !== posterId)]
            }
        },
        false
    );
};

export const mutatePosterDeactivate = async (posterId: string, options = {}) => {
    return await mutate(
        URLs.activePostersList,
        async (current) => {
            const response = await axios.post(URLs.deactivatePoster(posterId), {
                withCredentials: true,
            });

            return {
                data: axios.isAxiosError(response) ?
                current.data : [...current.data.filter(poster => poster._id !== response.data._id)]
            }
        },
        false
    );
};

export const mutatePosterCreate = async (createData, jwtToken, options = {}) => {
    return await mutate(
        URLs.activePostersList,
        async (current) => {
            const formData = new FormData();
            formData.append('title', createData.title);
            formData.append('breed', createData.breed);
            formData.append('price', createData.price);
            formData.append('text', createData.text);
            formData.append('image', createData.image[0]);

            const response = await axios.post(URLs.createPoster, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${jwtToken}`,
                },
            });

            return {
                data: axios.isAxiosError(response) ?
                current.data : [response.data, ...current.data]
            }
        },
        false
    );
};