import React from "react";
import { ImageTag } from "./style";

export type ProfileImgProps = {
	width?: string;
	height?: string;
	src?: ImageData;
	borderRadius?: string;
};

export function ProfileImg({
	src,
	height,
	width,
	borderRadius = "50%"
}: ProfileImgProps) {
	return (
		<>
			<ImageTag
				src={src}
				height={height}
				width={width}
				borderRadius={borderRadius}
			/>
		</>
	);
}
