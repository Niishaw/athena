import { useState } from "react";

import PageContainer from "components/pageContainer";
import Typography from "components/typography";

const List = () => {

    return (
        <PageContainer maxWidth="lg" sx={(theme) => ({ margin: theme.spacing(5)})}>
            <Typography>Welcome to List</Typography>
        </PageContainer>
    )
}

export default List