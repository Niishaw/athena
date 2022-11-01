import React from 'react'
import { FC } from 'react'
import {AppBar as MuiAppBar, Toolbar as MuiToolbar, ToolbarProps, AppBarProps} from '@mui/material'

interface iAppBar extends AppBarProps { children?: any }
interface iToolbar extends ToolbarProps { children?: any }

const AppBar: FC<iAppBar> = ({ children, ...other}) => {
	return (
		<MuiAppBar {...other}>
			{children}
		</MuiAppBar>
	)
}

const Toolbar: FC<iToolbar> = ({ children, ...other }) => {
	return (
		<MuiToolbar {...other}>
			{children}
		</MuiToolbar>
	)
}

export default AppBar
export {AppBar, Toolbar}
