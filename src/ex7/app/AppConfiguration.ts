export class AppConfiguration {
    private static _instance: AppConfiguration;
    private _theme: string;
    private _notifications: boolean;

    private constructor() {
        this._theme = "light";
        this._notifications = true;
    }

    public static getInstance(): AppConfiguration {
        if (!this._instance) {
            this._instance = new AppConfiguration();
        }

        return this._instance;
    }

    get theme(): string {
        return this._theme;
    }

    get notifications(): boolean {
        return this._notifications;
    }

    changeTheme(): void {
        this._theme = this.theme=="light" ? "dark" : "light";
        console.log("Theme cuurent:", this._theme);
    }

    enableNotifications(): void {
        this._notifications = true;
        console.log("Notifications are enabled!");
    }

    disableNotifications(): void {
        this._notifications = false;
        console.log("Notifications are disabled!");
    }
}
