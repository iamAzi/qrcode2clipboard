#!/usr/bin/env node

const commander = require('commander');
const task = require('./lib/core.js');

commander.version('1.0.2', '-v, --version', 'output the current version');

commander
    .usage('<string> | qr <待生成二维码的链接>')
    .description('使用当前链接生成二维码图片，并复制到剪贴板，可直接粘贴到聊天软件发送。')
    .action((link) => {
        task(link.args[0]);
    });

commander.parse(process.argv)