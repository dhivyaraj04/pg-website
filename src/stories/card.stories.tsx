import React from "react";
import { Card } from "../components/card/card";
import { Icon } from "../components/icon/icon";
import { Icons } from "../components/icon/icons-props";
export default {
	title: "Card",
	component: Card
};

export const Cards = () => (
	<Card borderRadius="0" margin="0 auto" textAlign="center">
		<Icon name={Icons.hamburger} />
	</Card>
);
