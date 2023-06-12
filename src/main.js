import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import App from "./App.vue";
import router from "./router";
import vueAwesomeSidebar from "vue-awesome-sidebar";
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vueAwesomeSidebar);
app.use(SvgIcon);
app.use(mdiAccount);
app.use(FontAwesomeIcon);
app.use(library);
app.mount("#app");
