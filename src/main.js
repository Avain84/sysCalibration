import './assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

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

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);

// VeeValidate 標籤設定
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
