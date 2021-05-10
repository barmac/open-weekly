#!/usr/bin/env node

const { execSync } = require('child_process');
const open = require('open');

const result = execSync('gh api /repos/bpmn-io/internal-docs/issues?state=open', { encoding: 'utf-8' });
const issues = JSON.parse(result);
const weeklyIssue = issues.find(({ title }) => /^W\d/.test(title));

open(weeklyIssue.html_url);
