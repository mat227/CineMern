import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChoiceMovie from "./pages/choiceMovie";
import YourTickets from "./pages/yourTicket";
import HomeMovie from "./pages/homeMovie";
import Home from "./pages/home";
import IngressDate from "./pages/ingressDate";
import SelectTime from "./pages/selectTime";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChoiceMovie />} />
                <Route path="/yourtickets" element={<YourTickets />} />
                <Route path="/homeMovie" element={<HomeMovie />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/selectTime" element={<SelectTime /> } />
                <Route path="/IngressDate" element={<IngressDate />} />
            </Routes>    
        </BrowserRouter>
    )
}