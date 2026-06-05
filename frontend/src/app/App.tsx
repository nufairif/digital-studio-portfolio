import "../styles/fonts.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #0A0A0A;
          overscroll-behavior: none;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(237,234,228,0.15); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(237,234,228,0.3); }
        ::selection { background: rgba(200,255,71,0.3); color: #EDEAE4; }
      `}</style>
    </>
  );
}
