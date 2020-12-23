import React from "react";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import {
	Paratag,
	SpaceTag,
	BoxContainer,
	FlexTag,
	Subtext
} from "../../components/small-component";
export type TrendingArticlesItem = {
	name?: string;
	description?: string;
	count?: string;
};
export type TrendingArticlesProps = {
	TrendingArticlesItems: TrendingArticlesItem[];
};
export function TrendingArticles({
	TrendingArticlesItems
}: TrendingArticlesProps) {
	return (
		<BoxContainer background="#F8F8FB" borderRadius="5px">
			<SpaceTag marginTop="10">
				<Subtext fontSize="20px" color="#002E46" fontWeight="600">
					Trending Articles
				</Subtext>
			</SpaceTag>
			{TrendingArticlesItems.map((item, i) => (
				<>
					<SpaceTag marginTop="10" marginBottom="10">
						<Paratag>{item.description}</Paratag>
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
