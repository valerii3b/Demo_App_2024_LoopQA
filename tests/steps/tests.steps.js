const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

let page, browser;

setDefaultTimeout(70 * 1000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

Given("Login to Demo App.", async function () {
  await page.goto("https://animated-gingersnap-8cf7f2.netlify.app");
  await page.fill('input[id="username"]', "admin");
  await page.fill('input[id="password"]', "password123");
  await page.click('button[type="submit"]');
});

When("Navigate to {string}", async function (string) {
  if (string === "Web Application") {
    const webApplication = await page.locator(
      '//h2[contains(text(), "Web Application")]'
    );
    await expect(webApplication).toContainText(string);
    await webApplication.click();
  } else {
    const mobileApplication = await page.locator(
      '//h2[contains(text(), "Mobile Application")]'
    );
    await expect(mobileApplication).toContainText(string);
    await mobileApplication.click();
  }
});

Then(
  "Verify {string} is in the {string} column.",
  async function (string, string2) {
    const toDoColumn = await page.locator('div:has(h2:has-text("To Do"))');
    const inProgressColumn = await page.locator(
      'div:has(h2:has-text("In Progress"))'
    );
    const doneColumn = await page.locator('div:has(h2:has-text("Done"))');

    if (string === "Implement user authentication" && string2 === "To Do") {
      const tasImplimentkChildLocator = await toDoColumn.locator(
        'h3:has-text("Implement user authentication")'
      );
      await expect(tasImplimentkChildLocator).toBeVisible();
    } else if (string === "Fix navigation bug" && string2 === "To Do") {
      const taskFixNavigationChildLocator = await toDoColumn.locator(
        'h3:has-text("Fix navigation bug")'
      );
      await expect(taskFixNavigationChildLocator).toBeVisible();
    } else if (
      string === "Design system updates" &&
      string2 === "In Progress"
    ) {
      const taskDesignSystemUpdateChildLocator = await inProgressColumn.locator(
        'h3:has-text("Design system updates")'
      );
      await expect(taskDesignSystemUpdateChildLocator).toBeVisible();
    } else if (string === "Push notification system" && string2 === "To Do") {
      const taskPushNotificationSystemChildLocator = await toDoColumn.locator(
        'h3:has-text("Push notification system")'
      );
      await expect(taskPushNotificationSystemChildLocator).toBeVisible();
    } else if (string === "Offline mode" && string2 === "In Progress") {
      const taskOfflineModeChildLocator = await inProgressColumn.locator(
        'h3:has-text("Offline mode")'
      );
      await expect(taskOfflineModeChildLocator).toBeVisible();
    } else if (string === "App icon design" && string2 === "Done") {
      const taskAppIconDesignChildLocator = await doneColumn.locator(
        'h3:has-text("App icon design")'
      );
      await expect(taskAppIconDesignChildLocator).toBeVisible();
    }
  }
);

Then("Confirm tags: {string}", async function (string) {
  if (string === "Bug") {
    const taskBugTag = await page.locator('h3:has-text("Fix navigation bug")');
    const bugTag = await taskBugTag
      .locator("..")
      .locator('span.bg-red-100:has-text("Bug")');
    await expect(bugTag).toBeVisible();
  } else if (string === "Feature") {
    const taskFeatureTag = await page.locator(
      'h3:has-text("Push notification system")'
    );
    const featureTag = await taskFeatureTag
      .locator("..")
      .locator('span.bg-blue-100:has-text("Feature")');
    await expect(featureTag).toBeVisible();
  } else {
    const mobilePage = await page.locator('h3:has-text("App icon design")');

    if (await mobilePage.isVisible()) {
      const taskMobileDesignTag = await page.locator(
        'h3:has-text("App icon design")'
      );
      const designMobileTag = await taskMobileDesignTag
        .locator("..")
        .locator('span.bg-purple-100:has-text("Design")');
      await expect(designMobileTag).toBeVisible();
    } else {
      const taskWebDesignTag = await page.locator(
        'h3:has-text("Design system updates")'
      );
      const designWebTag = await taskWebDesignTag
        .locator("..")
        .locator('span.bg-purple-100:has-text("Design")');
      await expect(designWebTag).toBeVisible();
    }
  }
});

Then("Confirm tags: {string} {string}", async function (string, string2) {
  const task = await page.locator(
    'h3:has-text("Implement user authentication")'
  );

  const featureTag = await task
    .locator("..")
    .locator('span.bg-blue-100:has-text("Feature")');
  await expect(featureTag).toBeVisible();

  const highPriorityTag = await task
    .locator("..")
    .locator('span.bg-orange-100:has-text("High Priority")');
  await expect(highPriorityTag).toBeVisible();
});

Then("Confirm tags: {string} & {string}", async function (string, string2) {
  const taskUnderMobile = await page.locator('h3:has-text("Offline mode")');

  const featureTag = await taskUnderMobile
    .locator("..")
    .locator('span.bg-blue-100:has-text("Feature")');
  await expect(featureTag).toBeVisible();

  const highPriorityTag = await taskUnderMobile
    .locator("..")
    .locator('span.bg-orange-100:has-text("High Priority")');
  await expect(highPriorityTag).toBeVisible();
});

After(async function () {
  browser.close();
});
