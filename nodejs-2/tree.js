const fs = require('fs');
const fsPromises = fs.promises;
const p = require('path');
const com = require('commander');

class Tree {
    constructor(dirname){
        console.log(dirname)
        this.dirname = dirname;
        this.files = [];
        this.folders = [];
    }
    
    async run()
    {
        console.log('run start dirname='+this.dirname);
        await this.tree(this.dirname);
        return{
            'files':this.files,
            'folders':this.folders
           };
    }

    async chdir(path,ar)
    {
        const promises = [];
        for (const dirent of ar) {
           let newPath = p.join(path, dirent.name);
           if (dirent.isDirectory()) {
               this.folders.push(newPath);
               promises.push(this.tree(newPath));
            //  console.log(newPath + ' isDirectory');
           } else if (dirent.isFile()) {
               this.files.push(newPath);
           //    console.log(newPath + ' isFile');
           }
        }  
        await Promise.all(promises);//.then(()=>{console.log('chdir:'+path);});   
    }

    async tree(ph) 
    {
        const promises = [];
        //console.log('tree start patch='+ph)
        await fsPromises.readdir(ph,{withFileTypes:true}).then(ar => promises.push(this.chdir(ph,ar)));
        await Promise.all(promises);//.then(()=>{console.log('tree:'+ph);});
    }
}


let userPath;

com
    .version('0.0.1')
    .arguments('path')
    .action((p) => {
            userPath = typeof p === 'string' ? p : null;
        })
    .parse(process.argv);

userPath = userPath || '.';

const t = new Tree(userPath);
t.run().then(
    (ret)=>console.log(ret)
    );
