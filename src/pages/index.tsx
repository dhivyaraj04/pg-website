import React from "react";
import Head from "next/head";

import { Layout } from "../view/layout";
import { Footer } from "../view/footer/footer";
// import * as Logo from "../img/logo.png";

interface contentProps {
	articles: any;
	expertises: any;
}

export default function Index({ articles, expertises }: contentProps) {
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

			<Layout articles={articles} expertises={expertises} />
			<Footer />
		</main>
	);
}

export const getServerSideProps = async () => {
	return {
		props: { articles: "articles", expertises: "expertises" }
	};
};
