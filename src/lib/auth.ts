import NextAuth, { NextAuthConfig } from 'next-auth';
import 'next-auth/jwt';

import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const config = {
  providers: [GitHub, Google],
  basePath: '/auth',
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === '/middleware-example') return !!auth;
      return true;
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== 'production' ? true : false,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
