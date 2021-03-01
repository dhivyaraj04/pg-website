import React from "react";
import Head from "next/head";
import { Navs } from "../components/navs/navs";
import { ForumLayout } from "../view/forum-test";
import { Footer } from "../view/footer/footer";
import * as Logo from "../img/logo.png";

interface QueryNameProps {
	queryName: any;
}
export default function Index({ queryName }: QueryNameProps) {
	return (
		<main>
			<Head>
				<title>Protalk App</title>
				<link rel="icon" href={Logo} />
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

			<Navs />
			<ForumLayout queryName={queryName} />
			<Footer />
		</main>
	);
}
export const getServerSideProps = async () => {
	return {
		props: { forumQueries: "forumQueries" }
	};
};
