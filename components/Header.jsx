import React from "react";

export default function Header() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	return (
		<div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
			<div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
				<div className="flex flex-row items-center justify-between p-4">
					<a
						href="/"
						className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
					>
						<h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
							<img
								src="/images/logo.svg"
								alt="Ahoura - Consultoria & Software"
								className="w-48"
							/>
						</h1>
					</a>
					<button
						className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
						type="button"
						aria-label="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#191919"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-menu"
						>
							<title>Ahoura - Consultoria</title>
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					</button>
				</div>
				<div
					className={`md:flex flex-grow items-center${navbarOpen ? " flex" : " hidden"}`}
				>
					<nav className="flex-col flex-grow ">
						<ul className="flex flex-grow justify-end flex-wrap items-center">
							<li>
								<a
									href="/"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Start
								</a>
							</li>
							<li>
								<a
									href="/#services"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="/#products"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Products
								</a>
							</li>
							<li>
								<a
									href="/#contacts"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Contacts
								</a>
							</li>
							<li>
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
									onClick={() => {
										window.open(
											"https://api.whatsapp.com/send?1=pt_AO&phone=244924611300",
											"_blank",
										);
									}}
								>
									<span className="justify-center">Talk to us</span>
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
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
