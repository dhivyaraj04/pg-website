import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	ResposiveImag
} from "../../components/small-component";
import * as Profile from "../../img/profile-1.png";
import * as Nutrition from "../../img/nutrition-1.png";
import * as Nutrition2 from "../../img/nutrition-2.png";
import * as Fitness from "../../img/fitness-1.png";
import * as Fitness2 from "../../img/fitness-2.png";

export function ExportArticles() {
	const Nutritions = [
		{
			name: "Nutrition",
			nutrition: [
				{
					id: "1",
					image: Nutrition,
					title:
						"If You Really Want to Optimize Your Diet, Focus on Fiber",
					content:
						"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",
					consultant: {
						id: "1",
						image: Profile,
						name: "Arjun Sharma",
						expertise: "Diet Expert"
					}
				},
				{
					id: "2",
					image: Nutrition2,
					title: "What Your Doctor Doesn’t Know About Nutrition",
					content:
						"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",
					consultant: {
						id: "1",
						image: Profile,
						name: "Arjun Sharma",
						expertise: "Diet Expert"
					}
				}
			]
		}
	];
	const Fitnesss = [
		{
			name: "Fitnesss",
			Fitness: [
				{
					id: "1",
					image: Fitness,
					title: "The 5 Most Important Laws of Fitness of All Time",
					content:
						"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",
					consultant: {
						id: "1",
						image: Profile,
						name: "Arjun Sharma",
						expertise: "Diet Expert"
					}
				},
				{
					id: "2",
					image: Fitness2,
					title:
						"4 Things Your Fitness Trainer Is Thinking During Your Session",
					content:
						"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",
					consultant: {
						id: "1",
						image: Profile,
						name: "Arjun Sharma",
						expertise: "Diet Expert"
					}
				}
			]
		}
	];
	return (
		<>
			<SpaceTag marginTop="10" marginBottom="10">
				{Nutritions.map((item, i) => (
					<>
						<SpaceTag
							marginTop="10"
							marginBottom="10"
							marginLeft="15"
							marginRight="15"
						>
							<Subtext
								fontSize="30px"
								color="#999"
								fontWeight="600"
							>
								{item.name}
							</Subtext>
						</SpaceTag>

						{item.nutrition.map((list, i) => (
							<Row>
								<Column sm={2} md={2} xs={2}>
									<SpaceTag marginTop="5" marginBottom="5">
										<ResposiveImag src={list.image} />
									</SpaceTag>
								</Column>
								<Column sm={10} md={10} xs={10}>
									<Card border="1" borderRadius="0">
										<SpaceTag
											marginLeft="10"
											marginTop="5"
											marginRight="10"
											marginBottom="5"
										>
											<Subtext
												fontSize="16px"
												color="#282828"
											>
												{list.title}
											</Subtext>
											<SpaceTag
												marginBottom="5"
												marginTop="5"
											>
												<Subtext
													fontSize="12px"
													color="#979797"
												>
													{list.content}
												</Subtext>
											</SpaceTag>
											<FlexTag>
												<ImageTag
													src={list.consultant.image}
													width="25"
													height="25"
												/>
												<SpaceTag
													marginLeft="5"
													marginTop="0"
												>
													<Subtext
														fontSize="12px"
														color="#010101"
													>
														{list.consultant.name}
													</Subtext>
													<Subtext
														fontSize="10px"
														color="#979797"
													>
														{
															list.consultant
																.expertise
														}
													</Subtext>
												</SpaceTag>
											</FlexTag>
										</SpaceTag>
									</Card>
								</Column>
							</Row>
						))}
					</>
				))}
			</SpaceTag>
			<SpaceTag marginTop="10" marginBottom="10">
				{Fitnesss.map((item, i) => (
					<>
						<SpaceTag
							marginTop="10"
							marginBottom="10"
							marginLeft="15"
							marginRight="15"
						>
							<Subtext
								fontSize="30px"
								color="#999"
								fontWeight="600"
							>
								{item.name}
							</Subtext>
						</SpaceTag>

						{item.Fitness.map((list, i) => (
							<Row>
								<Column sm={2} md={2}>
									<SpaceTag marginTop="5" marginBottom="5">
										<ResposiveImag src={list.image} />
									</SpaceTag>
								</Column>
								<Column sm={10} md={10}>
									<Card border="1" borderRadius="0">
										<SpaceTag
											marginLeft="10"
											marginTop="5"
											marginRight="10"
											marginBottom="5"
										>
											<Subtext
												fontSize="16px"
												color="#282828"
											>
												{list.title}
											</Subtext>
											<SpaceTag
												marginBottom="5"
												marginTop="5"
											>
												<Subtext
													fontSize="12px"
													color="#979797"
												>
													{list.content}
												</Subtext>
											</SpaceTag>
											<FlexTag>
												<ImageTag
													src={list.consultant.image}
													width="25"
													height="25"
												/>
												<SpaceTag
													marginLeft="5"
													marginTop="0"
												>
													<Subtext
														fontSize="12px"
														color="#010101"
													>
														{list.consultant.name}
													</Subtext>
													<Subtext
														fontSize="10px"
														color="#979797"
													>
														{
															list.consultant
																.expertise
														}
													</Subtext>
												</SpaceTag>
											</FlexTag>
										</SpaceTag>
									</Card>
								</Column>
							</Row>
						))}
					</>
				))}
			</SpaceTag>
		</>
	);
}
