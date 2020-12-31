import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	ImageTag,
	Subtext,
	ImageView
} from "../../components/small-component";

import { DetailArticleData } from "../data";

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
export type ArticlesDetailsItemProps = {
	ArticlesDetailsItems?: ArticlesDetailItem[];
};
export function ArticleDetailMobile({
	ArticlesDetailsItems
}: ArticlesDetailsItemProps) {
	return (
		<>
			{ArticlesDetailsItems.map((item, i) => (
				<>
					<SpaceTag marginTop="20" marginBottom="20">
						<FlexTag>
							<ImageTag
								src={item.profileImg}
								width="32"
								height="32"
							/>
							<SpaceTag marginLeft="5" marginTop="0">
								<Subtext fontSize="14px" color="#010101">
									{item.name}
								</Subtext>
								<Subtext fontSize="12px" color="#979797">
									{item.expertis}
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
							{item.date}
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
							{item.description}
						</Subtext>
					</SpaceTag>
					{item.content.map((item, i) => (
						<>
							<SpaceTag marginTop="20" marginBottom="20">
								<Subtext
									fontSize="26px"
									color="#000"
									fontWeight="400"
								>
									{item.week}
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="20" marginBottom="20">
								<Subtext
									fontSize="16px"
									color="#6F6F6F"
									fontWeight="400"
									lineHeight="44px"
								>
									{item.title}
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="20" marginBottom="20">
								<Subtext
									fontSize="16px"
									color="#6F6F6F"
									fontWeight="400"
									lineHeight="44px"
								>
									Trial Previews:
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="20" marginBottom="20">
								{/* <Player>
				<source src="movie.mp4" type="video/mp4" />
			</Player> */}
								<ImageView
									src={item.video}
									width="-webkit-fill-available"
								/>
							</SpaceTag>
							<SpaceTag marginTop="20" marginBottom="20">
								<Subtext
									fontSize="18px"
									color="#6F6F6F"
									fontWeight="400"
									lineHeight="44px"
								>
									{item.desc}
								</Subtext>
							</SpaceTag>
						</>
					))}
				</>
			))}
		</>
	);
}
