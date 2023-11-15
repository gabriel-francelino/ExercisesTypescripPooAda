import { AppConfiguration } from "./app/AppConfiguration";

const app1 = AppConfiguration.getInstance();
const app2 = AppConfiguration.getInstance();

console.log("app1 === app2?", app1 === app2);
console.log("Theme app1:", app1.theme);
console.log("Theme app2:", app2.theme);
app1.changeTheme();
console.log("Theme app1 changed:", app1.theme);
console.log("Theme app2:", app2.theme);
app2.changeTheme();
console.log("Theme app1:", app1.theme);
console.log("Theme app2 changed:", app2.theme);
console.log("Notifications app1:", app1.notifications);
console.log("Notifications app2:", app2.notifications);
app1.disableNotifications();
console.log("Notifications app1 disabled:", app1.notifications);
console.log("Notifications app2 disabled:", app2.notifications);
