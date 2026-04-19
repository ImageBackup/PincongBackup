const Backup = require("wecenter-backup-helper").default;

(async () => {
    try {
        const options = {
            siteUrl: "https://pincong.rocks",
            userAgent: "Mozilla/5.0",
            destDir: ".",
            concurrency: 1
        };
        // 范围稍微设小一点，确保能跑通
        await Backup("question", options, 76850, 76857);
        console.log("搬运成功。");
    } catch (e) {
        console.error("搬运失败：", e);
        process.exit(1);
    }
})();
