import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth selection:bg-primary-800">
            <Head>
                <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
            </Head>
            <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}