import config from '~/config';

// Layouts
import Home from '~/pages/Home';
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";




// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: Upload },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }