import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;
    }

    async NavigatetoHomeUrl() {
        await this.page.goto('https://manan.numpyninja.com');
    }


    }
//export{ SignInPage };
