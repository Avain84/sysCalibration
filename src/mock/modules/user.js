import { Random } from 'mockjs';
import { getCookie } from '@/utils/cookie.js';
import users from '@/mock/datas/userDatas.js';

// 登入
function login(req) {
  const requestBody = JSON.parse(req.body);
  const { account, password, role } = requestBody;
  const user = users.find((user) => user.account === account);
  const passwordCorrect = user && user.password === password;
  const roleCorrect = passwordCorrect && user.role === role;

  if (!passwordCorrect) {
    return {
      success: false,
      message: '帳號或密碼錯誤，請重新輸入',
    };
  } else if (!roleCorrect) {
    return {
      success: false,
      message: '身分錯誤，請到對應身分頁面登入',
    };
  } else {
    const token = Random.guid();
    user.token = token;

    return {
      success: true,
      message: '登入成功',
      payload: {
        token,
        // username: users[account].username,
        // role,
      },
    };
  }
}

function getProfile(req) {
  const token = getCookie('token');

  // 找出符合 token 的 使用者
  const matchedUser = users.find((user) => user.token === token);

  if (matchedUser) {
    const { account, username, role } = matchedUser;
    return {
      success: true,
      message: '驗證成功',
      payload: {
        account,
        username,
        role,
      },
    };
  } else {
    return {
      success: false,
      message: '驗證失敗，請重新登入',
    };
  }
}

export default {
  login,
  getProfile,
};
