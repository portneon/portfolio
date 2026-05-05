const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/users/portneon/repos?per_page=100',
  headers: { 'User-Agent': 'Node.js' }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const repos = JSON.parse(data);
    const sortedRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const projects = sortedRepos.map((repo, i) => {
      const id = (i + 1).toString().padStart(2, '0');
      const cat = (repo.language || "PROJECT").toUpperCase();
      const desc = repo.description || "No description provided.";
      const year = new Date(repo.created_at).getFullYear().toString();
      return `  {
    id: "${id}",
    name: "${repo.name}",
    cat: "${cat}",
    desc: "${desc.replace(/"/g, '\\"')}",
    year: "${year}"
  }`;
    });

    const newArray = `${projects.join(',\n')}`;
    console.log(newArray);
  });
}).on('error', (err) => {
  console.error("Error: " + err.message);
});
