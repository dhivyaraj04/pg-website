import React from "react";
import marked from "marked";
import {
	SpaceTag,
	FlexTag,
	ImageTag,
	Subtext,
	ImageView
} from "../../components/small-component";
import { Dat, Year, Month } from "../../components/date-time";

export type ArticlesDetailItem = {
	profileImg?: string;
	name?: string;
	expertis?: string;
	date?: string;
	description?: string;
	content?: Array<{
		week?: string;
		video?: string;
		title?: string;
		desc?: string;
	}>;
};
export type consultantItem = {
	expertise?: string;
	image?: string;
	name?: string;
};
export type ArticlesDetailsItemProps = {
	ArticlesDetailsItems?: ArticlesDetailItem[];
	consultantItem?: consultantItem;
	date?: string;
	title?: string;
	subTitle?: string;
};
export function ArticleDetailMobile({
	ArticlesDetailsItems,
	consultantItem,
	date,
	title,
	subTitle
}: ArticlesDetailsItemProps) {
	const renderer = new marked.Renderer();
	const Previewer = props => {
		return (
			<div
				id="previewer"
				dangerouslySetInnerHTML={{
					__html: marked(props.markdown, { renderer: renderer })
				}}
			/>
		);
	};
	function getDate(timestamp) {
		const DateMonthYear =
			Dat(timestamp) + " " + Month(timestamp) + " " + Year(timestamp);
		return DateMonthYear;
	}
	return (
		<>
			<>
				<SpaceTag marginTop="20" marginBottom="20">
					<FlexTag>
						<ImageTag
							src={consultantItem.image}
							width="32"
							height="32"
						/>
						<SpaceTag marginLeft="5" marginTop="0">
							<Subtext fontSize="14px" color="#010101">
								{consultantItem.name}
							</Subtext>
							<Subtext fontSize="12px" color="#979797">
								{consultantItem.expertise}
							</Subtext>
						</SpaceTag>
					</FlexTag>
				</SpaceTag>
				<SpaceTag marginTop="20" marginBottom="20">
					<Subtext
						fontSize="16px"
						color="#6F6F6F"
						fontWeight="400"
						letterSpacing="0.24px"
						lineHeight="44px"
					>
						{getDate(date)}
					</Subtext>
				</SpaceTag>
				<SpaceTag marginTop="20" marginBottom="20">
					<Subtext
						fontSize="18px"
						color="#6F6F6F"
						fontWeight="400"
						letterSpacing="0.24px"
						lineHeight="44px"
					>
						{/* {title} */}
					</Subtext>
				</SpaceTag>
				<Previewer markdown={title} />
				<>
					<SpaceTag marginTop="20" marginBottom="20">
						<Subtext
							fontSize="26px"
							color="#000"
							fontWeight="400"
						></Subtext>
					</SpaceTag>
					<SpaceTag marginTop="20" marginBottom="20">
						<Subtext
							fontSize="16px"
							color="#6F6F6F"
							fontWeight="400"
							lineHeight="44px"
						>
							{/* {subTitle} */}
						</Subtext>
					</SpaceTag>
					<SpaceTag marginTop="20" marginBottom="20">
						<Subtext
							fontSize="16px"
							color="#6F6F6F"
							fontWeight="400"
							lineHeight="44px"
						>
							{/* Trial Previews: */}
						</Subtext>
					</SpaceTag>
					<SpaceTag marginTop="20" marginBottom="20">
						{/* <Player>
				<source src="movie.mp4" type="video/mp4" />
			</Player> */}
						<ImageView src="" width="-webkit-fill-available" />
					</SpaceTag>
					<SpaceTag marginTop="20" marginBottom="20">
						<Subtext
							fontSize="18px"
							color="#6F6F6F"
							fontWeight="400"
							lineHeight="44px"
						></Subtext>
					</SpaceTag>
				</>
			</>
		</>
	);
}
