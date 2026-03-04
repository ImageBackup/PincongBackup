const Backup = require("wecenter-backup-helper").default;
(async () => {
    try {
        const options = {
            siteUrl: process.env.SITE_URL,
            userAgent: process.env.UA,
            destDir: ".",
            concurrency: 1
        };
        await Backup(process.env.BACKUP_TYPE, options, Number(process.env.START_ID), Number(process.env.END_ID));
        console.log("搬运成功");
    } catch (e) {
        console.error("搬运失败：", e);
        process.exit(1);
    }
})();
