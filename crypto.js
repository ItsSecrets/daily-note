var crypto = require('crypto');
var fs = require('fs');
var path = require('path')

let manifest = new Map();

function getFileMd5(filePath) {
    //从文件创建一个可读流
    var stream = fs.createReadStream(filePath);
    var fsHash = crypto.createHash('md5');
    stream.on('data', function (d) {
        fsHash.update(d);
    });
    stream.on('end', function () {
        var md5 = fsHash.digest('hex');
        console.log("文件的MD5是：%s", md5);
    });
}

let _path = path.resolve("./file/cz")
console.log(_path);
fs.readdir(_path, function (err, files) {
    console.log(files);
    files.forEach(fileName => {
        let fileDir = path.join(files, fileName)
        fs.stat(fileDir, function (err, stats) {
            let isFile = stats.isFile()
            let isDir = stats.isDirectory()
            if (isFile) {
                let md5Obj = {}
                md5Obj.md5 = getFileMd5(path.join(_path, fileName))
                manifest.set()
            }
            if (isDir) {

            }
        })


    });
})