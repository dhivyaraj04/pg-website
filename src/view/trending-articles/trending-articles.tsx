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
	consultantName?: string;
	articleTitle?: string;
	views?: string;
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
						<Paratag>{item.articleTitle}</Paratag>
						<FlexTag justifyContent="space-between">
							<Subtext fontSize="14px" color="#9AB1BD">
								{item.consultantName}
							</Subtext>
							<FlexTag>
								<Icon name={Icons.eye} />
								<SpaceTag marginLeft="5" marginTop="-3">
									<Subtext fontSize="14px" color="#9AB1BD">
										{item.views}
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
