import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        //Callbacks are asynchronous functions you can use to control what happens when an action is performed.
        async jwt({ token, account, user }) {
            if (account && account.provider === 'credentials' && user) {
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image
            }
            return token;
        },
    },
    providers : []
} satisfies NextAuthConfig;