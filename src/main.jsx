import { createRoot } from "react-dom/client";
import AppProvider from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(<AppProvider />);
