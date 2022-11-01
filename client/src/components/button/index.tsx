import { FC } from "react";
import { Button as MuiButton, ButtonProps, ButtonGroup as MuiButtonGroup, ButtonGroupProps } from "@mui/material";

interface iButtonGroup extends ButtonGroupProps {
	children?: any;
}

interface iButton extends ButtonProps {
	children?: any;
	evtId?: string;
  variant?: "contained" | "text" | "outlined";
	onClick?: (event?: any, evtId?: string) => void;
}

const ButtonGroup:FC<iButtonGroup> = ({children, ...other}) => {
	return (
		<MuiButtonGroup
			{...other}>
			{children}
		</MuiButtonGroup>
	)
}

const Button:FC<iButton> = ({ children, variant="contained", evtId, onClick, ...other }) => {
	const handleOnClick = (evt) => {
		onClick !== undefined && onClick(evt, evtId);
	};
	return (
		<MuiButton
    variant={variant}
    onClick={handleOnClick}
    {...other}>
			{children}
		</MuiButton>
	);
};
export default Button;
export { Button, ButtonGroup}
