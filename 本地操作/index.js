let path = require("path");
let fs = require("fs");
let childProcess = require("child_process");
// node --inspect  index.js
toPath();


function toPath() {
    // 输出WebStormProject
    let basePath = "D:\\lzh\\webstromproject";

    fs.readdir(basePath, function (err, menu) {
        menu = menu.filter(item => !/^learn*/gi.test(item));
        menu = menu.filter(item => !/^CommonLibrary$/g.test(item));
        menu.forEach(function (item) {
            let path = basePath + "/" + item;
            fs.stat(path, function (err, info) {
                if (info.isDirectory()) {
                    childProcess.exec("git status", {cwd: path}, function (err, info) {
                        if (err) {
                            if(isNoGit(err.message)){
                                return;
                            }
                            console.log("");
                            console.log(item + "--------------------------------------------------------------------");
                            console.log(err.message);
                            return;
                        }
                        if (isNoGit(info)) {
                            return;
                        }
                        if (isSync(info)) {
                            return;
                        }
                        console.log("");
                        console.log(item + "--------------------------------------------------------------");
                        console.log(info);
                    });
                }
            })
        })
    });
}

function isSync(str) {
    // On branch master
    // Your branch is up to date with 'origin/master'.
    // nothing to commit, working tree clean
    return str.indexOf("On branch master") !== -1 &&
        str.indexOf("Your branch is up to date with 'origin/master'.") !== -1 &&
        str.indexOf("nothing to commit, working tree clean") !== -1;
}

function isNoGit(str) {
    // Command failed: git status
    // fatal: not a git repository (or any of the parent directories): .git
    return str.indexOf("not a git repository") !== -1;
}