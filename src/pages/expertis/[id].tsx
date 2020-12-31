import React from "react";
import Head from "next/head";
import { Navs } from "../../components/navs/navs";
import { Expertis } from "../../view/expertise";
import { Footer } from "../../view/footer/footer";

interface ExpertisProps {
	expertiseId: any;
}
export default function Index({ expertiseId }: ExpertisProps) {
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
				<Expertis expertiseId={expertiseId} />
				<Footer />
			</div>
		</main>
	);
}
export const getServerSideProps = async ({ params }) => {
	const id = params.id;
	return {
		props: { expertiseId: id }
	};
};
