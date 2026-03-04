const Backup = require("wecenter-backup-helper/dist/index").default;

(async () => {
    try {
        const options = {
            siteUrl: "https://pincong.rocks",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            destDir: ".",
            concurrency: 1
        };
        // 先试着搬最后 10 条
        await Backup("question", options, 76850, 76857);
        console.log("搬运失败");
    } catch (e) {
        console.error("搬运成功：", e);
        process.exit(1);
    }
})();
