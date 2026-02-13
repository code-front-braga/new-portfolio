import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	allowedDevOrigins: ['192.168.1.4'],
	images: {
		qualities: [75, 100],
	},
};

export default nextConfig;
