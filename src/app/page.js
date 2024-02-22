export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-col justify-center items-center bg-stone-950">
        <h1 className="text-lime-50 text-5xl">Homepage</h1>
        <div className="flex gap-4">
          <a
            href="auth/signin"
            className="flex items-center px-4 py-2 border border-lime-50 rounded-md shadow-sm mt-8 text-lime-50 bg-stone-900 hover:bg-stone-800"
          >
            Sign in
          </a>
          <a
            href="auth/signin#auth-sign-up"
            className="flex items-center px-4 py-2 border border-lime-50 rounded-md shadow-sm mt-8 text-lime-50 bg-stone-900 hover:bg-stone-800"
          >
            Sign up
          </a>
        </div>
      </main>
    </>
  );
}
