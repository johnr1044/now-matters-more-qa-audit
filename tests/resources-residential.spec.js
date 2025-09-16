const { test, expect } = require('@playwright/test');
const { validateLinks } = require('../utils/linkValidator');


test('All links on residential page are valid', async ({ page }) => {
  await page.goto('https://nowmattersmore.org/residential'); 
  const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
  await validateLinks(links);

 
});