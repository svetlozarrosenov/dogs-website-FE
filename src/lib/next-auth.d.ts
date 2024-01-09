import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            image: string;
        }
    };
}