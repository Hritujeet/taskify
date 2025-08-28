import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Taskify",
    description:
        "Explore the future of productivity with taskify. Manage your tasks without hustles. Complete Board Management solution for everyone.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
