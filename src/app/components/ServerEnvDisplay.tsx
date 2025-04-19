// This is a server component that displays environment variables
// The 'use server' directive ensures this runs only on the server
"use server";

export default async function ServerEnvDisplay() {
  // Get Cloudflare context which includes env variables

  // Access the server-side environment variable from Cloudflare
  const apiKey = process.env?.SERVER_API_KEY || "Not defined";

  return (
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="font-medium mb-2">Server Environment Variable:</h3>
      <p className="font-mono bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded">
        SERVER_API_KEY: {apiKey}
      </p>
      <p className="text-xs mt-2 text-gray-500">
        This value is only accessible on the server
      </p>
    </div>
  );
}
