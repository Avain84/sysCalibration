import axios from 'axios';

const baseURL = '/api';

const instance = axios.create({
  baseURL,
  timeout: 100000,
});

// 統一攔截錯誤統一攔截錯誤
instance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (!res.success) {
      // 主動拋出錯誤，自動進 catch
      return Promise.reject(new Error(res?.message || '發生非預期錯誤'));
    }

    // success 就正常回傳資料
    return res;
  },
  (error) => {
    // HTTP錯誤
    return Promise.reject(error);
  }
);

export default instance;
