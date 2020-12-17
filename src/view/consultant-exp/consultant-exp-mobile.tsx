import React from "react";
import Carousel from "react-elastic-carousel";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Subtext,
	SpaceTag,
	FlexTag
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";

export function ConsultantExpertMobile() {
	const data = [
		{
			name1: "Fitness",
			icon1: Icons.fitness,
			name2: "Aryuvedu",
			icon2: Icons.ayruvedu
		},
		{
			name1: "Mental Health",
			icon1: Icons.mentalhealth,
			name2: "GST Filing",
			icon2: Icons.gst
		},
		{
			name1: "Career",
			icon1: Icons.career,
			name2: "Doctor",
			icon2: Icons.doctor
		},
		{
			name1: "Diet",
			icon1: Icons.diet,
			name2: "Weight Loss",
			icon2: Icons.weightloss
		},
		{
			name1: "Lawyer",
			icon1: Icons.lawyer,
			name2: "Accountant",
			icon2: Icons.accountant
		},
		{
			name1: "Dermatologist",
			icon1: Icons.dermatologist,
			name2: "Yoga",
			icon2: Icons.yoga
		}
	];
	return (
		<SectionConsultant>
			<H3tagConsultant>
				Connect with our Certifield Consultant Experts Today
			</H3tagConsultant>

			<SpaceTag marginTop="40">
				<Container>
					<Carousel
						showArrows={false}
						itemsToScroll={2}
						itemsToShow={3}
						pagination={true}
						verticalMode={true}
					>
						{data.map((item, i) => (
							<Row>
								<Column md={6} sm={6} xs={6}>
									<Card
										borderRadius="0"
										margin="0 auto"
										textAlign="center"
										width="130px"
									>
										<Atag
											fontSize="18"
											href=""
											color="#000"
										>
											<Icon name={item.icon1} />
											<Subtext color="#000000">
												{item.name1}
											</Subtext>
										</Atag>
									</Card>
								</Column>
								<Column md={6} sm={6} xs={6}>
									<Card
										borderRadius="0"
										margin="0 auto"
										textAlign="center"
										width="130px"
									>
										<Atag
											fontSize="18"
											href=""
											color="#000"
										>
											<Icon name={item.icon2} />
											<Subtext
												color="#000000"
												fontSize="14px"
											>
												{item.name2}
											</Subtext>
										</Atag>
									</Card>
								</Column>
							</Row>
						))}
					</Carousel>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
