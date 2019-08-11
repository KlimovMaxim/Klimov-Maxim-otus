const fs = require('fs');
const fsPromises = fs.promises;
const p = require('path');


class Tree {
    constructor(dirname){
        console.log(dirname)
        this.dirname = dirname;
        this.files = [];
        this.folders = [];
    }
    
    async run(){
        console.log('run start dirname='+this.dirname)
       await this.tree(this.dirname);
    }

    async tree(ph) {
        console.log('tree start patch='+ph)
        const pth = ph;
        
        const chdir = (err,ar) =>
        {
            for (const dirent of ar) {
               let newPath = p.join(pth, dirent.name);
               if (dirent.isDirectory()) {
                   this.folders.push(newPath);
                   this.tree(newPath);
                  // this.promises.push();
                //  console.log(newPath + ' isDirectory');
               } else if (dirent.isFile()) {
                   this.files.push(newPath);
               //    console.log(newPath + ' isFile');
               }
            }  
        
        }
       
        //return fsPromises.readdir(path,{withFileTypes:true}).then(ar => chdir(path,ar));
        fs.readdir(path,{withFileTypes:true},chdir(err,ar))
    }
}


const t = new Tree('.');
console.log(t.run())
console.log(t.files);
console.log(t.folders);