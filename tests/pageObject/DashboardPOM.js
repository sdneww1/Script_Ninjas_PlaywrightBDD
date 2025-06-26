import { expect } from '@playwright/test';

export class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboardBtn = page.getByRole('button', { name: 'Dashboard' });
        this.startNewAssessmentBtn = page.getByRole('button', { name: 'Start New Assessment' });
        this.viewPrevAssessmentBtn = page.getByRole('button', { name: 'View Previous Assessments' });
        this.startPrevAssessmentBtn = page.getByRole('button', { name: 'Start a New Assessment' });
        this.assessmentDetailsBtn = page.getByRole('tab', { name: 'Assessment' });
        this.caseDetailsBtn = page.getByRole('tab', { name: 'Case Details' });
        this.exportToPDFBtn = page.getByRole('button', { name: 'Export as PDF' });
        this.startFirstAssessmentLink = page.getByRole('button', { name: 'Start your first assessment →' });
        this.viewHistoryLink = page.getByRole('button', { name: 'View history →' });
        this.upgradeNowLink = page.getByRole('button', { name: 'Upgrade now →' });
        this.updateSettingsLink = page.getByRole('button', { name: 'Update settings →' });
        this.upgradePremiumBtn = page.getByRole('link', { name: 'Upgrade to Premium' });
        this.subscribeNowBtn = page.getByRole('button', { name: 'Subscribe Now' });
        this.currentPlanText = page.getByRole('link', { name: 'Upgrade to Premium' });
        this.subscribeBtn = page.getByText(/^Subscribe$/).nth(0);
        this.emailPaymentCheck = page.locator('.ReadOnlyFormField-title');
        this.cardNumberBox = page.getByPlaceholder('1234 1234 1234 1234');
        this.monthYearBox = page.getByPlaceholder('MM / YY');
        this.CVCBox = page.getByPlaceholder('CVC');
        this.nameBox = page.getByPlaceholder('Full name on card');
        this.postalBox = page.getByPlaceholder('Postal code');
        this.checkoutBox = page.getByRole('checkbox', { name: /save my information/i });
        this.phoneBox = page.getByPlaceholder('(506) 234-5678');
        this.subscribeBtn = page.getByRole('button', { name: /subscribe/i });
        this.profileIcon = page.locator('button[aria-haspopup="menu"]');
        this.settings = this.page.getByRole('menuitem', { name: 'Settings' });
        this.previousAssessments = this.page.getByRole('menuitem', { name: 'Previous Assessments' });
        this.subscriptionPlans = this.page.getByRole('menuitem', { name: 'Subscription Plans' });
        this.logout = this.page.getByRole('menuitem', { name: 'Log out' });
        this.saveChangesBtn = this.page.getByRole('button', { name: 'Save Changes' });
        this.logoutBtn = this.page.getByRole('menuitem', { name: 'Log out' });
    }


    async dashboardBtnClick() {
        await this.dashboardBtn.click();
    }

    async dashboardPageText(expectedTitle) {
        const dashboardPageText = this.page.getByText('Welcome to Your Medical Dashboard');
        await expect(dashboardPageText).toHaveText(expectedTitle);
    }

    async startNewAssessText() {
        const assessmentText = this.page.getByText('Start New Assessment');
        await expect(assessmentText).toHaveText('Start New Assessment');
    }

    async startNewAssessmentBtnClick() {
        await this.startNewAssessmentBtn.click();
    }

    async mananPageTitle() {
        const mananHeading = this.page.getByText('(Multi-Algorithm Navigation and Analysis Node)');
        await expect(mananHeading).toBeVisible();
    }

    async viewPrevAssessmentBtnText() {
        const viewPrevAssessmentText = this.page.getByText('View Previous Assessments');
        await expect(viewPrevAssessmentText).toHaveText('View Previous Assessments');
    }

    async viewPrevAssessmentBtnClick() {
        await this.viewPrevAssessmentBtn.click();
    }

    async prevAssessmentPageText() {
        const prevAssessmentPageText = this.page.getByText('Previous Assessments');
        await expect(prevAssessmentPageText).toHaveText('Previous Assessments');
    }

    async noAssessmentText() {
        const noAssessmentPageText = this.page.getByText('No assessments found');
        await expect(noAssessmentPageText).toHaveText('No assessments found');
    }

    async startPrevAssessmentBtnClick() {
        await this.startPrevAssessmentBtn.click();
    }

    async yourAssessmentText() {
        const yourAssessmentPageText = this.page.getByText('Your Assessments');
        await expect(yourAssessmentPageText).toHaveText('Your Assessments');
    }

    async assessmentDetails() {
        const assessmentDetailsText = this.page.getByRole('tab', { name: 'Assessment' });
        await expect(assessmentDetailsText).toHaveText('Assessment');
    }

    async caseDetails() {
        const caseDetailsText = this.page.getByRole('tab', { name: 'Case Details' });
        await expect(caseDetailsText).toHaveText('Case Details');
    }

    async assessmentDetailsBtnClick() {
        await this.assessmentDetailsBtn.click();
    }

    async caseDetailsBtnClick() {
        await this.caseDetailsBtn.click();
    }

    async multipleAssessment() {
        const assessmentOption = this.page.getByRole('heading', { name: 'Your Assessments' });
        const firstAssessment = assessmentOption.locator('..').locator('div').nth(1);
        await firstAssessment.click();
    }

    async exportToPDFBtnClick() {
        await this.exportToPDFBtn.click();
    }

    async exportToPDFText() {
        this.page.on('popup', async (popup) => {
            await popup.close();
        });

        const pdfText = this.page.getByText('PDF Generated').first();
        await expect(pdfText).toBeVisible();
    }

    async startFirstAssessmentLinkClick() {
        await this.startFirstAssessmentLink.click();
    }

    async viewHistoryLinkClick() {
        await this.viewHistoryLink.click();
    }

    async upgradeNowLinkClick() {
        await this.upgradeNowLink.click();
    }

    async subscriptionPlanText() {
        const subscriptionText = this.page.getByText('Choose the plan that fits your needs.');
        await expect(subscriptionText).toHaveText('Choose the plan that fits your needs.');
    }

    async updateSettingsLinkClick() {
        await this.updateSettingsLink.click();
    }

    async updateSettingsText() {
        const settingsText = this.page.getByText('Settings');
        await expect(settingsText).toHaveText('Settings');
    }

    async upgradePremiumBtnClick() {
        // await this.upgradePremiumBtn.click();
        await this.upgradePremiumBtn.click({ noWaitAfter: true });
    }

    async currentPlanTextCheck() {
        await expect(this.currentPlanText).toBeVisible();
    }

    async subscribeNowBtnClick() {
        await this.subscribeNowBtn.click({ timeout: 5000 });
    }

    async paymentsPageText() {
        const paymentsText = this.page.getByText('Subscribe to Premium Subscription');
        await expect(paymentsText).toBeVisible();
    }

    async emailPaymentText() {
       
        await this.emailPaymentCheck.click({ noWaitAfter: true });
    }

    async subscribeBtnClick() {
        await this.subscribeBtn.click();
    }

    async errorPayment() {
        const errorMessages = this.page.locator('[data-qa="EmptyFieldError"]');
        const count = await errorMessages.count();
        if (count > 0) {
            await expect(errorMessages.nth(0)).toBeVisible();
        }
        if (count > 1) {
            await expect(errorMessages.nth(1)).toBeVisible();
        }
    }

    async cardNumberBoxFill() {
        await this.cardNumberBox.fill('4242424242424242');
    }

    async cardNumberBoxCheck() {
       
        const cardNumberValue = await this.page.locator('#cardNumber').getAttribute('value');
        await expect(cardNumberValue).not.toBe('');
    }

    async monthYearBoxFill() {
        await this.monthYearBox.fill('09/27');
    }

    async monthYearBoxCheck() {
        const cardExpiryValue = await this.page.locator('#cardExpiry').getAttribute('value');
        await expect(cardExpiryValue).not.toBe('');
    }

    async CVCBoxFill() {
        await this.CVCBox.fill('027');
    }

    async CVCBoxCheck() {
        const CVCValue = await this.page.locator('#cardCvc').getAttribute('value');
        await expect(CVCValue).not.toBe('');
    }

    async nameBoxFill() {
        await this.nameBox.fill('John');
    }

    async nameBoxCheck() {
        const nameValue = await this.page.locator('#billingName').getAttribute('value');
        await expect(nameValue).not.toBe('');
    }

    async countryBoxFill() {
        await this.page.selectOption('#billingCountry', 'CA');
    }

    async countryBoxCheck() {
        await expect(this.page.locator('#billingCountry')).toHaveValue('CA');
    }

    async postalBoxFill() {
        await this.postalBox.fill('18765');
    }

    async postalBoxCheck() {
        const postalValue = await this.page.locator('#billingPostalCode').getAttribute('value');
        await expect(postalValue).not.toBe('');
    }

    async checkoutBoxFill() {
        await this.page.getByLabel('Save my information for faster checkout').check();
    }

    async checkoutBoxCheck() {
        await expect(this.checkoutBox).toBeChecked();
    }

    async phoneBoxFill() {
        await this.phoneBox.fill('1870987665');
    }

    async phoneBoxCheck() {
        const phoneValue = await this.page.locator('#phoneNumber').getAttribute('value');
        await expect(phoneValue).not.toBe('');
    }

    async subscribeBtnClick() {
        await this.cardNumberBox.fill('4242424242424242');
        await this.monthYearBox.fill('09/27');
        await this.CVCBox.fill('027');
        await this.nameBox.fill('John');
        await this.page.selectOption('#billingCountry', 'CA');
        await this.postalBox.fill('L5N2X3');
        await this.page.getByLabel('Save my information for faster checkout').check();
        await this.phoneBox.fill('2345465768');
        await this.subscribeBtn.waitFor({ state: 'visible' });
        await this.subscribeBtn.click({ timeout: 7000 });
    }

    async subscriptionSuccessText() {
        const subsSucessText = this.page.getByText(/^Subscription Activated$/);
        await expect(subsSucessText).toBeVisible();
    }

    async profileIconCheck() {
        const profileBtn = this.page.getByRole('button', { name: /^[A-Z]$/ });
        await expect(profileBtn).toBeVisible();
    }

    async profileIconClick() {
        await this.profileIcon.click();
    }

    async profileIconDropDown() {
        const dropDownOptions = this.page.getByText('Log out');
        await expect(dropDownOptions).toBeVisible();
    }

    async userNameEmailCheck() {
        const userNameEmail = this.page.locator('div.flex.flex-col.space-y-1');
        await expect(userNameEmail).toBeVisible();
    }

    async settingsCheck() {
        await expect(this.settings).toBeVisible();
    }

    async previousAssessmentsCheck() {
        await expect(this.previousAssessments).toBeVisible();
    }

    async subscriptionPlansCheck() {
        await expect(this.subscriptionPlans).toBeVisible();
    }

    async logoutCheck() {
        await expect(this.logout).toBeVisible();
    }

    async settingsClick() {
        await this.settings.click();
    }

    async previousAssessmentsClick() {
        await this.previousAssessments.click();
    }

    async subscriptionPlansClick() {
        await this.subscriptionPlans.click();
    }

    async logoutClick() {
        await this.logout.click();
    }

    async settingsPageText() {
        const settingsText = this.page.getByText(/^Settings$/);
        await expect(settingsText).toBeVisible();
    }

    async userNameEmailSettingsText() {
        const userNameEmailSettings = this.page.locator('p.text-sm.text-gray-400').nth(1);
        await expect(userNameEmailSettings).toBeVisible();
    }

    async notificationPreferencesText() {
        const notificationText = this.page.getByText('Notification Preferences');
        await expect(notificationText).toBeVisible();
    }

    async eMailNotificationText() {
        const eMailNotificationText = this.page.getByText('Email Notifications');
        await expect(eMailNotificationText).toBeVisible();
    }

    async appNotificationText() {
        const appNotificationText = this.page.getByText(/^App Notifications$/);
        await expect(appNotificationText).toBeVisible();
    }

    async uncheckEmailNotification() {
        await this.page.getByLabel('Email Notifications').uncheck();
    }

    async uncheckEmailNotificationAssert() {
        await expect(this.page.getByLabel('Email Notifications')).not.toBeChecked();
    }

    async checkEmailNotification() {
        await this.page.getByLabel('Email Notifications').check();
    }

    async checkEmailNotificationAssert() {
        await expect(this.page.getByLabel('Email Notifications')).toBeChecked();
    }

    async uncheckAppNotification() {
        await this.page.getByLabel('Email Notifications').uncheck();
    }

    async uncheckAppNotificationAssert() {
        await expect(this.page.getByLabel('Email Notifications')).not.toBeChecked();
    }

    async checkAppNotification() {
        await this.page.getByLabel('Email Notifications').check();
    }

    async checkAppNotificationAssert() {
        await expect(this.page.getByLabel('Email Notifications')).toBeChecked();
    }

    async saveChangesBtnClick() {
        await this.saveChangesBtn.click();
    }

    async saveChangesText() {
        const saveChanges = this.page.getByText('Your notification preferences have been updated').nth(1);
        await expect(saveChanges).toBeVisible();
    }

    async logoutBtnClick() {
        await this.logoutBtn.click();
    }

    async logoutText() {
        const logoutsuccessText = this.page.getByText('You have been securely logged out of MANAN Medical Assistant.');
        await expect(logoutsuccessText).toHaveText('You have been securely logged out of MANAN Medical Assistant.');
    }
}
