import { Random } from 'mockjs';

// 員工和廠商假資料
const users = {
  'employee01@test.com': { role: 'employee', username: '員工一', password: 'e01e01' },
  'employee02@test.com': { role: 'employee', username: '員工二', password: 'e02e02' },
  'company01@test.com': { role: 'company', username: '廠商一', password: 'c01c01' },
  'company02@test.com': { role: 'company', username: '廠商二', password: 'c02c03' },
  'company03@test.com': { role: 'company', username: '廠商三', password: 'c02c03' },
};

// 登入
function login(req) {
  const requestBody = JSON.parse(req.body);
  const { account, password, role } = requestBody;
  const user = users[account];
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
  }
  else {
    const token = Random.guid();
    return {
      success: true,
      message: '登入成功',
      payload: {
        token,
        username: users[account].username,
        role,
      },
    };
  }
}

export default {
  login,
};
