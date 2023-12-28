import axios from "axios";
import useSWR, { mutate } from "swr";

const URLs = {
    currentUser: `${process.env.NEXT_PUBLIC_API_URL}/user/current`,
    login: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    postersList: `${process.env.NEXT_PUBLIC_API_URL}/posters/list`,
    createPoster: `${process.env.NEXT_PUBLIC_API_URL}/posters/create`,
    editPoster: `${process.env.NEXT_PUBLIC_API_URL}/posters/edit`,
}

export const usePosters = () => {
    const { data: result, error, isLoading } = useSWR(URLs.postersList, async (url) => await axios.get(url),)

    return {
        data: result?.data,
        isLoading,
        isError: error
    }
}

export const useCurrentUser = () => {
    const { 
        data: result, 
        error, 
        isLoading, 
        isValidating, 
        mutate 
    } = useSWR(URLs.currentUser, 
        async (url) => await axios.post(url, {}, {
            withCredentials: true,
        }),
        );

    return {
        data: result?.data,
        mutate
    };
};

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

export const mutatePosterCreate = async (createData, options = {}) => {
    return await mutate(
        URLs.postersList,
        async (current) => {
            const response = await axios.post(URLs.createPoster, createData, {
                withCredentials: true,
              });
            console.log('crb_response', response)
            console.log('crb_current', current)
            return {
                data: axios.isAxiosError(response) ?
                current.data : response.data.concat(current.data)
            }
        },
        false
    );
};