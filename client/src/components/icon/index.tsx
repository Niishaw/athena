import React from 'react';
import { FC } from "react";
import { IconProps } from "@mui/material";
import * as muiIcons from "@mui/icons-material";


interface iIcon extends IconProps {
	label: string;
}

const Icon: FC<iIcon> = ({ label, children, ...other }) => {
	const Icon = muiIcons[label];
	if (Icon === undefined) {
		console.log("ERROR: Element - Icon: "+label+" not found.");
		return null;
	}
	return <Icon {...other}>{children}</Icon>;
};

export default Icon;