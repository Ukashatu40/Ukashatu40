import fs from 'node:fs/promises';

const username = process.env.GITHUB_USERNAME || 'Ukashatu40';
const token = process.env.GITHUB_TOKEN;

if (!token) throw new Error('GITHUB_TOKEN is required.');

const headers = {
  accept: 'application/vnd.github+json',
  authorization: `Bearer ${token}`,
  'X-GitHub-Api-Version': '2026-03-10',
};

async function github(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { ...headers, ...(options.headers || {}) } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

const profile = await github(`https://api.github.com/users/${encodeURIComponent(username)}`);

const repos = [];
for (let page = 1; page <= 10; page += 1) {
  const batch = await github(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}&type=owner&sort=updated`);
  repos.push(...batch);
  if (batch.length < 100) break;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 250" role="img" aria-labelledby="title desc">
<title id="title">GitHub activity summary</title>
<desc id="desc">Automatically refreshed GitHub profile statistics for ${username}.</desc>
<rect width="1200" height="250" rx="20" fill="#0b1118"/>
<g font-family="ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<text x="60" y="54" fill="#64748b" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="15" letter-spacing="2">GITHUB / PROFILE SIGNAL</text>
<g fill="#0f172a" stroke="#334155" stroke-width="2">
<rect x="60" y="82" width="240" height="116" rx="16"/><rect x="330" y="82" width="240" height="116" rx="16"/><rect x="600" y="82" width="240" height="116" rx="16"/><rect x="870" y="82" width="270" height="116" rx="16"/>
</g>
<g text-anchor="middle">
<text x="180" y="126" fill="#2dd4bf" font-size="39" font-weight="800">${profile.public_repos}</text><text x="180" y="159" fill="#cbd5e1" font-size="16">public repositories</text>
<text x="450" y="126" fill="#60a5fa" font-size="39" font-weight="800">${profile.followers}</text><text x="450" y="159" fill="#cbd5e1" font-size="16">followers</text>
<text x="720" y="126" fill="#f59e0b" font-size="39" font-weight="800">${profile.following}</text><text x="720" y="159" fill="#cbd5e1" font-size="16">following</text>
<text x="1005" y="124" fill="#f8fafc" font-size="26" font-weight="700">Activity is evidence</text><text x="1005" y="157" fill="#94a3b8" font-size="14">refreshed from GitHub API</text>
</g></g></svg>`;

await fs.writeFile('assets/github-stats.svg', svg, 'utf8');
