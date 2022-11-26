import Head from "next/head";
import { useRouter } from "next/router";

const CommonSEO = ({
    title,
    description,
    ogType,
    ogImage,
    twImage,
}: {
    title: string;
    description: string;
    ogType: string;
    ogImage: string | { url: string }[];
    twImage: string;
}) => {
    const router = useRouter();
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={`https://oneboteam.live/${router.asPath}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="1-BOT TEAM OFFICIAL SITE" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {typeof ogImage === "string" ? (
                <meta property="og:image" content={ogImage} key={ogImage} />
            ) : (
                ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://oneboteam.live/" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
        </Head>
    );
};
interface SEOProps {
    title: string;
    description: string;
}
export const PageSEO = ({ title, description }: SEOProps) => {
    const ogImageUrl = "https://oneboteam.live/banner.png";
    const twImageUrl = "https://oneboteam.live/banner.png";
    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    );
};