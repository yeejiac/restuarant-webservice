import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../api-lib/mongoLogin';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 *60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { email: user.email, name: user.name };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.expires = Math.floor(Date.now() / 1000) + 60 *60; // 設定 JWT 的過期時間
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      session.expires = new Date(token.expires * 1000).toISOString(); // 設定 session 過期時間
      return session;
    },
  },
};

export default NextAuth(authOptions);
