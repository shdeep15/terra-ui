var https = require('https');
var fs = require('fs');

// var file = fs.createWriteStream("file.jpg");
jsonConfig = {};
var request = https.get("https://raw.githubusercontent.com/cerner/terra-framework/site_revamp/site-examples.json", function(response) {
  // console.log(response)
  response.on('data', (d) => {
    configFragment = JSON.parse(d)
    // console.log(Object.keys(configFragment)[0])
    // jsonConfig[Object.keys(configFragment)[0]] =
    jsonConfig = Object.assign(jsonConfig, configFragment);
    // json
    // jsonConfig[](JSON.parse(d));
    // jsonConfig.push(JSON.parse(d));
    fs.writeFileSync('./site-example-config/config.json', JSON.stringify(jsonConfig, null, 2));
    // console.log(jsonConfig)
    // process.stdout.write(jsonConfig);
  });
  // response.pipe(file);
});

// fs.writeFileSync('./site-example-config/config.json', JSON.stringify(jsonConfig, null, 2));
// response.pipe(file);
