import {createRoot} from "react-dom/client";
import './tailwind.css';
import ListProduk from "./ListProduk"

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ListProduk/>
        </div>
    )