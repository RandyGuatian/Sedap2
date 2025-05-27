import {createRoot} from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./frameworkList";
import ListSearchFilter from "./ListSearchFilter";
import ResponsiveDesign from "./ReponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ResponsiveDesign/>
        </div>
    )