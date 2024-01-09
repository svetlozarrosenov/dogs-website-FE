import axios from "axios";
import useSWR, { mutate } from "swr";

export const URLs = {
    currentUser: `${process.env.NEXT_PUBLIC_API_URL}/user/current`,
    login: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    activePostersList: `${process.env.NEXT_PUBLIC_API_URL}/posters/list/active`,
    inactivePostersList: `${process.env.NEXT_PUBLIC_API_URL}/posters/list/inactive`,
    createPoster: `${process.env.NEXT_PUBLIC_API_URL}/posters/create`,
    editPoster: `${process.env.NEXT_PUBLIC_API_URL}/posters/edit`,
    deactivatePoster: (posterId: string) => `${process.env.NEXT_PUBLIC_API_URL}/posters/deactivate/${posterId}`,
    activatePoster: (posterId: string) => `${process.env.NEXT_PUBLIC_API_URL}/posters/activate/${posterId}`,
}

export const useActivePosters = () => {
    const { data: result, error, isLoading } = useSWR(URLs.activePostersList, async (url) => await axios.get(url, { withCredentials: true }),)

    return {
        data: result?.data,
        isLoading,
        isError: error
    }
}

export const useInactivePosters = () => {
    const { data: result, error, isLoading } = useSWR(URLs.inactivePostersList, async (url) => await axios.get(url, { withCredentials: true }),)

    return {
        data: result?.data,
        isLoading,
        isError: error
    }
}

export const mutateLogin = async (loginData, options = {}) => {
    return await mutate(
        URLs.currentUser,
        async (current) => {
            const response = await axios.post(URLs.login, loginData, {
                withCredentials: true,
            });

            return axios.isAxiosError(response) ?
            current : response
        },
        false
    );
};

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

export const mutatePosterCreate = async (createData, options = {}) => {
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