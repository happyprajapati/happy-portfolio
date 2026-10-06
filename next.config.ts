import type { NextConfig } from "next";

// experimental.inlineCss was measured and rejected: Next 16 ships the inlined
// CSS twice (a <style> tag plus the RSC payload), adding ~24 KB gzipped to
// every visit to save one cacheable 8.5 KB request.
const nextConfig: NextConfig = {};

export default nextConfig;
