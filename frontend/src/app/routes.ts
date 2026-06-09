import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { VisionPage } from "./pages/VisionPage";
import { MissionPage } from "./pages/MissionPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { CareerPage } from "./pages/CareerPage";
import { CareerDetailPage } from "./pages/CareerDetailPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "about/visi", Component: VisionPage },
      { path: "about/misi", Component: MissionPage },
      { path: "about/profil-pengurus", Component: TeamPage },
      { path: "galeri", Component: GalleryPage },
      { path: "artikel", Component: ArticlesPage },
      { path: "artikel/:slug", Component: ArticleDetailPage },
      { path: "karir", Component: CareerPage },
      { path: "karir/:slug", Component: CareerDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "kebijakan-privasi", Component: PrivacyPage },
    ],
  },
]);
