import React from 'react'
import { FC } from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
interface iTypography extends TypographyProps {

}

const Typography: FC<iTypography> = ({ ...other }) => {
	return <MuiTypography {...other}/>;
};

export default Typography;
