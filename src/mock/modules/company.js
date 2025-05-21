import { getCookie } from '@/utils/cookie.js';
import users from '@/mock/datas/userDatas.js';

const companyList = users.filter((user) => user.role === 'company');

// 取得廠商列表
function getList(req) {
  const token = getCookie('token');

  // 找出符合 token 的 使用者
  const matchedUser = users.find((user) => user.token === token);
  console.log(matchedUser);

  if (matchedUser.role === 'employee') {
    return {
      success: true,
      message: '取得成功',
      payload: companyList,
    };
  } else {
    return {
      success: false,
      message: '身分錯誤，請重新登入',
    };
  }
}

export default {
  getList,
};
