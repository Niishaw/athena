import React from "react";
import { FC } from "react";

import { Container as MuiContainer, ContainerProps } from '@mui/material';


interface iContainer extends ContainerProps {
    children?: any;
}

const PageContainer:FC<iContainer> = ({children, maxWidth="md", ...other}) => {
    return <MuiContainer maxWidth={maxWidth} {...other}>
        {children}
    </MuiContainer>;
}

export default PageContainer