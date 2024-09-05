/** @type {import('next').NextConfig} */
module.exports = {
    headers: async () => [
        {
            // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
            source: '/:path(.+\\.(?:ico|png|svg|jpg|jpeg|avif|gif|webp|json|js|css|mp3|mp4|ttf|ttc|otf|woff|woff2)$)',
            locale: false,
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cm.truyensite.site',
                port: '',
                pathname: '/**'
            },
        ],
        // minimumCacheTTL: 60,
    },
    // modularizeImports: {
    //     'react-icons/?(((\\w*)?/?)*)': {
    //         transform: 'react-icons/{{ matches.[1] }}/{{member}}'
    //     }
    // },
}
