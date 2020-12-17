import React from "react";
import Carousel from "react-elastic-carousel";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import {
	Ptag,
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	Horizontaltag,
	DotTag,
	DotSpanTag,
	BackButtonTag,
	RightButtonTag,
	CenterTag,
	SectionHappyCustomer
} from "../../components/small-component";
import { Card } from "../../components/card/card";
import * as Customer1 from "../../img/customer-1.png";
import * as Customer2 from "../../img/customer-2.png";
import * as Customer3 from "../../img/customer-3.png";

// import Dots from "./dots";

export function HappyCustomer() {
	const data = [
		{
			img: Customer1,
			name: "Piter William",
			city: "Mumbai, India",
			content:
				"“Wow... I am very happy to use Protalk App, it helped me alot with my lots of issues related to health and career and so far it is the best consultant app i ever used.",
			star: "4.5"
		},
		{
			img: Customer2,
			name: "Rekha Sharma",
			city: "Pune, India",
			content:
				"“I totally love it because I could able to connect with experts with in few minutes and solve my issues”.",
			star: "4.5"
		},
		{
			img: Customer3,
			name: "Rakesh Reddy",
			city: "Hyderabad, Telangana",
			content:
				"“This is very unusual app which is very unique and user friendly with amazing features.",
			star: "4.5"
		},
		{
			img: Customer1,
			name: "Piter William",
			city: "Mumbai, India",
			content:
				"“Wow... I am very happy to use Protalk App, it helped me alot with my lots of issues related to health and career and so far it is the best consultant app i ever used.",
			star: "5"
		},
		{
			img: Customer2,
			name: "Rekha Sharma",
			city: "Pune, India",
			content:
				"“I totally love it because I could able to connect with experts with in few minutes and solve my issues”.",
			star: "4.5"
		},
		{
			img: Customer3,
			name: "Rakesh Reddy",
			city: "Hyderabad, Telangana",
			content:
				"“This is very unusual app which is very unique and user friendly with amazing features.",
			star: "4.5"
		}
	];
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

	const prevSlide = () => {
		const resetToVeryBack = currentSlideIdx === 0;
		const index = resetToVeryBack ? data.length - 1 : currentSlideIdx - 1;
		setCurrentSlideIdx(index);
	};
	const nextSlide = () => {
		const resetIndex = currentSlideIdx === data.length - 1;
		const index = resetIndex ? 0 : currentSlideIdx + 1;
		setCurrentSlideIdx(index);
	};
	const activeImageSourcesFromState = data.slice(
		currentSlideIdx,
		currentSlideIdx + 3
	);
	const imageSourcesToDisplay =
		activeImageSourcesFromState.length < 3
			? [
					...activeImageSourcesFromState,
					...data.slice(0, 3 - activeImageSourcesFromState.length)
			  ]
			: activeImageSourcesFromState;

	return (
		<SectionHappyCustomer>
			<SpaceTag
				marginLeft="10"
				marginRight="10"
				marginTop="10"
				marginBottom="30"
			>
				<CenterTag>
					<SpaceTag
						marginLeft="10"
						marginRight="10"
						marginTop="10"
						marginBottom="30"
					>
						<Subtext
							fontSize="36px"
							color="#0B132A"
							fontWeight="600"
						>
							Trusted by Thousands of <br />
							Happy Customers
						</Subtext>
					</SpaceTag>
					<Subtext fontSize="16px" color="#4F5665" fontWight="400">
						These are the stories of our customers who have joined
						us with great <br />
						pleasure and sharing their experiences about this app
					</Subtext>
				</CenterTag>
			</SpaceTag>
			<Container>
				<Row>
					{imageSourcesToDisplay.map((item, index) => (
						<Column sm={12} md={4}>
							<Card
								margin="10"
								flexDirection="column"
								width="-webkit-fill-available"
							>
								<SpaceTag
									marginLeft="10"
									marginRight="10"
									marginTop="10"
									marginBottom="10"
								>
									<FlexTag justifyContent="space-between">
										<SpaceTag marginLeft="15" marginTop="0">
											<ImageTag
												src={item.img}
												height="40"
												width="40"
												borderRadius="50%"
											/>
										</SpaceTag>
										<SpaceTag>
											<Subtext
												fontSize="18px"
												color="#0B132A"
												letterSpacing="0.56px;"
											>
												{item.name}
											</Subtext>
											<Subtext
												fontSize="14px"
												color="#4F5665"
												letterSpacing="0.56px;"
											>
												{item.city}
											</Subtext>
										</SpaceTag>
										<SpaceTag>
											<FlexTag>
												<SpaceTag
													marginRight="10"
													marginTop="4"
												>
													<Subtext
														fontSize="16px"
														color="#0B132A"
													>
														{item.star}
													</Subtext>
												</SpaceTag>
												<SpaceTag marginTop="6">
													<Icon name={Icons.star} />
												</SpaceTag>
											</FlexTag>
										</SpaceTag>
									</FlexTag>
									<SpaceTag marginLeft="10" marginTop="10">
										<Subtext
											fontSize="16px"
											color="#0B132A"
											letterSpacing="0.56px;"
										>
											<Horizontaltag height="150px">
												{item.content}
											</Horizontaltag>
										</Subtext>
									</SpaceTag>
								</SpaceTag>
							</Card>
						</Column>
					))}
				</Row>
				<FlexTag justifyContent="flex-end">
					<SpaceTag
						marginLeft="10"
						marginRight="10"
						marginTop="10"
						marginBottom="10"
					>
						<BackButtonTag onClick={prevSlide}>
							<Icon name={Icons.backarrow} />
						</BackButtonTag>
					</SpaceTag>
					<SpaceTag
						marginLeft="10"
						marginRight="10"
						marginTop="10"
						marginBottom="10"
					>
						<RightButtonTag onClick={nextSlide}>
							<Icon name={Icons.rightarrow} />
						</RightButtonTag>
					</SpaceTag>
				</FlexTag>
			</Container>
		</SectionHappyCustomer>
	);
}
