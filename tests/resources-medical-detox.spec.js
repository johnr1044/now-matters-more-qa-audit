const { test, expect } = require('@playwright/test');
const { validateLinks } = require('../utils/linkValidator');

test('All links on Medical Detox page are valid', async ({ page }) => {
  await page.goto('https://nowmattersmore.org/medical-detox'); 
  const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
  await validateLinks(links);


});