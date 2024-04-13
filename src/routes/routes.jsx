import config from "~/config";

// Layouts
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Contact from "~/pages/Contact/Contact";
import Posts from "~/pages/Posts/Posts";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: Upload },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.posts, component: Posts },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
