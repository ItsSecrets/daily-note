/**
 * promise
 */
var testPromise = function () {
    const delay = timeout => {
        console.log("delay time: ", timeout);
        return new Promise(resolve => setTimeout(resolve, timeout))
    };
    async function f() {
        await delay(1000);
        await delay(2000);
        await delay(3000);
        return 'done';
    }
    // f().then(v => console.log(v)); // 等待6s后才输出 'done'

    let p = new Promise(function (resolve, reject) {
        console.log("create p!"); //1
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });

    p.then(function (value) {
        console.log("then log： " + value); //3
        return new Promise(function (resolve) {
            setTimeout(() => {
                // console.log("setTimeout");
                resolve(2);
            }, 1000);
        })

    }).then(function (value) {
        console.log("then log： " + value); //3
        return new Promise(function (resolve) {
            setTimeout(() => {
                // console.log("setTimeout");
                resolve(3);
            }, 1000);
        })
    }).then(function (value) {
        console.log("then log： " + value); //3

    });
    console.log("end p!"); //2
}
testPromise();

/**
 * === === === === === === === === == JavaScript 执行机制 === === === === === === === ===
 * https: //juejin.im/post/59e85eebf265da430d571f89#heading-2 参考这里。
 * promise优选settimeout执行
 */
var jsRuntime = function () {
    console.log('1');
    setTimeout(function () {
        console.log('2');
        process.nextTick(function () {
            console.log('3');
        })
        new Promise(function (resolve) {
            console.log('4');
            resolve();
        }).then(function () {
            console.log('5')
        })
    })
    process.nextTick(function () {
        console.log('6');
    })
    new Promise(function (resolve) {
        console.log('7');
        resolve();
    }).then(function () {
        console.log('8')
    })

    setTimeout(function () {
        console.log('9');
        process.nextTick(function () {
            console.log('10');
        })
        new Promise(function (resolve) {
            console.log('11');
            resolve();
        }).then(function () {
            console.log('12')
        })
    })
}
// jsRuntime();


/**
 * 数组操作
 *  1. Array.concat()方法返回一个new array
 *  2. 如果new array 的item是对象，则new array与原来的array指向的同一个引用
 *  3. 如果new array的item是基本类型，则new array会持有自己的值类型
 */
var arrConcatTest = function () {
    let arr1 = [{
        a: 1,
        b: 1
    }, {
        a: 1,
        b: 1
    }, {
        a: 1,
        b: 1
    }, 100];

    let arr2 = arr1.concat();
    arr2[1].a = 100; //修改对象item
    arr2[3] = 1; //修改基本类型item

    console.log("arr1========", arr1);
    console.log("arr2========", arr2);
}
arrConcatTest();