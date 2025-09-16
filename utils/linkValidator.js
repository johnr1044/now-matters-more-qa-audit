const axios = require('axios');

async function validateLinks(links) {
    const results = [];
  for (const link of links) {
    if (link.startsWith('https://tel') || link.startsWith('https://www.nowmattersmore.org') || link.startsWith('tel')|| link.startsWith('mailto')) {
        results.push({ url: link, status: 'skipped'});
        continue; 
    }
    try {
      const response = await axios.get(link, { timeout: 15000 });
      if (response.status !== 200) {
        throw new Error(`Link ${link} returned status ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Link ${link} is broken: ${error.message}`);
    }
  }
}

module.exports = { validateLinks };
