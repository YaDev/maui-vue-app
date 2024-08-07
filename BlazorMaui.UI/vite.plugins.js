import * as fs from "fs";
import * as path from "path";


export const addFrameworkPlugin = (isProd) => { 
    return {
        name: "Index HTML Updater",
        transform(code, id) {
            if (! /index[.]html$/.test(id)) {
                return;
            }
            let updatedCode = code;
            if(isProd){ 
                updatedCode =  code.replace(/[<]![-]{2}.*blazor[.]webview.*[>]/gm, `<script src="_framework/blazor.webview.js" autostart="false"></script>`);
            }
            return updatedCode;
        }
    };
};

const copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
	  if(!fs.existsSync(dest)) {
	  	fs.mkdirSync(dest);
	  }
	  fs.readdirSync(src).forEach((childItemName) => {
            if(childItemName != "favicon.ico"){
            copyRecursiveSync(path.join(src, childItemName),
						  path.join(dest, childItemName));
            }
	  });
    } else {
	  fs.copyFileSync(src, dest);
    }
};


export const copyAssetsPlugin = (dest) => ({
    name: "Copy assets",
    enforce: "post",
    closeBundle() {
        copyRecursiveSync("./assets", `${dest}/assets`);
    }
}
);