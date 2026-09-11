import { ToastContainer } from 'react-toastify';

export default function ToastContainerConfig() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastClassName="arch-toast !bg-[#141413] !text-[#F8F7F4] !border-l-4 !border-[#B8976C] !rounded-none !font-sans !shadow-2xl"
    />
  );
}
