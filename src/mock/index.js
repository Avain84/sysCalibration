import Mock from 'mockjs';
import user from '@/mock/modules/user.js';
import company from './modules/company';

// 取出 mock 函式
const { mock } = Mock;

// 設定 mock 資料 mock(url, get/post, response data);
mock('/api/user/login', 'post', user.login);
mock('/api/user/getProfile', 'post', user.getProfile);

mock('/api/company/getList', 'post', company.getList);
