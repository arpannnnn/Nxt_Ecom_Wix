/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
        {
            protocol: 'https',
            hostname: 'arpanacharya.com.np',
        
           
        },
        {
            protocol: 'https',
            hostname: 'scontent.fktm7-1.fna.fbcdn.net',
        
            
        }
        ],
    },
        
        
        
};

export default nextConfig;
