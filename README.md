Now Matters More QA Audit  

### Description  
This project combines **manual QA auditing** and **automated testing** for the Now Matters More website.  
The automation portion focuses on validating critical links across the site’s **Resources** section to ensure accuracy for users seeking help. During this process, over 15 broken or expired links were discovered, allowing the organization to update connections and improve user trust.  

The **manual QA portion** is documented separately in [`QA-audit.md`](./QA-audit.md), where detailed test cases and observations are stored.  



### Technologies and Techniques Used  

- **Playwright**: End-to-end testing framework used to automate link validation and navigation testing.  
- **JavaScript (Node.js)**: Core programming language for test implementation.
- - **Axios:** Lightweight HTTP client used inside the link validator helper to send requests and confirm that links return a valid status code (200 OK). 
- **VS Code**: Code editor used for creating, editing, and maintaining tests.  
- **Cross-Browser Testing**: Leveraged Playwright to run tests across Chromium, Firefox, and WebKit for compatibility.  
- **Assertions**: Clean, descriptive validations to ensure test outcomes are reliable.  
- **Trace Viewer & Retries**: Configured Playwright to capture execution traces and retry failing tests for better debugging and stability.  



### Before Running the Tests  

**Step 1:**  
Open your code editor (e.g., VS Code).  
Ensure [Node.js](https://nodejs.org/) is installed.  
Clone this repository to your local machine:  

git clone https://github.com/johnr1044/now-matters-more-qa-audit.git
cd now-matters-more-qa-audit

**Step 2:**  
Install required dependencies: 
npm install

**Step 3:**
npx playwright test



### Test Scenarios Covered

- Link Validation
- Extract all anchor (<a>) tags on resource pages.
- Validate each link’s status (e.g., 200 OK).
- Flag broken or expired links.

  ### Project Outcomes

- Identified and reported 15+ broken/expired links within the Resources section.
- Ensured users have access to accurate, up-to-date help resources.
- Helped the organization improve external partnerships and credibility.
- Combined manual + automated QA to maximize test coverage and efficiency.


