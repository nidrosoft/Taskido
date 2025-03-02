import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Tasklido | Organize Your Life, One Task at a Time",
    description: "Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive." />
                {/* Product Name */}
                <meta name="product-name" content="Tasklido" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Tasklido | Organize Your Life, One Task at a Time" />
                <meta
                    name="twitter:description"
                    content="Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive."
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />

                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Tasklido | Organize Your Life, One Task at a Time" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://tasklido.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive."
                />
                <meta
                    property="og:site_name"
                    content="Tasklido"
                />
                <meta property="fb:admins" content="132951670226590" />

                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Tasklido | Organize Your Life, One Task at a Time" />
                <meta
                    property="og:url"
                    content="https://tasklido.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive."
                />

                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Tasklido | Organize Your Life, One Task at a Time" />
                <meta
                    property="og:url"
                    content="https://tasklido.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Simplify your life with Tasklido - the elegant task management app that helps you stay organized, focused, and productive."
                />
            </head>
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
