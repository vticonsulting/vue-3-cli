import { createApp } from "vue";
import App from "./App.vue";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default";
import { DropdownsInstaller } from "@progress/kendo-dropdowns-vue-wrapper";

import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(DropdownsInstaller).mount("#app");
