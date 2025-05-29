import iconBot from "/src/assets/iconbotnew.png";
import iconBot2 from "/src/assets/iconbothi.jpg";
import { useEffect, useState } from 'react';
import { priceBotService, type PriceBot } from '../services/priceBotService';
import { botTradingService, type BotTrading } from '../services/botService';

function ServiceRates() {
  const [groupedPriceBots, setGroupedPriceBots] = useState<{
    [botId: number]: PriceBot[];
  }>({});
  const [botNames, setBotNames] = useState<{
    [botId: number]: string;
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const priceBotsData = await priceBotService.getAllPriceBots();
        const botTradingsData = await botTradingService.getAllBotTradings();

        // Group price bots by botTradingId
        const grouped = priceBotsData.reduce((acc, priceBot) => {
          if (!acc[priceBot.botTradingId]) {
            acc[priceBot.botTradingId] = [];
          }
          acc[priceBot.botTradingId].push(priceBot);
          return acc;
        }, {} as { [botId: number]: PriceBot[] });

        setGroupedPriceBots(grouped);

        // Create a map of bot IDs to names
        const namesMap = botTradingsData.reduce((acc, bot) => {
          acc[bot.id] = bot.name;
          return acc;
        }, {} as { [botId: number]: string });

        setBotNames(namesMap);

      } catch (error) {
        console.error("Error fetching bot price data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <section
      className="py-16 bg-cover bg-center text-white min-h-screen"
      style={{ backgroundImage: "url('/src/assets/service_rates_background2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-14" style={{ color: '#e0f2f7', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>GÓI DỊCH VỤ</h2>

        {loading ? (
          <p className="text-center text-black">Đang tải dữ liệu giá bot...</p>
        ) : Object.keys(groupedPriceBots).length === 0 ? (
          <p className="text-center text-black">Không có dữ liệu giá bot.</p>
        ) : (
          // Render bot prices grouped by bot
          Object.keys(groupedPriceBots).map((botId) => {
            const botPrices = groupedPriceBots[parseInt(botId)];
            const botName = botNames[parseInt(botId)] || `Bot ID ${botId}`;

            return (
              <div key={botId} className="mb-10">
                <h3
                  className="text-2xl font-bold text-center text-black mb-6 pb-2 border-b-2 border-blue-500"
                  style={{ color: '#1a237e' }}
                >
                  {`Giá dịch vụ: ${botName}`}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {botPrices.map((priceBot, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-100 text-gray-900 rounded-2xl shadow-xl text-center hover:scale-[1.03] transition-transform flex flex-col overflow-hidden"
                    >
                      <div className="p-6 flex-1">
                         {/* Discount display based on priceBot.discount */}
                        {priceBot.discount > 0 && (
                          <div className="relative w-14 h-14 ml-auto">
                            <div className="absolute inset-0 bg-red-600 rounded-full border-4 border-white border-dashed flex items-center justify-center">
                              <div className="text-right text-white">
                                <p className="text-xs font-bold">Giảm</p>
                                <p className="text-sm font-bold">{`${priceBot.discount}%`}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Icon display - can be dynamic if bots have different icons */}
                        <img
                          src={iconBot} // Or a dynamic icon based on botId/name
                          alt="Bot Icon"
                          className="mx-auto mb-4 transition duration-300 group-hover:hidden"
                        />
                        <img
                          src={iconBot2} // Or a dynamic icon based on botId/name
                          alt="Bot Icon Hover"
                          className="mx-auto mb-4 transition duration-300 hidden group-hover:block"
                        />

                        {/* Title and Price */}
                        <h3 className="text-2xl font-bold">{`${priceBot.month} Tháng`}</h3>
                        <p className="text-lg font-semibold mt-2 text-green-600">{`${priceBot.price.toLocaleString('vi-VN')} VND`}</p>
                        
                        {/* Description if available */}
                        {priceBot.description && (
                            <p className="text-sm text-gray-600 mt-2">{priceBot.description}</p>
                        )}

                      </div>
                      <button className="w-full bg-black text-white py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">
                        Mua Ngay
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}

      </div>
    </section>
  );
}

export default ServiceRates;
  