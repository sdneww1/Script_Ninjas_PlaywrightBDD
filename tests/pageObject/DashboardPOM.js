import { expect } from '@playwright/test';
export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardButton = page.getByRole('button', {name : 'Dashboard'}); // Adjust selector as needed
  }

  async dashappUrl()
  {
    await this.page.goto('/app');
      // const textapp = page.getByText('(Multi-Algorithm Navigation and Analysis Node)');
      // await expect(textapp).toHaveText(/(Multi-Algorithm Navigation and Analysis Node)/);
  }

  async clickDashboardButton() {
    await this.dashboardButton.click();
  }

  async verifyDashboardPage(Dashurl) {
    await this.page.waitForURL(Dashurl);
  }
}
