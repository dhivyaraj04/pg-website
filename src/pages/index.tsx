import React from "react";
import Head from "next/head";

import { Layout } from "../view/layout";
import { Footer } from "../view/footer/footer";
import { FooterMobile } from "../view/footer/footer-mobile";
// import * as Logo from "../img/logo.png";

export default function Index() {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const width = 770;
	return (
		<main>
			<Head>
				<title>PG Website</title>
				<link rel="icon" href="" />
				<meta
					httpEquiv="Content-Type"
					content="text/html;charset=ut-8"
				/>
				<meta
					name="description"
					content="ProTalk experts are standing by to talk with you about healthy tips"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<Layout />

			{windowSize.width > width ? <Footer /> : <FooterMobile />}
		</main>
	);
}
