var fs = require("fs");
var path = require("path");
var request = require("request");
var co = require("co");
var async = require("async")

let config = {
    "assets": {
        "man/buhua.mp3": {
            "md5": "a80a901f934aabdaa1443af418b855ce"
        },
        "man/chi.mp3": {
            "md5": "5980ea22930e9d54c2e94ce17cfc05e4"
        },
        "man/gang.mp3": {
            "md5": "af5deed967fe27667b0346aa2a54fdb3"
        },
        "man/hu.mp3": {
            "md5": "0d337b2cec08b53e66154f380de407bb"
        },
        "man/mjt1_1.mp3": {
            "md5": "184942db28201bfda3c48876365a9b80"
        },
        "man/mjt1_2.mp3": {
            "md5": "551555fe60866989da939c016e9f9526"
        },
        "man/mjt1_3.mp3": {
            "md5": "d0e3a09a790c96fc1d02ab3c2db7a897"
        },
        "man/mjt1_4.mp3": {
            "md5": "60b1a4e45e2e1529497e53424008215d"
        },
        "man/mjt1_5.mp3": {
            "md5": "b75ef78405f9b538df6f286d627b86ae"
        },
        "man/mjt1_6.mp3": {
            "md5": "2cf27d0e790baf1044f8370e600268ea"
        },
        "man/mjt1_7.mp3": {
            "md5": "3f984bd72e837cd754e875a6e5bbef9b"
        },
        "man/mjt1_8.mp3": {
            "md5": "97d6e8ad401d2a659d85c8260ce5eb7c"
        },
        "man/mjt1_9.mp3": {
            "md5": "d298cf211419b7f88785bcb53ac7b34f"
        },
        "man/mjt2_1.mp3": {
            "md5": "707a552347745531bd67e7a7f2d08035"
        },
        "man/mjt2_2.mp3": {
            "md5": "7ed2d15c2e44470f66fd21622e4499c6"
        },
        "man/mjt2_3.mp3": {
            "md5": "e27556a6d65b5d30b881f90b2eba0859"
        },
        "man/mjt2_4.mp3": {
            "md5": "0b4db2c6cb2b64ed62c281d767cc3a0e"
        },
        "man/mjt2_5.mp3": {
            "md5": "5aa222acafb8b94f344824e7a262da41"
        },
        "man/mjt2_6.mp3": {
            "md5": "faf6239623f5f396c44f836db61a4ca9"
        },
        "man/mjt2_7.mp3": {
            "md5": "8b1c861fa895217965955a1e7b00b9a1"
        },
        "man/mjt2_8.mp3": {
            "md5": "bd25d8677844f90f99397b802ddebecb"
        },
        "man/mjt2_9.mp3": {
            "md5": "14277e831c92d2b3b063baaafa633ee7"
        },
        "man/mjt3_1.mp3": {
            "md5": "0c9f5818a288d0d4561119f66e43b122"
        },
        "man/mjt3_2.mp3": {
            "md5": "0223f5ac26d00ae71bf060fdcbd803bf"
        },
        "man/mjt3_3.mp3": {
            "md5": "03e367fab3edb256d3a48b9645c8cfec"
        },
        "man/mjt3_4.mp3": {
            "md5": "3001cb349c74f5d48d91de57299b43e2"
        },
        "man/mjt3_5.mp3": {
            "md5": "2078d3cfdb4f55a5c41fdfab7233ff2d"
        },
        "man/mjt3_6.mp3": {
            "md5": "d6ecabbc320c31c94148a534b9adebfc"
        },
        "man/mjt3_7.mp3": {
            "md5": "a4021d846743d677fc25c80dfabd2fb6"
        },
        "man/mjt3_8.mp3": {
            "md5": "96ba56df7658454625e8ac8372fe0fbd"
        },
        "man/mjt3_9.mp3": {
            "md5": "98cca8f0df91010aae1f8d3ecc8bd140"
        },
        "man/mjt4_1.mp3": {
            "md5": "169438005f64aa79dc4cca2bb0908ba1"
        },
        "man/mjt4_2.mp3": {
            "md5": "09d7c3aeef0147fd6fc7e14b22a49843"
        },
        "man/mjt4_3.mp3": {
            "md5": "fe75f6ee5b8cc85a6fd16de247a1d588"
        },
        "man/mjt4_4.mp3": {
            "md5": "7c4dcbb6b04c1f5838f58d2378c0fd33"
        },
        "man/mjt4_5.mp3": {
            "md5": "20ae45a67802a1d778522605dc97557d"
        },
        "man/mjt4_6.mp3": {
            "md5": "2a9a88c1e03f077703b740441b03aaca"
        },
        "man/mjt4_7.mp3": {
            "md5": "aa71c7296ff630deae39fbf458e5b147"
        },
        "man/peng.mp3": {
            "md5": "6cb00588016e41cf459a8491d93a3bba"
        },
        "man/zimo.mp3": {
            "md5": "72882a8a83fc1d0e1d69986509cebc85"
        },
        "woman/buhua.mp3": {
            "md5": "2e08b79d2af02566207ad6bb0fa2e94f"
        },
        "woman/chi.mp3": {
            "md5": "f3bf8970f34ede2a484f37ec49627e08"
        },
        "woman/gang.mp3": {
            "md5": "19d0657c18c35b2ae4cbd555098e6700"
        },
        "woman/hu.mp3": {
            "md5": "4f175f09ab98bf6c620a7407d0a53504"
        },
        "woman/mjt1_1.mp3": {
            "md5": "74eeb648d6a3cfd2661b5bc028c5f16b"
        },
        "woman/mjt1_2.mp3": {
            "md5": "bfa93c857ffc31c6d4faca47475a8945"
        },
        "woman/mjt1_3.mp3": {
            "md5": "51a4534a7c15a9517cac0b55dfab9aa5"
        },
        "woman/mjt1_4.mp3": {
            "md5": "7e9b8a5567feb5576f9309da230f281f"
        },
        "woman/mjt1_5.mp3": {
            "md5": "35f26456b337b595344fd477eb331157"
        },
        "woman/mjt1_6.mp3": {
            "md5": "df81ae0b9d79f7d5d1a0437a173c898d"
        },
        "woman/mjt1_7.mp3": {
            "md5": "9336b2fdca98d48261196b0076de3c14"
        },
        "woman/mjt1_8.mp3": {
            "md5": "67d13ec0e4a58d9ab0177d6201b11a77"
        },
        "woman/mjt1_9.mp3": {
            "md5": "7df01fcf9d63ff164553f7b88366df63"
        },
        "woman/mjt2_1.mp3": {
            "md5": "73fcf625a85436ad796f83932a368378"
        },
        "woman/mjt2_2.mp3": {
            "md5": "ce3419ce8036aed7154aa0b9d3efcbf8"
        },
        "woman/mjt2_3.mp3": {
            "md5": "f14534627a9707d5c0f6a041c107d17c"
        },
        "woman/mjt2_4.mp3": {
            "md5": "e6cf742550a3753ab201bc99c09af5ab"
        },
        "woman/mjt2_5.mp3": {
            "md5": "d22f36b40906dd695cdcfcda8cedf64b"
        },
        "woman/mjt2_6.mp3": {
            "md5": "af01ad1c354c01ff64988ea47b830cda"
        },
        "woman/mjt2_7.mp3": {
            "md5": "27f5b6d137e31d4fff5fae52c9cf5029"
        },
        "woman/mjt2_8.mp3": {
            "md5": "cfee028940e4227112e14d75f66c4af2"
        },
        "woman/mjt2_9.mp3": {
            "md5": "b426241831174155b5431c7845a4536f"
        },
        "woman/mjt3_1.mp3": {
            "md5": "2d8fedd4732fb25d40ae8b0fa14197a0"
        },
        "woman/mjt3_2.mp3": {
            "md5": "ae28647f8aca678bc94c806709dbaca4"
        },
        "woman/mjt3_3.mp3": {
            "md5": "43b89a380eac581130e56cf278b21ad9"
        },
        "woman/mjt3_4.mp3": {
            "md5": "d02eb4fac9db37a83708d5466bbfb26a"
        },
        "woman/mjt3_5.mp3": {
            "md5": "9cd1320110e39e833d101d9ca46a00e2"
        },
        "woman/mjt3_6.mp3": {
            "md5": "c40d37fa6636ffeab40ec1346f35fdcc"
        },
        "woman/mjt3_7.mp3": {
            "md5": "0fc92da8bd33093eb59f381307846507"
        },
        "woman/mjt3_8.mp3": {
            "md5": "322a97a2259455db856fab8e8bdd8856"
        },
        "woman/mjt3_9.mp3": {
            "md5": "800f2063050de8157e4f85370dd60843"
        },
        "woman/mjt4_1.mp3": {
            "md5": "0e3b4aff2299ee9bead78c9ebca61953"
        },
        "woman/mjt4_2.mp3": {
            "md5": "329448e475bdcce8fae903a14847e3b0"
        },
        "woman/mjt4_3.mp3": {
            "md5": "3c9d0ee966d2de1f2163f3cd5ed82eb9"
        },
        "woman/mjt4_4.mp3": {
            "md5": "d46dbb92d521ad149295a48fd073d4e7"
        },
        "woman/mjt4_5.mp3": {
            "md5": "0c100aed297658c176340e09e827ef0a"
        },
        "woman/mjt4_6.mp3": {
            "md5": "a159cba0edd5889f47193212ddd09bce"
        },
        "woman/mjt4_7.mp3": {
            "md5": "00ed8067f1c4f3fb3dc6f02b3efd8259"
        },
        "woman/peng.mp3": {
            "md5": "32b9d04a909e50f12844163c3f74b16a"
        },
        "woman/zimo.mp3": {
            "md5": "2b8c0d3b4016d8fafadf2c9aadb6f513"
        }
    }
}

let city = [
    // "pt", //no
    // "xz",
    // "nj",
    // "yz",
    // "sz",
    // "cz",
    // "wx",
    // "ha",
    // "yc",
    "xh",
    "sy",
    "jy",
    "pz",
    "df",
    "jh",
    "zj",
    "tx",
    "dt",
    "shuyang"
]
let downloadUrl = "http://update.xlsxmj.cn/client/common_mahjong_jiangsu/sound/"
//创建文件夹目录
var dirPath = path.join(__dirname, "file");

function makeDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        console.log("文件夹创建成功");
    } else {
        // console.log("文件夹已存在");
    }
}

function downFile(url, fileName, curPath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("++++++++" + url);
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let stream = fs.createWriteStream(path.join(curPath, fileName));
                    request(url).pipe(stream).on("close", function (err) {
                        resolve("下载成功");
                    });
                } else {
                    if (error) {
                        console.log(fileName, "  ", curPath, "  ", url)
                        reject(error);
                    } else {
                        reject(new Error("下载失败，返回状态码不是200，状态码：" + response.statusCode));
                    }
                }
            });
        }, 2000);
    })
}

async function download(cityName, cityPath) {
    for (const key in config.assets) {
        if (config.assets.hasOwnProperty(key)) {
            const element = config.assets[key];
            var url = downloadUrl + cityName + '/' + key;
            if (key[0] == 'm') {
                let curPath = path.join(cityPath, 'man')
                makeDir(path.join(cityPath, 'man'))
                await downFile(url, key.slice(3), curPath)
                console.log(url);
            } else if (key[0] == 'w') {
                let curPath = path.join(cityPath, 'woman')
                makeDir(path.join(cityPath, 'woman'))
                await downFile(url, key.slice(6), curPath)
                console.log(url);
            }
        }
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}
// download("xz", path.join(dirPath, "xz"))

async function startDownload(params) {
    for (let index = 0; index < city.length; index++) {
        const cityName = city[index];
        let cityPath = path.join(dirPath, cityName)
        makeDir(cityPath)
        console.log("++++++++++++++++++" + cityName);
        await download(cityName, cityPath)
    }
}

startDownload()







function pro() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log(new Date().getSeconds()))
        }, 1000)
    })
}
async function fot() {
    for (let i = 0; i < 5; i++) {
        await pro()
        console.log('i', i)
    }
}
// fot()