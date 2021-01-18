import React from "react";
import {
	CenterTag,
	Subtext,
	FooterTag,
	SpaceTag
} from "../../components/small-component";

export function Footer() {
	return (
		<SpaceTag marginTop="20">
			<FooterTag>
				<CenterTag>
					<Subtext fontSize="16px" color="#fff" fontWeight="500">
						All rights reserved 2020
					</Subtext>
				</CenterTag>
			</FooterTag>
		</SpaceTag>
	);
}
