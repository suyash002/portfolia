import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer",
    company: "ITinformatix",
    date: "Apr 2022 -  Apr 2022 May 2023",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Software Developer",
    company: "TechPanda",
    date: "Jul 2023 - May 2024",
    responsibilities: [
      `Built with React.js, Redux, Tailwind CSS`,
      "Used WebSocket for real-time updates",
      "Integrated Razorpay for payments",
      "Created panels for Teacher and Super Admin",
    ],
  },
  {
    job: "Software Developer",
    company: "TechPanda",
    date: "Jul 2023- May 2024",
    responsibilities: [
      `Created using React.js, Redux, Material UI`,
      `Integrated MySQL, Razorpay, and Shiprocket`,
      "Developed CRUD features and custom UI",
      "Focused on pet product sales",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
