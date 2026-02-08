import { withAuth, getSignInUrl, getSignUpUrl } from '@workos-inc/authkit-nextjs';

export default async function Home() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold tracking-tight">AI Starter</h1>

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-muted-foreground">
              Signed in as <span className="font-medium text-foreground">{user.email}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-muted-foreground">Get started by signing in.</p>
            <div className="flex gap-3">
              <a
                href={signInUrl}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sign In
              </a>
              <a
                href={signUpUrl}
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
