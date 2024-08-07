import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
	return (
		<div className="text-black">
			<NextSeo
				title="404: Ahoura"
				description="We are AHOURA, a leading provider of cloud-based SaaS solutions designed to revolutionize the way SMEs in manufacturing and services operate."
				canonical="https://ahoura.ao/404"
				openGraph={{
					url: "https://ahoura.ao/404",
				}}
			/>
			<Head>
				<title>Ahoura - Consultoria & Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
				<h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
					404 - Unavailable
				</h1>
				<br />
				<a
					className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
					href="/"
				>
					Return Home
				</a>
			</div>
			<div className="mt-64" />
			<Footer />
		</div>
	);
}
