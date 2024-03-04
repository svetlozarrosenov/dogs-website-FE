'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

 
export const fetchActivePostersAction = async () => {
	const session = await getServerSession(authOptions);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/list/active`,
		{ 
			method: 'GET',
			headers: {
            	Authorization: `Bearer ${session.nestjsAccessToken}`,
        	},
			cache: 'no-store',
		}
	);

	return response.json();
}

export const fetchInactivePostersAction = async () => {
	const session = await getServerSession(authOptions);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/list/inactive`,
		{ 
			method: 'GET',
			headers: {
            	Authorization: `Bearer ${session.nestjsAccessToken}`,
        	},
			cache: 'no-store',
		}
	);

	return response.json();
}