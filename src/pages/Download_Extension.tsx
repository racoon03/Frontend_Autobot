import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBolt,
  faLock,
  faToolbox,
  faArrowTrendUp,
  faEnvelope,
  faScrewdriverWrench,
  faDownload,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";
// import { style } from "framer-motion/client"; // This import seems unused and can be removed if not needed elsewhere

function ExtensionPage() {
    return (
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans"
        style={{ backgroundImage: "url('/src/assets/extension_bg.jpg')" }} // 🖼 Đổi link nếu cần
      >
        {/* 🔳 Overlay trắng nhạt để làm dịu ảnh nền */}
        <div className="absolute inset-0 bg-white bg-opacity-10"></div>
  
        {/* 🔲 Nội dung chính */}
        <div className="relative z-10 flex flex-col items-center justify-start py-12 px-4">
          {/* Phần mô tả tiêu đề */}
          <div className="text-center mb-10 bg-black bg-opacity-60 p-6 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <FontAwesomeIcon icon={faRobot} className="mr-2 text-blue-400" />
              Giao dịch chứng khoán cùng <span className="text-blue-400">Autobot</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Extension Chrome hỗ trợ giao dịch tự động trên nền tảng VPS và các công ty chứng khoán. Tự động đặt lệnh, chốt lời, cắt lỗ theo tín hiệu từ hệ thống. Tích hợp trực tiếp vào giao diện giao dịch, giúp nhà đầu tư tiết kiệm thời gian và tối ưu hóa chiến lược giao dịch.
            </p>
            <a href={`${import.meta.env.VITE_API_URL}/ext.rar`}>
              <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium" >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Tải về Extension
              </button>
            </a>
          </div>
  
          {/* Phần tính năng */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-3xl mb-10">
            <h2 className="text-xl font-semibold mb-4">
              <FontAwesomeIcon icon={faToolbox} className="mr-2" />
              Tính năng nổi bật
            </h2>
            <ul className="list-none list-inside space-y-2">
              <li>
                <FontAwesomeIcon icon={faArrowTrendUp} className="mr-2" />
                Nhận tín hiệu mua bán tự động theo chiến lược
              </li>
              <li>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2" />
                Tuỳ chỉnh thuật toán phù hợp cá nhân
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Bảo mật cao, không lưu thông tin cá nhân
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Nhận thông báo qua Telegram realtime
              </li>
              <li>
                <FontAwesomeIcon icon={faBolt} className="mr-2" />
                Cực nhanh, phản ứng trong tích tắc
              </li>
            </ul>
          </div>
  
          {/* Phần hướng dẫn */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-3xl">
            <h2 className="text-xl font-semibold mb-4">
              <FontAwesomeIcon icon={faListOl} className="mr-2" />
              Hướng dẫn cài đặt
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Tải file về file .zip</li>
              <li>Giải nén thành folder ext</li>
              <li>Vào chrome: <code>chrome://extensions/</code></li>
              <li>Bật "chế độ nhà phát triển"</li>
              <li>Bấm "Tải tiện ích đã giải nén" và chọn thư mục ext</li>
              <li>Đăng nhập vào Smart Pro hoặc Smart Easy để extension hoạt động</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
  
  export default ExtensionPage;
  