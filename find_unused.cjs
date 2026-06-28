const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
const jsFiles = allFiles.filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

const unused = [];

allFiles.forEach(file => {
  const basename = path.basename(file);
  // Don't check main entry points
  if (['main.jsx', 'App.jsx', 'index.css', 'index.html'].includes(basename)) return;
  
  const ext = path.extname(basename);
  const nameWithoutExt = path.basename(basename, ext);
  
  let searchTerms = [basename];
  if (['.js', '.jsx'].includes(ext)) {
    searchTerms.push(nameWithoutExt);
  }
  if (basename === 'index.jsx') {
    const parentDir = path.basename(path.dirname(file));
    searchTerms.push(parentDir);
  }

  let usedInOtherFiles = false;
  for (const jsFile of jsFiles) {
    if (jsFile === file) continue;
    const content = fs.readFileSync(jsFile, 'utf8');
    if (searchTerms.some(term => content.includes(term))) {
      usedInOtherFiles = true;
      break;
    }
  }
  if (!usedInOtherFiles) {
     unused.push(file);
  }
});

console.log("Empty files:");
allFiles.forEach(file => {
  if (fs.statSync(file).size === 0) {
    console.log(file);
  }
});

console.log("\nUnused files:");
console.log(unused.map(f => f.replace(srcDir + '/', '')).join('\n'));
