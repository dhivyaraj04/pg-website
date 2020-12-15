import React from "react";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import {
	Ptag,
	SpaceTag,
	BoxContainer,
	FlexTag,
	Subtext
} from "../../components/small-component";

export function TrendingArticles() {
	const data = [
		{
			name: "Piter William",
			description:
				"Learn Yoga techniques online to become proactive in your daily life",
			count: "1K"
		},
		{
			name: "Jenifer Rosario",
			description:
				"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",
			count: "2K"
		},
		{
			name: "James Watson",
			description:
				"If You Really Want to Optimize Your Diet, Focus on Fiber",
			count: "1K"
		},
		{
			name: "Jenifer Rosario",
			description:
				"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",
			count: "1K"
		},
		{
			name: "James Watson",
			description:
				"If You Really Want to Optimize Your Diet, Focus on Fiber",
			count: "1K"
		},
		{
			name: "Jenifer Rosario",
			description:
				"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",
			count: "1K"
		},
		{
			name: "James Watson",
			description:
				"If You Really Want to Optimize Your Diet, Focus on Fiber",
			count: "1K"
		}
	];
	return (
		<BoxContainer background="#F8F8FB" borderRadius="5px">
			<SpaceTag marginTop="10">
				<Subtext fontSize="20px" color="#002E46" fontWeight="600">
					Trending Articles
				</Subtext>
			</SpaceTag>
			{data.map((item, i) => (
				<>
					<SpaceTag marginTop="10" marginBottom="10">
						<Ptag color="#002E46" fontSize="16">
							{item.description}
						</Ptag>
						<FlexTag justifyContent="space-between">
							<Subtext fontSize="14px" color="#9AB1BD">
								{item.name}
							</Subtext>
							<FlexTag>
								<Icon name={Icons.eye} />
								<SpaceTag marginLeft="5" marginTop="0">
									<Subtext fontSize="14px" color="#9AB1BD">
										{item.count}
									</Subtext>
								</SpaceTag>
							</FlexTag>
						</FlexTag>
					</SpaceTag>
				</>
			))}
		</BoxContainer>
	);
}
