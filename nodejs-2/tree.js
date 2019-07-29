const fs = require('fs')
const fsP = fs.promises;
const pth = require('path')
const files = [];
const folders = [];

const chdir = (p,ar) =>
{
 for (const dirent of ar) {
    let newPath = pth.join(p, dirent.name);
    if (dirent.isDirectory()) {
        folders.push(newPath)
        console.log(folders);
    } else if (dirent.isFile()) {
        files.push(newPath)
        console.log(files);
    }
 }   
}


const tree = (path) => {
    fsP.readdir(path,{withFileTypes:true}).then(a => chdir(path,a)) 
}

tree('.');
console.log(files);
console.log(folders);