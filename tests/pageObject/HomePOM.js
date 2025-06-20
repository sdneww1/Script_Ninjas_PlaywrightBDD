import { expect } from '@playwright/test';

export class HomePage {

  constructor(page) {
    this.page = page;
    this.signInPopupmsg = page.locator('h2:has-text("Welcome to MANAN")');
    this.tryNowLink = page.getByText('Try Now');
    this.tryforfreebtn = page.getByRole('button', { name:'Try for free'});
    this.forMedicalPrfbtn = page.getByText('For Medical Professionals');
    this.medicalTriagebtn = page.getByRole('button', { name:'Start Medical Triage Assessment'});
    this.subsPagetext = page.getByText('Choose the plan that fits your needs.');
    this.priceLink = page.getByText('Pricing').nth(0);
    this.viewPricingPlanBtn = page.getByRole('button', { name: 'View Pricing Plan'});
    this.signINbtnHome = page.getByRole('button', { name: 'Sign In' }).nth(0);
    this.signINbtnpopUp = page.getByRole('button', { name: 'Sign In' }).first();
    this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
    this.blogLink = page.getByRole('link', { name: 'Blog' });
    this.contactUSLink = page.getByRole('link', { name: 'Contact Us' });


  }

  async openBaseURL() {
    await this.page.goto('/')
  }

  async appnavigteURL() {
    await this.page.goto('/app')
  }

  async getHomePageTitle(homeTitle) {
    expect(this.page).toHaveTitle(homeTitle);
  }

  async SignInbtnzero() {
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

  async tryforfreebtnm()
  {
    await this.tryforfreebtn.click();
  }

  async forMedicalProfessionalbtn()
  {
    await this.forMedicalPrfbtn.click();
  }

  async pricingLink() {
    await this.priceLink.click();
  }

  async viewPricingPlanClick()
  {
    await this.viewPricingPlanBtn.click();
  }

  async subspageValidation(){
    const subsHeading = this.subsPagetext;
    await expect(subsHeading).toBeVisible();
  }

  async medicalTriageAssessmentbtn()
  {
    await this.medicalTriagebtn.click();
  }

  async aboutUsLinkClick()
  {
    await this.aboutUsLink.click();
  }

  async aboutUsPagenavigation()
  {
    await expect(this.page).toHaveURL(/.*\/about/);

  }

  async blogLinkClick()
  {
    await this.blogLink.click();
  }

  async blogPagenavigation()
  {
    await expect(this.page).toHaveURL(/.*\/blog/);

  }
  async contactUSLinkClick()
  {
    await this.contactUSLink.click();
  }

  async contactUSPagenavigation()
  {
    await expect(this.page).toHaveURL(/.*\/contact/);

  }

  async subscriptionUrl() {
    await this.page.goto('/subscription');
  }


  async SignInbtnPopupPage() {
    await this.signINbtnpopUp.click();
  }

}

