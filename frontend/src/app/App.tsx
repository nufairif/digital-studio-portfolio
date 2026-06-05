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
        ::-webkit-scrollbar-thumb { background: #262626; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #A1A1A1; }
        ::selection { background: rgba(47,107,255,0.28); color: #FFFFFF; }
      `}</style>
    </>
  );
}
