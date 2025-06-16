import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;
    }

    async NavigatetoHomeUrl() {
        await this.page.goto(process.env.BaseURL);
    }

    async mananTitle(title) {
        await expect(this.page).toHaveTitle(title);
    }

    }
//export{ SignInPage };
