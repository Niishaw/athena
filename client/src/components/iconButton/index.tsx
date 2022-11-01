import React from 'react';
import { FC } from "react";
import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material";

interface iButton extends Omit<IconButtonProps, "onClick"> {
	[x: string]: any
}

const IconButton:FC<iButton> = ({ onClick, evtId, children, ...other }) => {
	const handleOnClick = (evt) => {
		onClick !== undefined && onClick(evt, evtId);
	};
	return (
		<MuiIconButton onClick={handleOnClick} {...other}>
			{children}
		</MuiIconButton>
	);
};
export default IconButton;