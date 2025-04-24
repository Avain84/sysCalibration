import Swal from 'sweetalert2';

export default function useAlert() {
  // 通知 Toast
  const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const showToast = (message, icon = 'success') => {
    toast.fire({
      icon,
      title: message,
    });
  };

  // 成功樣式
  const success = (title, text = '') => {
    Swal.fire({
      icon: 'success',
      title,
      text,
    });
  };

  // 失敗樣式
  const error = (title, text = '') => {
    Swal.fire({
      icon: 'error',
      title,
      text,
    });
  };

  // 訊息樣式
  const info = (title, text = '') => {
    Swal.fire({
      icon: 'info',
      title,
      text,
    });
  };

  // 警示樣式
  const warning = (title, text = '') => {
    Swal.fire({
      icon: 'warning',
      title,
      text,
    });
  };

  // 互動 Modal
  const confirm = (title, onConfirm, text = '此操作無法復原！') => {
    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '確認',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed && typeof onConfirm === 'function') {
        onConfirm();
      }
    });
  };

  return {
    showToast,
    success,
    error,
    info,
    warning,
    confirm,
  };
}
