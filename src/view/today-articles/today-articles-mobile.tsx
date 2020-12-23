import React from "react";
import { Container } from "styled-container-component";
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

export function ExpertArticlesMobile() {
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
			<Container>
				<SpaceTag
					marginLeft="10"
					marginRight="10"
					marginTop="10"
					marginBottom="30"
				>
					<Subtext fontSize="32px" color="#000000" fontWeight="400">
						Popular Expertize Articles
					</Subtext>
				</SpaceTag>
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
									fontSize="24px"
									color="#999"
									fontWeight="600"
								>
									{item.name}
								</Subtext>
							</SpaceTag>

							{item.nutrition.map((list, i) => (
								<Row>
									<Column sm={12} md={12} xs={12}>
										<FlexTag>
											<SpaceTag marginTop="5">
												<ResposiveImag
													src={list.image}
												/>
											</SpaceTag>
											<Card
												width="-webkit-fill-available"
												border="1"
												borderRadius="5"
											>
												<SpaceTag>
													<Subtext
														fontSize="12px"
														color="#282828"
														letterSpacing="0.56px"
													>
														{list.title}
													</Subtext>
													<SpaceTag
														marginBottom="5"
														marginTop="5"
													></SpaceTag>
													<FlexTag>
														<SpaceTag
															marginLeft="0"
															marginTop="10"
														>
															<Subtext
																fontSize="12px"
																color="#010101"
																letterSpacing="0.56px"
															>
																{
																	list
																		.consultant
																		.name
																}
															</Subtext>
															<Subtext
																fontSize="10px"
																color="#979797"
															>
																{
																	list
																		.consultant
																		.expertise
																}
															</Subtext>
														</SpaceTag>
													</FlexTag>
												</SpaceTag>
											</Card>
										</FlexTag>
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
									fontSize="24px"
									color="#999"
									fontWeight="600"
								>
									{item.name}
								</Subtext>
							</SpaceTag>

							{item.Fitness.map((list, i) => (
								<Row>
									<Column sm={12} md={12} xs={12}>
										<FlexTag>
											<SpaceTag marginTop="5">
												<ResposiveImag
													src={list.image}
												/>
											</SpaceTag>
											<Card
												width="-webkit-fill-available"
												border="1"
												borderRadius="5"
											>
												<SpaceTag>
													<Subtext
														fontSize="12px"
														color="#282828"
														letterSpacing="0.56px"
													>
														{list.title}
													</Subtext>
													<SpaceTag
														marginBottom="5"
														marginTop="5"
													></SpaceTag>
													<FlexTag>
														<SpaceTag
															marginLeft="0"
															marginTop="10"
														>
															<Subtext
																fontSize="12px"
																color="#010101"
																letterSpacing="0.56px"
															>
																{
																	list
																		.consultant
																		.name
																}
															</Subtext>
															<Subtext
																fontSize="10px"
																color="#979797"
																letterSpacing="0.56px"
															>
																{
																	list
																		.consultant
																		.expertise
																}
															</Subtext>
														</SpaceTag>
													</FlexTag>
												</SpaceTag>
											</Card>
										</FlexTag>
									</Column>
								</Row>
							))}
						</>
					))}
				</SpaceTag>
			</Container>
		</>
	);
}
