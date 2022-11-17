var fs = require('fs');
var path = require('path');
var util = require('util');

var template = fs.readFileSync(path.join(__dirname, 'index.template.js'), 'utf8');

var html = fs.readFileSync(path.join(__dirname, '../dist/sr/index.html'), 'utf8');

var lambda = util.format(template, html);

if (!fs.existsSync(path.join(__dirname, '../dist/lambda'))) {
  fs.mkdirSync(path.join(__dirname, '../dist/lambda'));
}

var lambda_path = path.join(__dirname, '../dist/lambda/index.js');
fs.writeFileSync(path.join(__dirname, '../dist/lambda/index.js'), lambda);

(async () => {
  var zipOutput = fs.createWriteStream(path.join(__dirname, '../dist/lambda/lambda.zip'));
  var archive = archiver('zip', {
    zlib: {level: 9}
  });
  archive.pipe(zipOutput);
  archive.glob(lambda_path);
  await archive.finalize();
})();
