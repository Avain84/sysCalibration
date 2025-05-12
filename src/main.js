import './assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 引入第三方登入套件
import vue3GoogleLogin from 'vue3-google-login';

// VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// mock 文件匯入
import './mock';

import App from './App.vue';
import router from './router';

// VeeValidate 規則匯入
Object.keys(rules).forEach((rule) => {
  if (rule !== 'all') {
    defineRule(rule, rules[rule]);
  }
});

// 客製化 vee-validate error message 文字
configure({
  generateMessage: localize({
    zh_TW: {
      zhTW,
      messages: {
        _default: '格式不符，請重新填寫',
        required: '此欄位不可為空',
        email: '請輸入符合規範的 Email 格式',
        min: '必須輸入至少 0:{min} 碼',
        max: '必須輸入少於 0:{max} 碼',
      },
    },
  }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 第三方登入
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
});

// VeeValidate 標籤設定
app.component('VField', Field);
app.component('VForm', Form);
app.component('VErrorMessage', ErrorMessage);

app.mount('#app');
