import { FC } from "react";
import { Grid as MuiGrid, GridProps } from "@mui/material";

interface iGrid extends GridProps {
	children?: any;
}

const Grid: FC<iGrid> = ({ children, ...other }) => {
	return (
		<MuiGrid {...other}>
			{children}
		</MuiGrid>
	);
};
export default Grid;
