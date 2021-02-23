import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Chat } from "./chat/chat";
import { BreadCrumb } from "./banner/breadcrumb";
import { Choose } from "./consultant/choose";
import { Work } from "./consultant/work";
import { ScrollIcon } from "./consultant/scroll-icon";
import { ScrollIconMobile } from "./consultant/scroll-icon-mobile";
import { SpaceTag, Subtext } from "../components/small-component";
import { ConsultantBanner, ChooseItem, WorkItem } from "./data";
import { BaseUrl } from "../url";

export function Consultant() {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	const [expertise, setExpertise] = React.useState([]);
	React.useEffect(() => {
		getExpertis("expertises");
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
	async function getExpertis(expertises) {
		const res = await fetch(`${BaseUrl}/apiV2/${expertises}`, {
			method: "GET"
		});
		const data = await res.json();
		setExpertise(data.expertises);
	}
	return (
		<>
			<BreadCrumb BanerItems={ConsultantBanner} />
			<Choose ChoseItems={ChooseItem} />
			<br />
			{windowSize.width > width ? (
				<ScrollIcon WorkItems={expertise} />
			) : (
				<ScrollIconMobile WorkItems={expertise} />
			)}
			<Work WorkItems={WorkItem} />
			<Chat />
		</>
	);
}
