import request from '@/utils/request';

export default function getList(params = {}) {
  return request({
    url: '/company/getList',
    method: 'post',
    token: true,
    data: params,
  });
}
