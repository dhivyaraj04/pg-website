import React from "react";
import { ExpertArticles } from "../view/expert-articles/expert-articles";

export default {
	title: "ExpertArticles",
	component: ExpertArticles
};

export const getServerSideProps = async () => {
	const res = await fetch(
		"http://13.127.122.195:8080/apiV2/articles",

		{
			method: "GET"
		}
	);

	const data = await res.json();
	console.log(data);
	return {
		props: { contents: data }
	};
};
