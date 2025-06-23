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
        this.upgradePremiumBtn = page.getByRole('button', { name: 'Upgrade to Premium' });
        this.subscribeNowBtn = page.getByRole('button', { name: 'Subscribe Now' });
        this.currentPlanText = page.getByRole('button', { name: 'Upgrade to Premium' });
        this.subscribeBtn = page.getByText(/^Subscribe$/).nth(0);
        this.cardNumberBtn = page.getByPlaceholder('1234 1234 1234 1234');



        this.profileIcon = page.locator('button[aria-haspopup="menu"]');
        this.settings = this.page.getByRole('menuitem', { name: 'Settings' });
        this.previousAssessments = this.page.getByRole('menuitem', { name: 'Previous Assessments' });
        this.subscriptionPlans = this.page.getByRole('menuitem', { name: 'Subscription Plans' });
        this.logout = this.page.getByRole('menuitem', { name: 'Log out' });
        this.saveChangesBtn = this.page.getByRole('button', { name: 'Save Changes' });
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
        await this.subscribeNowBtn.click();
    }

    async paymentsPageText() {
        const paymentsText = this.page.getByText('Subscribe to Premium Subscription');
        await expect(paymentsText).toBeVisible();
    }

    async emailPaymentText() {
        const emailPaymentCheck = this.page.locator('.ReadOnlyFormField-title');
        // await expect(emailPaymentCheck).toBeVisible();
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

async cardNumberBtnFill() {
    await cardNumberBtn.fill("");
}

async cardNumberBtnCheck() {
 await expect(cardNumberBtn).toBeVisible();
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
}
//export{ SignInPage };


//SUPRIYA Dashboard_POM

// import { expect } from '@playwright/test';
// export class DashboardPage {
//   constructor(page) {
//     this.page = page;
//     this.dashboardButton = page.getByRole('button', {name : 'Dashboard'}); // Adjust selector as needed
//   }

//   async dashappUrl()
//   {
//     await this.page.goto('/app');
//       // const textapp = page.getByText('(Multi-Algorithm Navigation and Analysis Node)');
//       // await expect(textapp).toHaveText(/(Multi-Algorithm Navigation and Analysis Node)/);
//   }

//   async clickDashboardButton() {
//     await this.dashboardButton.click();
//   }

//   async verifyDashboardPage(Dashurl) {
//     await this.page.waitForURL(Dashurl);
//   }
// }