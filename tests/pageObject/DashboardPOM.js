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
}
//export{ SignInPage };
