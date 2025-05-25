import { FaLinkedin } from "react-icons/fa";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Deepak S. Verma",
      title: "Founder & Serial Entrepreneur",
        linkedin: "https://www.linkedin.com/in/deepak-verma", // example
      image: "src/components/image copy 30.png",
      experience: "12+ Years Work Experience",
      teaching: "6+ Years Teaching Experience",
      description:
        "Mr. Verma is a visiting faculty at IIM Rohtak, IIM Nagpur, and Symbiosis University.",
    },
    {
      name: "Indranil Mukherjee",
      title: "Lead Digital Strategist",
      image: "src/components/image copy 31.png ",
      experience: "13+ Years Work Experience",
      teaching: "5+ Years Teaching Experience",
      linkedin: "https://www.linkedin.com/in/indranil", // example
      description:
        "Worked at RBS, L'Oréal, and other top firms. Specializes in campaign strategy and SEO.",
    },
    {
      name: "Nisha Bashera",
      title: "Digital Marketing Lead",
      image: "src/components/image copy 45.png",
      experience: "7+ Years Work Experience",
      teaching: "4+ Years Teaching Experience",
      linkedin: "https://www.linkedin.com/in/nisha-bashera", // example
      description:
        "Expert in social media marketing, content creation, and influencer strategy.",
    },
  ];

  return (
    <section className="bg-white py-12 px-8 md:px-12 bg-pink-600">
      <h2 className="text-3xl font-bold text-center mb-10 border-5px">Meet Your Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {mentors.map((mentor, idx) => (
          <div
            key={idx}

            className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition "
          >
       
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow"
            />
            <h3 className="text-xl font-semibold text-gray-800">{mentor.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{mentor.title}</p>

            <div className="text-sm text-gray-600">{mentor.experience}</div>
            <div className="text-sm text-gray-600 mb-2">{mentor.teaching}</div>

            <p className="text-sm text-gray-700 mt-2 mb-4">{mentor.description}</p>

            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <FaLinkedin className="text-xl" />
              Connect on LinkedIn
            </a>
          </div>
          
        ))}
      </div>
    </section>
  );
}
