import { Route, Routes } from "react-router-dom";

import List from "./list";
import Details from "./details";

const CreditCards = () => {
    return (
        <Routes>
            <Route index element={<List />} />
            <Route path=":id" element={<Details />} />
        </Routes>
    )
}

export default CreditCards