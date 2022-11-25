import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth selection:bg-primary-800">
            <Head />
            <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}