import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    // Client-side accessible environment variables can be added here
  },
  // These server-side environment variables will be available at build time
  // When using OpenNext with Cloudflare, the actual values will come from
  // the Cloudflare environment bindings in wrangler.jsonc
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
