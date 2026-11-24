/** @type {import('next').NextConfig} */
const nextConfig = {
  // Las imágenes de /public ya se optimizan localmente (WebP, máx. 1600 px).
  // Así no dependemos de la cuota de Image Optimization de Vercel.
  images: { unoptimized: true },
};

export default nextConfig;
