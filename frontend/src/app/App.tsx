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
          background: #FFFFFF;
          color: #1A1A1A;
          overscroll-behavior: none;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #E0E0E0; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #1A8B9D; }
        ::selection { background: rgba(255,102,0,0.28); color: #1A1A1A; }
      `}</style>
    </>
  );
}
