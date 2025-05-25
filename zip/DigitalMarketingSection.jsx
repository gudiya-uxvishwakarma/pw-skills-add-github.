import { FaUserTie, FaMoneyBillWave, FaHandshake, FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: 'Career Transition',
    icon: <FaUserTie className="text-3xl mx-auto mb-2" />,
  },
  {
    title: 'Highly Paid Salaries',
    icon: <FaMoneyBillWave className="text-3xl mx-auto mb-2" />,
  },
  {
    title: 'Entrepreneurship Opportunities',
    icon: <FaHandshake className="text-3xl mx-auto mb-2" />,
  },
  {
    title: 'Market Leadership',
    icon: <FaChartLine className="text-3xl mx-auto mb-2" />,
  },
];

export default function DigitalMarketingSection() {
  return (
    <section className="bg-white py-10 px-4 md:px-10 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-8">
        Step Into The Future Of Digital Marketing
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl p-5 shadow-md hover:scale-105 transform transition"
          >
            {feature.icon}
            <p className="text-sm md:text-base font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}