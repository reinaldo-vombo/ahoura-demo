import Link from "next/link";
import Form from "./Form";

export default function Main() {

	return (
		<section className="text-gray-600 body-font">
			<div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
					<h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
						Empowering Businesses Through Innovative Software Solutions
					</h1>
					<p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
						We are a software consulting firm that helps businesses leverage
						technology to achieve their goals.
					</p>
					<div className="flex justify-center">
						<Link href="https://api.whatsapp.com/send?1=pt_AO&phone=244924611300"
							target="_blank"
							type="button"
							className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg bg-gray-900"

						>
							<span className="justify-center">Get a Free Consultation</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-5 fill-current text-white flex ml-2 -mr-1"
							>
								<title>Ahoura - Consultoria</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
					<img
						src="/images/iPhone-12-Mockup.png"
						className="w-80 h-auto md:ml-1 ml-24"
						width={320}
						height={320}
						alt="iPhone-12"
					/>
				</div>
			</div>
			<section className="mx-auto">
				<div className="container px-5 mx-auto lg:px-24 ">
					<div className="flex flex-col w-full mb-4 text-left lg:text-center">
						<h1 className="mb-8 text-2xl Avenir font-semibold text-black">
							Some of the Technologies we use
						</h1>
					</div>
					<div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
						<div className="flex items-center justify-center">
							<img
								src="/images/mongodb-logo.png"
								alt="Mongodb Logo"
								width={1920}
								height={64}
								className="block object-contain h-16 greyC"
							/>
						</div>
						<div className="flex items-center justify-center">
							<img
								src="/images/docker-logo.png"
								alt="Docker Logo"
								width={1920}
								height={64}
								className="block object-contain h-16 greyC"
							/>
						</div>
						<div className="flex items-center justify-center">
							<img
								src="/images/git-github-logo.png"
								alt="Git and Github Logo"
								width={1920}
								height={64}
								className="block object-contain h-16 greyC"
							/>
						</div>
						<div className="flex items-center justify-center">
							<img
								src="/images/cloudflare-logo.png"
								alt="Cloudflare Logo"
								width={1920}
								height={64}
								className="block object-contain h-16 greyC"
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="relative pt-32 md:pt-44" id="services">
				<div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
					<div className="mx-auto md:w-3/5">
						<h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
							Our Services
						</h2>
						<p className="mt-4 text-justify text-gray-600">
							At AHOURA, we are passionate about helping businesses thrive in
							today's digital age. Our team of experienced software consultants
							has a proven track record of delivering innovative solutions that
							solve complex challenges and drive growth. We believe in building
							strong partnerships with our clients, taking the time to
							understand their unique needs and developing customized strategies
							for success.
						</p>
					</div>
					<div className="mt-16 md:mt-20">
						<div className="relative grid rounded-3xl border border-gray-200 p-1 lg:grid-cols-2">
							<div className="absolute inset-0 hidden h-max lg:my-auto">
								<div
									aria-hidden="true"
									className="grid grid-cols-2 -space-x-52 opacity-50 2xl:mx-auto 2xl:max-w-6xl"
								>
									<div className="h-60 bg-gradient-to-br from-primary to-black blur-3xl" />
									<div className="h-72 rounded-full bg-gradient-to-r from-black to-white blur-3xl" />
								</div>
							</div>
							<div>
								<div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="h-20 text-gray-700"
									>
										<title>Ahoura - Consultoria</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
										/>
									</svg>
									<div className="mx-auto text-center sm:w-2/5">
										<h2 className="text-xl font-semibold text-gray-900">
											An increasingly digital world
										</h2>
										<p className="text-justify mt-3 text-gray-600">
											Let's discuss how we can help your business achieve its
											goals. Schedule a free consultation today!
										</p>
									</div>
								</div>
							</div>
							<div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 sm:grid-cols-2">
								<div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
									<div className="flex h-10 w-10 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
											/>
										</svg>
									</div>
									<div>
										<h2 className="text-xl font-semibold text-gray-900">
											Needs Assessment
										</h2>
										<p className="text-justify mt-3 text-gray-600">
											We begin by thoroughly understanding your business goals
											and challenges through in-depth discussions and workshops.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
									<div className="flex h-10 w-10 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
											/>
										</svg>
									</div>
									<div>
										<h2 className="text-xl font-semibold text-gray-900">
											Software Strategy Development
										</h2>
										<p className="text-justify mt-3 text-gray-600">
											We work collaboratively with you to develop a
											comprehensive software strategy that aligns with your
											vision and roadmap.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
									<div className="flex h-10 w-10 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
											/>
										</svg>
									</div>
									<div>
										<h2 className="text-xl font-semibold text-gray-900">
											Solution Design & Development
										</h2>
										<p className="text-justify mt-3 text-gray-600">
											Our team of experts will design, develop, and implement a
											custom software solution that meets your specific
											requirements and integrates seamlessly with your existing
											systems.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
									<div className="flex h-10 w-10 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
											/>
										</svg>
									</div>
									<div>
										<h2 className="text-xl font-semibold text-gray-900">
											Ongoing Support & Maintenance
										</h2>
										<p className="text-justify mt-3 text-gray-600">
											We provide ongoing support and maintenance to ensure your
											software continues to deliver value, remains secure, and
											adapts to your evolving needs.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-32 md:pt-44" id="products">
				<div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
					<div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
						<div className="relative ml-auto h-full md:w-1/2">
							<img
								src="/images/milestone.webp"
								alt="app milestone"
								width={1174}
								height={1134}
							/>
						</div>

						<div className="md:w-1/2 lg:w-[47%]">
							<h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
								Why choose us
							</h2>
							<p className="my-12 text-gray-600">
								We have a proven track record of delivering successful software
								solutions for businesses of all sizes and across various
								industries.
							</p>
							<div className="space-y-4 divide-y divide-gray-100">
								<div className="mt-8 flex gap-4 md:items-center">
									<div className="flex h-12 w-12 gap-4 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
											/>
										</svg>
									</div>
									<div className="w-5/6">
										<h3 className="text-lg font-semibold text-gray-700">
											Deep Industry Expertise
										</h3>
										<p className="text-gray-500">
											Our consultants have extensive experience working with
											businesses in a variety of industries. We understand the
											unique challenges and opportunities each industry faces.
										</p>
									</div>
								</div>
								<div className="mt-8 flex gap-4 md:items-center">
									<div className="flex h-12 w-12 gap-4 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
											/>
										</svg>
									</div>
									<div className="w-5/6">
										<h3 className="text-lg font-semibold text-gray-700">
											Quality & Satisfaction
										</h3>
										<p className="text-gray-500">
											We are committed to delivering high-quality work and
											exceeding our clients' expectations.
										</p>
									</div>
								</div>
								<div className="flex gap-4 pt-4 md:items-center">
									<div className="flex h-12 w-12 gap-4 rounded border border-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="m-auto h-6 w-6 text-gray-700"
										>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<title>Ahoura - Consultoria</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											/>
										</svg>
									</div>
									<div className="w-5/6">
										<h3 className="text-lg font-semibold text-gray-700">
											Agile Approach
										</h3>
										<p className="text-gray-500">
											We take an agile and flexible approach to project
											management, adapting to your specific needs and ensuring
											efficient delivery.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-20 md:my-32">
						<h3 className="text-2xl font-bold text-gray-900 md:w-2/3 md:text-3xl lg:text-4xl">
							Customize your customer experience, Go beyond with our top
							products
						</h3>
						<div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px">
								<div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8">
									<img
										className="w-32"
										src="/images/vine.svg"
										alt="safety icon illustration"
										height={512}
										width={512}
									/>
									<div>
										<h4 className="text-xl font-semibold text-gray-900">
											Vine <small>- Job plataform for programmers</small>
										</h4>
										<p className="mt-3 text-gray-600">
											Perfect ground to germinate, become professional and
											obtain the best opportunities in the job market.
										</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px">
								<div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8">
									<img
										className="w-32"
										src="/images/splash.svg"
										alt="payment card icon illustration"
										height={512}
										width={512}
									/>
									<div>
										<h4 className="text-xl font-semibold text-gray-900">
											Splash <small>- Enterprise Resource Planning</small>
										</h4>
										<p className="mt-3 text-gray-600">
											Splash is everything you need to manage your business in
											one place.
										</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px">
								<div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-8"
									>
										{" "}
										<title>Ahoura - Consultoria</title>{" "}
										<title>Ahoura - Consultoria</title>
										<path
											fillRule="evenodd"
											d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
											clipRule="evenodd"
										/>
									</svg>
									<div>
										<h4 className="text-xl font-semibold text-gray-900">
											heGreen<sup>*</sup>
										</h4>
										<p className="mt-3 text-gray-600">
											Green project to help communities keep the environment
											healthy.... coming soon.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12">
						<div className="relative md:w-1/2">
							<div
								aria-hidden="true"
								className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40"
							>
								<div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px]" />
								<div className="h-full bg-gradient-to-r from-black to-primary blur-[106px]" />
							</div>
							<img
								className="relative"
								src="/images/abstract.png"
								alt="stats illustration"
								width={1746}
								height={1746}
							/>
						</div>
						<div className="ml-auto h-full md:w-1/2">
							<h3 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
								Go beyond with our top products
							</h3>
							<p className="my-12 text-gray-600">
								A team of consultants working together, or software code
								transforming into a business solution.
								<br />
								<br />
								Let's discuss how we can help your business achieve its goals.
								Schedule a free consultation today!
							</p>
							<button
								type="button"
								className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg bg-gray-900"
								onClick={() => {
									window.open(
										"https://api.whatsapp.com/send?1=pt_AO&phone=244924611300",
										"_blank",
									);
								}}
							>
								<span className="justify-center">Get started</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="w-5 fill-current text-white flex ml-2 -mr-1"
								>
									<title>Ahoura - Consultoria</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative pt-32 md:pt-44" id="contacts">
				<div
					aria-hidden="true"
					className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40"
				>
					<div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px]" />
					<div className="h-32 bg-gradient-to-r from-black to-white blur-[106px]" />
				</div>
				<div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
					<div className="m-auto text-center lg:w-8/12 xl:w-7/12">
						<h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
							Let's Talk About Your Software Needs
						</h2>
					</div>
					<div className="mt-12 md:mt-20">
						<div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500">
							<div className="flex flex-col gap-12 divide-y p-12 md:flex-row md:divide-y-0 md:divide-x">
								<div className="text-center md:w-5/12">
									<h3 className="text-3xl font-bold text-gray-900">
										+244 924 611 300
									</h3>
									<p className="text-lg text-gray-600 mb-12">info@ahoura.ao</p>
									{/* <span className="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900">
                    <span className="text-4xl text-primary">+</span>244 924 611 300
                  </span> */}
									<div className="flex justify-center">
										<Link
											href="https://api.whatsapp.com/send?1=pt_AO&phone=244924611300"
											target="_blank"
											type="button"
											className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg bg-gray-900"

										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												className="w-5 fill-current text-white flex ml-2 -mr-1"
											>
												<title>Ahoura - Consultoria</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
												/>
											</svg>
											<span className="justify-center ml-2">WhatsApp</span>
										</Link>
									</div>

									<p className="mt-12 text-sm text-gray-500">
										Morro Bento, R. Angohotel, Condomínio Interland, Luanda -
										Angola
									</p>
								</div>
								<div className="relative md:w-7/12 md:pl-12">
									<Form />
									<div className="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale">
										<img
											className="h-8 w-auto lg:h-12"
											src="images/nodejs-logo.png"
											width="100"
											alt="nodejs"
										/>
										<img
											className="h-6 w-auto lg:h-8"
											src="images/redis-logo.png"
											width="100"
											alt="redis"
										/>
										<img
											className="h-3 w-auto lg:h-5"
											src="images/haskell-logo.png"
											width="100"
											height="100"
											alt="haskell"
										/>
										<img
											className="w-auto h-5 lg:h-7"
											src="images/gatsby-logo.png"
											width="100"
											alt="gatsby"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
