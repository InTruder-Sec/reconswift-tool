import { UserButton } from "@clerk/nextjs";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* ... The existing page markup ... */}
    </main>
  );
}
