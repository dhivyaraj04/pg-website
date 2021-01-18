import React from "react";
import Head from "next/head";
import { Navs } from "../components/navs/navs";
import { ForumQuery } from "../view/forum-query";
import { Footer } from "../view/footer/footer";

interface QueryIdProps {
	queryId: any;
}
export default function Index({ queryId }: QueryIdProps) {
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
				<ForumQuery queryId={queryId} />
				<Footer />
			</div>
		</main>
	);
}
export const getServerSideProps = async ({ params }) => {
	const id = params.id;
	return {
		props: { queryId: id }
	};
};
