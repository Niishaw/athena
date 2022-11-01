import { PropTypes } from "@mui/material";

export enum eLayout {
    Home = "home"
}

export interface iConfig {
    layouts: iLayouts
}

export interface iLayouts {
    [x: string]: iLayout;
}

export interface iLayout {
    heading: string,
    appBarColor: PropTypes.Color
}