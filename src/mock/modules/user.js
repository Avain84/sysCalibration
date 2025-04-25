import { Random } from 'mockjs';

// 登入
function login(req) {
  console.log(req);

  return {
    code: 200,
    data: {
      username: Random.cname(),
      token: Random.guid(),
      message: 'success',
    },
  };
}

export default {
  login,
};
