import React from "react";
import Carousel from "react-elastic-carousel";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import {
	Ptag,
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	Horizontaltag,
	CenterTag,
	SectionHappyCustomer
} from "../../components/small-component";
import { Card } from "../../components/card/card";
import * as Customer1 from "../../img/customer-1.png";
import * as Customer2 from "../../img/customer-2.png";
import * as Customer3 from "../../img/customer-3.png";

export function HappyCustomerMoile() {
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
							fontSize="26px"
							color="#0B132A"
							fontWeight="600"
						>
							Trusted by Thousands of <br />
							Happy Customers
						</Subtext>
					</SpaceTag>
					<Subtext fontSize="16px" color="#4F5665" fontWight="400">
						These are the stories of our customers who have joined
						us with great pleasure and sharing their experiences
						about this app
					</Subtext>
				</CenterTag>
			</SpaceTag>

			<Carousel showArrows={false} itemsToScroll={2} itemsToShow={1}>
				{data.map((item, index) => (
					<Card margin="10" flexDirection="column">
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
										height="50"
										width="50"
										borderRadius="50%"
									/>
								</SpaceTag>
								<SpaceTag>
									<Subtext fontSize="18px" color="#0B132A">
										{item.name}
									</Subtext>
									<Subtext fontSize="14px" color="#4F5665">
										{item.city}
									</Subtext>
								</SpaceTag>
								<FlexTag>
									<SpaceTag marginRight="10">
										<Subtext
											fontSize="16px"
											color="#0B132A"
										>
											{item.star}
										</Subtext>
									</SpaceTag>
									<Icon name={Icons.star} />
								</FlexTag>
							</FlexTag>
							<SpaceTag marginLeft="10" marginTop="10">
								<Subtext fontSize="16px" color="#0B132A">
									<Horizontaltag height="100px">
										{item.content}
									</Horizontaltag>
								</Subtext>
							</SpaceTag>
						</SpaceTag>
					</Card>
				))}
			</Carousel>
		</SectionHappyCustomer>
	);
}
