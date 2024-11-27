import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: "/:locale/case-studies/edu",
                destination: "/:locale/case-studies/cez-dukovany",
                permanent: true,
                locale: false
            },
            {
                source: "/:locale/case-studies/pb",
                destination: "/:locale/case-studies/productboard-prague",
                permanent: true,
                locale: false
            },
            {
                source: "/case-studies/pb",
                destination: "/case-studies/productboard-prague",
                permanent: true
            },
            {
                source: "/case-studies/edu",
                destination: "/case-studies/cez-dukovany",
                permanent: true
            }
        ]
    }
}

export default withNextIntl(nextConfig)
