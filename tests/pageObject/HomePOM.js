import { expect } from '@playwright/test';

export class HomePage {

  constructor(page) {
    this.page = page;
    this.signInPopupmsg = page.locator('h2:has-text("Welcome to MANAN")');
    this.tryNowLink = page.getByRole('link', { name: 'Try Now' });
    this.tryforfreebtn = page.getByRole('button', { name: 'Try for free' });
    this.forMedicalPrfbtn = page.getByRole('button', { name: 'For Medical Professionals' });
    this.medicalTriagebtn = page.getByRole('button', { name: 'Start Medical Triage Assessment' });
    this.subsPagetext = page.getByText('Choose the plan that fits your needs.');
    this.priceLink = page.locator('a', { hasText: 'Pricing' });
    this.viewPricingPlanBtn = page.getByRole('button', { name: 'View Pricing Plan' }).first();
    this.signINbtnHome = page.getByRole('button', { name: 'Sign In' }).nth(0);
    this.signINbtnpopUp = page.getByRole('button', { name: 'Sign In' }).first();
    this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
    this.blogLink = page.getByRole('link', { name: 'Blog' });
    this.contactUSLink = page.getByRole('link', { name: 'Contact Us' });


  }

  async openBaseURL() {
    await this.page.goto('/')
    await this.page.waitForLoadState('load');
  }

  async appnavigteURL() {
    await this.page.goto('/app')
  }

  async getHomePageTitle(homeTitle) {
    expect(this.page).toHaveTitle(homeTitle);
  }

  async SignInbtnHome() {
    await this.signINbtnHome.click();
  }

  async signInPopup() {
    await this.page.waitForSelector('div[role="dialog"]');
    // Check for welcome message
    const welcomeHeading = this.signInPopupmsg;
    await expect(welcomeHeading).toBeVisible();
  }

  async trynowlink() {
    await this.tryNowLink.click();
  }

  async tryforfreebtnm() {
    await this.tryforfreebtn.hover();
    await this.tryforfreebtn.click({ noWaitAfter: true });
  }

  async forMedicalProfessionalbtn() {
    await this.forMedicalPrfbtn.click();
  }

  async pricingLink() {
    await this.priceLink.hover();
    await this.priceLink.click({ noWaitAfter: true });
  }

  async viewPricingPlanClick() {
    await this.viewPricingPlanBtn.hover();
    await this.viewPricingPlanBtn.click({ noWaitAfter: true });
  }

  async subspageValidation() {
    const subsHeading = this.subsPagetext;
    await expect(subsHeading).toBeVisible();
  }

  async medicalTriageAssessmentbtn() {
    await this.medicalTriagebtn.hover(); // hover first
    await this.medicalTriagebtn.click({ noWaitAfter: true });
    // then click

    //await this.medicalTriagebtn.click();
  }

  // async aboutUsLinkClick()
  // {
  //   await this.aboutUsLink.click();
  // }

  async aboutUsLinkClick() {
    await this.aboutUsLink.hover();
    await this.aboutUsLink.click({ noWaitAfter: true });
    await this.page.waitForTimeout(3000);
  }


  async aboutUsPagenavigation() {
    // await expect(this.page).toHaveURL(/.*\/about/);  
    await expect(this.page).toHaveURL('https://www.numpyninja.com/about');



  }

  async blogLinkClick() {
    await this.blogLink.hover();
    await this.blogLink.click({ noWaitAfter: true });
  }

  async blogPagenavigation() {
    await expect(this.page).toHaveURL(/.*\/blog/);

  }
  async contactUSLinkClick() {
    await this.contactUSLink.hover();
    await this.contactUSLink.click({ noWaitAfter: true });
  }

  async contactUSPagenavigation() {
    await expect(this.page).toHaveURL(/.*\/contact/);

  }

  async subscriptionUrl() {
    await this.page.goto('/subscription');
  }


  async SignInbtnPopupPage() {

    await this.signINbtnpopUp.click({ noWaitAfter: true });
  }

}

