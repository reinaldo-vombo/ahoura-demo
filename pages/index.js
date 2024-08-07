import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Ahoura - Consultoria & Software"
        description="We are AHOURA, a leading provider of cloud-based SaaS solutions designed to revolutionize the way SMEs in manufacturing and services operate."
        canonical="https://ahoura.ao/"
        openGraph={{
          url: "https:/ahoura.ao/",
          type: "website",
          title: "Ahoura - Consultoria & Software",
          description: "We are AHOURA, a leading provider of cloud-based SaaS solutions designed to revolutionize the way SMEs in manufacturing and services operate.",
          images: ["images/og-cover.png", "images/cover.png"],
        }}
      />
      <Head>
        <title>Ahoura - Consultoria & Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'flex items-center gap-2 p-3 rounded-lg',
          },
        }}
        position="top-center" 
        expand={false} 
        richColors />
    </div>
  );
}
