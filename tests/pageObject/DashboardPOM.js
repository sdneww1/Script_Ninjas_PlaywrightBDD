import { expect } from '@playwright/test';
export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardButton = page.locator('text=Dashboard'); // Adjust selector as needed
  }

  async clickDashboardButton() {
    await this.dashboardButton.click();
  }

  async verifyDashboardPage(Dashurl) {
    await this.page.waitForURL(Dashurl);
  }
}
