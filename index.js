#!/usr/bin/env node

const commander = require('commander');
const task = require('./lib/core.js');

commander.version('1.0.0', '-v, --version', '当前版本');

commander
    .arguments('<link>')
    .usage('<string> | qr <待生成二维码的链接>')
    .option('-m, --margin <margin>', '二维码白色边距百分比')
    .option('-s, --size <size>', '二维码图片宽度')
    .description('使用当前链接生成二维码图片，并复制到剪贴板，可直接粘贴到聊天软件发送。')
    .action((link, options) => {
        task(link, options);
    });

commander.parse(process.argv)