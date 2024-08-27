'use server';

import { auth } from '@/lib/auth';
import client from '@/lib/mongodb';
import dbConnect from '@/lib/mongoose';
import { IUsers, Users } from '@/models/users';

export async function testDatabaseConnection() {
  let isConnected = false;
  try {
    const mongoClient = await client.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}

export async function getUser() {
  const session = await auth();

  await dbConnect();

  const user = await Users.findOne({
    email: session?.user?.email,
  }).exec();

  console.log(user?._id);

  return user?.name;
}
