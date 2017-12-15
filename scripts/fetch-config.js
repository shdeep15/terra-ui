const https = require('https');
const fs = require('fs');

class FetchConfig {
  static fetch() {
    const configs = FetchConfig.repos().map(item => FetchConfig.gatherJson(item));
    Promise.all(configs).then((stuff) => {
      const configJson = stuff.reduce((prevVal, item) => Object.assign(prevVal, item));

      fs.writeFileSync('./site-example-config/config.json', JSON.stringify(configJson, null, 2));
    });
  }

  static repos() {
    return ['/cerner/terra-framework/site_revamp'];
  }

  static gatherJson(repo) {
    return new Promise((resolve, reject) => {
      const request = https.get(`https://raw.githubusercontent.com${repo}/site-examples.json`, (response) => {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error(`Failed to load page, status code: ${response.statusCode}`));
        }
        // temporary data holder
        const body = [];
        // on every content chunk, push it to the data array
        response.on('data', chunk => body.push(chunk));
        // we are done, resolve promise with those joined chunks
        response.on('end', () => {
          resolve(JSON.parse(body.join('')));
        });
      });

      request.on('error', err => reject(err));
    });
  }
}

FetchConfig.fetch();
