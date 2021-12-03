import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChoiceMovie from "./pages/choiceMovie";
import YourTickets from "./pages/yourTicket"

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChoiceMovie />} />
                <Route path="/yourtickets" element={<YourTickets />} />

            </Routes>    
        </BrowserRouter>
    )
}