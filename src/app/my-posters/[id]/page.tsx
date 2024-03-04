import './poster.css';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Shell from "@/components/common/shell"
import { getServerSession } from "next-auth";
import Image from 'next/image';

const fetchPoster = async (posterId: string) => {
	const session = await getServerSession(authOptions);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/posters/user-poster/${posterId}`,
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

export default async function Poster({params}) {
	const {id} = params;
	const poster = await fetchPoster(id);
	console.log('crb_poster', poster)
	return (
		<div className="single-poster">
			<Shell>
				<div className="single-poster-container">
					<div className="single-poster__image"><Image
						src={`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/file/${poster.image}`}
						alt={`Poster Image - ${poster.title}`}
						width={300} // Set the desired width
						height={200} // Set the desired height
					/></div>

					<div className='single-poster-foot'>
						<div className="single-poster__title">{poster?.title}</div>

						<div className="signle-poster__breed">{poster?.breed}</div>

						<div className="single-poster__content">{poster?.text}</div>
					</div>
				</div>
			</Shell>
		</div>
	);
}

  
  
  