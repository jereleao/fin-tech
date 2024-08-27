import { NextAuthConfig } from 'next-auth';

import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export default {
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
