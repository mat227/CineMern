import { BrowserRouter, Routes, Route } from "react-router-dom";

import EscolhaFilme from "./pages/escolhaFilme";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EscolhaFilme />} />
            </Routes>    
        </BrowserRouter>
    )
}