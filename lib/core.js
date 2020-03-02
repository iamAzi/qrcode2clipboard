const fs = require('fs');
const path = require('path');
const c = require('chalk');
const ora = require('ora');
const { copyImg } = require('img-clipboard');
const QRCode = require('qrcode');

const qrcodeCopy = async (url, option) => {
    const temp = path.resolve(process.env.HOME, '.qrcode-temp.png');
    option = option || {};
    try {
        const spinner = ora('生成中...').start();
        const {
            margin,
            size
        } = option;

        await QRCode.toFile(temp, url, {
            margin: margin || 5,
            width: size || 300,
        });

        let _data = fs.readFileSync(temp);
        await copyImg(Buffer.from(_data, 'base64'));
        fs.unlinkSync(temp);

        spinner.stop();
        console.log(c.green.bold(`\n🙈  ${c.underline.cyan(url)} \n对应二维码已复制到剪贴板，请直接前往聊天工具粘贴`));
      } catch (err) {
        // 处理错误
        console.log(err);
      }
}

module.exports = qrcodeCopy;
