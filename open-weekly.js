const { exec, execSync } = require('child_process');

const result = execSync('gh api /repos/bpmn-io/internal-docs/issues?state=open', { encoding: 'utf-8' });
const issues = JSON.parse(result);
const weeklyIssue = issues.find(({ title }) => /^W\d/.test(title));

exec(`open ${weeklyIssue.html_url}`);
