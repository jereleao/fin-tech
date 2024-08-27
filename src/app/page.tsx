import { testDatabaseConnection } from '@/actions/actions';

export default async function Page() {
  const isConnected = await testDatabaseConnection();

  return (
    <>
      <h1>Hello, Next.js!</h1>
      {isConnected ? (
        <h2 className="text-lg text-green-500">
          You are connected to MongoDB!
        </h2>
      ) : (
        <h2 className="text-lg text-red-500">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
    </>
  );
}
