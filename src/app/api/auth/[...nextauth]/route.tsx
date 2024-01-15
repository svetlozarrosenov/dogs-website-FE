import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: '/login',
		// signOut: '/auth/signout',
		// error: '/auth/error', // Error code passed in query string as ?error=
		// verifyRequest: '/auth/verify-request', // (used for check email message)
		// newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	session: {
		strategy: 'jwt',
		maxAge: 1 * 60 * 60 // 4 hours
	},
    providers: [
        CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Credentials',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				const url = `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/auth/login`;
				const response = await axios.post(url, {
						email: credentials.email, 
						password: credentials.password
					}, {
					withCredentials: true,
				});

				const {user, nestjsAccessToken} = response.data;

				// If no error and we have user data, return it
				if (response.status == 201 && user) {
					return {user, nestjsAccessToken}
				}
				// Return null if user data could not be retrieved
				return null
			},
        })
    ],
	callbacks: {
		async jwt({user, token}) {
			if(user) return {...token, ...user};
			return token;
		},
		async session({token, session}) {
			session.user = {
				firstName: token.user.firstName,
				lastName: token.user.lastName,
				email: token.user.email,
			};
			session.nestjsAccessToken = token.nestjsAccessToken.jwt;

			return session;
		}
	},
	secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };