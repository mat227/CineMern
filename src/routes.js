import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChoiceMovie from "./pages/choiceMovie";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChoiceMovie />} />
            </Routes>    
        </BrowserRouter>
    )
}