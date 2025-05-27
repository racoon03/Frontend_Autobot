import iconBot from "/src/assets/iconbotnew.png";
import iconBot2 from "/src/assets/iconbothi.jpg";

function ServiceRates() {
    const packages = [
      { title: "1 Tháng", price: "2.700.000 VND", discount: "30%" },
      { title: "3 Tháng", price: "7.200.000 VND", discount: "10%" },
      { title: "6 Tháng", price: "12.600.000 VND", discount: "10%" },
      { title: "12 Tháng", price: "21.600.000 VND", discount: "10%" },
    ];
  
    return (
        <section
        className="py-16 bg-cover bg-center text-white min-h-screen"
        style={{ backgroundImage: "url('/src/assets/service_rates_background2.jpg')" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-14">GÓI DỊCH VỤ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {packages.map((pkg, index) => (
                <div
                    key={index}
                    className="group relative bg-gray-100 text-gray-900 rounded-2xl shadow-xl p-6 text-center hover:scale-[1.03] transition-transform"
                >
                    <div className="relative w-14 h-14 ml-auto">
                    <div className="absolute inset-0 bg-red-600 rounded-full border-4 border-white border-dashed flex items-center justify-center">
                        <div className="text-right text-white">
                        <p className="text-xs font-bold">Giảm</p>
                        <p className="text-sm font-bold">{pkg.discount}</p>
                        </div>
                    </div>
                    </div>
                    <img
                        src={iconBot}
                        alt="Bot Icon"
                        className="mx-auto mb-4 transition duration-300 group-hover:hidden"
                        />
                        <img
                        src={iconBot2}
                        alt="Bot Icon Hover"
                        className="mx-auto mb-4 transition duration-300 hidden group-hover:block"
                        />

                    <h3 className="text-2xl font-bold">{pkg.title}</h3>
                    <p className="text-lg font-semibold mt-2 text-green-600">{pkg.price}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
  }
  
  export default ServiceRates;
  