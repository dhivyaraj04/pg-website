import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Footer } from "./footer/footer";
import { SubNavs } from "../components/navs/subnavs";
import {
	Subtext,
	BannerBar2,
	FlexTag,
	ImageTag,
	SpaceTag,
	CardBlock,
	Player,
	LoadMorebutton
} from "../components/small-component";
import { TrendingArticles } from "./trending-articles/trending-articles";
import {
	TrendingArticlesData,
	DetailArticleData,
	RelatedArticlesData
} from "./data";

export function DetailArticlesLayout() {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
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

	return (
		<>
			<SubNavs />

			<Container>
				<BannerBar2></BannerBar2>
				<SpaceTag marginTop="30" marginBottom="30">
					<Subtext fontSize="40px" color="#000" fontWeight="600">
						Learn Yoga techniques online to become proactive in your
						daily life
					</Subtext>
				</SpaceTag>
				<Row>
					<Column sm={8} md={8} xs={12}>
						{DetailArticleData.map((item, i) => (
							<>
								<SpaceTag marginTop="20" marginBottom="20">
									<FlexTag>
										<ImageTag
											src={item.profileImg}
											width="60"
											height="58"
										/>
										<SpaceTag marginLeft="5" marginTop="0">
											<Subtext
												fontSize="20px"
												color="#010101"
											>
												{item.name}
											</Subtext>
											<Subtext
												fontSize="18px"
												color="#979797"
											>
												{item.expertis}
											</Subtext>
										</SpaceTag>
									</FlexTag>
								</SpaceTag>
								<SpaceTag marginTop="20" marginBottom="20">
									<Subtext
										fontSize="20px"
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
										fontSize="22px"
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
										<SpaceTag
											marginTop="20"
											marginBottom="20"
										>
											<Subtext
												fontSize="26px"
												color="#000"
												fontWeight="400"
											>
												{item.week}
											</Subtext>
										</SpaceTag>
										<SpaceTag
											marginTop="20"
											marginBottom="20"
										>
											<Subtext
												fontSize="22px"
												color="#6F6F6F"
												fontWeight="400"
												lineHeight="44px"
											>
												{item.title}
											</Subtext>
										</SpaceTag>
										<SpaceTag
											marginTop="20"
											marginBottom="20"
										>
											<Subtext
												fontSize="22px"
												color="#6F6F6F"
												fontWeight="400"
												lineHeight="44px"
											>
												Trial Previews:
											</Subtext>
										</SpaceTag>
										<SpaceTag
											marginTop="20"
											marginBottom="20"
										>
											{/* <Player>
								<source src="movie.mp4" type="video/mp4" />
							</Player> */}
											<ImageTag
												src={item.video}
												width="-webkit-fill-available"
											/>
										</SpaceTag>
										<SpaceTag
											marginTop="20"
											marginBottom="20"
										>
											<Subtext
												fontSize="22px"
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

						<SpaceTag marginTop="40" marginBottom="20">
							<Subtext
								fontSize="30px"
								color="rgba(0, 0, 0, 0.25);"
								fontWeight="600"
							>
								Related Articles
							</Subtext>
						</SpaceTag>
						<Row>
							{RelatedArticlesData.map((list, i) => (
								<Column sm={12} md={6} xs={12}>
									<CardBlock>
										<ImageTag
											src={list.image}
											width="-webkit-fill-available"
										/>
										<SpaceTag
											marginLeft="6"
											marginTop="4"
											marginRight="6"
											marginBottom="4"
										>
											<Subtext
												fontSize="14px"
												color="#282828"
												letterSpacing="0.56px"
											>
												{list.title}
											</Subtext>

											<FlexTag>
												<SpaceTag
													marginLeft="5"
													marginTop="10"
												>
													<ImageTag
														src={
															list.consultant
																.image
														}
														width="25"
														height="25"
													/>
												</SpaceTag>
												<SpaceTag
													marginLeft="5"
													marginTop="10"
												>
													<Subtext
														fontSize="10px"
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
									</CardBlock>
								</Column>
							))}
						</Row>
						<Column sm={12} md={12} xs={12}>
							<SpaceTag marginTop="20" marginBottom="20">
								<LoadMorebutton>LOAD MORE</LoadMorebutton>
							</SpaceTag>
						</Column>
					</Column>
					<Column sm={4} md={4} xs={12}>
						<TrendingArticles
							TrendingArticlesItems={TrendingArticlesData}
						/>
					</Column>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
