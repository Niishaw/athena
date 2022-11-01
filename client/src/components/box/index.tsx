import { FC } from "react";
import { Box as MuiBox, BoxProps } from "@mui/material";

interface iBox extends BoxProps {
	children?: any;
}

const Box: FC<iBox> = ({ children, ...other }) => {
	return (
		<MuiBox {...other}>
			{children}
		</MuiBox>
	);
};
export default Box;
