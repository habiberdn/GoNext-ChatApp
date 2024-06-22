import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import axios from 'axios';

type User = {
  id: string;
  name: string;
  email: string;
  // Add other fields if necessary
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        console.log("test")
        const { email, password } = credentials as { email: string; password: string };
        try {
          const response = await axios.post('http://localhost:8080/login', {
            email: email,
            password: password
          });
          console.log(response);
          if (response.status === 200) {
            const user: User = {
              id: response.data.id, // Adjust according to your response structure
              name: response.data.name, // Adjust according to your response structure
              email: response.data.email, // Adjust according to your response structure
            };
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Login failed:', error);
          return null;
        }
      },
    }),
  ],
});
