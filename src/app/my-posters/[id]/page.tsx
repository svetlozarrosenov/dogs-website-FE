import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Shell from "@/components/common/shell"
import { getServerSession } from "next-auth";

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
	return <div className="single-poster">
		<Shell>
			<div className="single-poster-container">
				<div className="single-poster__image"></div>

				<div className="single-poster__title">{poster?.title}</div>

				<div className="signle-poster__breed">{poster?.breed}</div>

				<div className="single-poster__content">{poster?.text}</div>
			</div>
		</Shell>
	</div>
}
// export async function serverSideProps({ params }) {
// 	const session = getServerSession(authOptions);
// 	console.log('crb_session', session)
// 	// Fetch data for the single poster based on the params
// 	const posterId = params.id;
	
// 	// Use your own logic to fetch data from your API or database
// 	const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/user-posters/${posterId}`, {
// 		// headers: {
//         //     Authorization: `Bearer ${jwtToken}`,
//         // },
// 	});
	
// 	if (!response.ok) {
// 	  return {
// 		notFound: true,
// 	  };
// 	}
  
// 	const poster = await response.json();
  
// 	return {
// 	  props: {
// 		params,
// 		poster,
// 	  },
// 	};
//   }
  
  
  