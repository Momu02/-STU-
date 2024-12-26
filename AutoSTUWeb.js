// ==UserScript==
// @name         AutoSTUWeb
// @namespace    https://github.com/Momu02/AutoSTUWeb
// @version      1.0
// @description  Automatically fills in the username and password and submits the data on STU CAS web.
// @author       Momu02
// @run-at       document-start
// @match        https://sso.stu.edu.cn*
// @grant        none
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';

    // 确保 DOM 元素已加载完毕
    window.addEventListener('load', function() {
        // 填写账号和密码
        const username = ''; // 替换为你的用户名
        const password = ''; // 替换为你的密码

        // 查找输入框和按钮
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginButton = document.getElementById('login');

        if (usernameInput && passwordInput && loginButton) {
            // 填写账号和密码
            usernameInput.value = username;
            passwordInput.value = password;

            // 自动点击登录按钮
            loginButton.click();
        }
    });
})();
