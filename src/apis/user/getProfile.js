import request from '@/utils/request';

export default function getProfile(params = {}) {
  return request({
    url: '/user/getProfile',
    method: 'post',
    token: true,
    data: params,
  });
}