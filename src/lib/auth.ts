import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';

import { MongoDBAdapter } from '@auth/mongodb-adapter';
import mongoClient from '@/lib/mongodb';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(mongoClient, {
    databaseName: 'fin-tech',
    collections: { Accounts: 'user-accounts' },
  }),
  session: { strategy: 'jwt' },
  ...authConfig,
});
