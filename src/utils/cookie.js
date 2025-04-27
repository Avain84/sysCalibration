// 寫入 cookie寫入 cookie
export function setCookie(name, value, minutes = 60) {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// 取得 cookie 資料
export function getCookie(name) {
  const cookie = document.cookie.split('; ').find((row) => row.startsWith(name + '='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

// 刪除 cookie（設為過期）
export function removeCookie(name) {
  setCookie(name, '', -1); // 設成過期
}
