import React from "react";
import Head from "next/head";
import { Navs } from "../components/navs/navs";
import { ArticlesLayout } from "../view/articles-layout";
import { Footer } from "../view/footer/footer";

export default function Index() {
	return (
		<main>
			<Head>
				<title>Protalk App</title>
				<link rel="icon" href="/favicon.ico" />
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
			<div>
				<Navs />
				<ArticlesLayout />
				<Footer />
			</div>
		</main>
	);
}
