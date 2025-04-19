// API Route that demonstrates using Cloudflare env variables

// This is a server-only API route that returns environment variables
export async function GET() {
  // Get Cloudflare context which includes env, cf, and ctx objects
  // Access the environment variable from Cloudflare
  const apiKey = process.env?.SERVER_API_KEY || "Not defined";

  // Return the environment variable as JSON
  return Response.json({
    serverApiKey: apiKey,
    message: "Environment variable accessed from Cloudflare context",
    timestamp: new Date().toISOString(),
  });
}
