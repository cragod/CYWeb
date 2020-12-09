import AIMS from "./components/aims/AIMS.vue";
import AIP from "./components/aip/AIP.vue";

const routes = [
    { path: "/", component: AIMS },
    { path: "/aims", component: AIMS },
    { path: "/aip", component: AIP },
];

export default routes