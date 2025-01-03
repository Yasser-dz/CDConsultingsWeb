"use client";
import Image from "next/image";

const consultingServices = [
  {
    title: "Cloud Architecture Design",
    description:
      "Tailored cloud solutions to ensure high availability, scalability, and cost-efficiency on platforms like AWS, Azure, and Google Cloud.",
  },
  {
    title: "DevSecOps Automation",
    description:
      "Enhance development and deployment processes with integrated security, operational efficiency, and faster time-to-market.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Automate cloud infrastructure management with Terraform for consistent, scalable, and easily versioned deployments.",
  },
  {
    title: "Cloud Migration Services",
    description:
      "Seamlessly migrate your legacy or existing systems to the cloud with minimal disruption and maximum future-proofing.",
  },
  {
    title: "Security & Compliance Management",
    description:
      "Ensure your cloud systems comply with GDPR, HIPAA, and other regulations, with continuous monitoring and protection.",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Maximize cloud value by optimizing resource usage and cutting unnecessary costs, ensuring scalability and efficiency.",
  },
];

const Manage = () => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-6xl font-black">
          Revolutionize Your Business <br /> With Cloud Expertise.
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Free Consultation</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Custom Cloud Strategies</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">24/7 Support</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">
              Flexible Engagement Models
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14">
          {consultingServices.map((service, i) => (
            <div
              className={`manageTabs text-center p-10 ${
                service.title === "DevSecOps Automation" ||
                service.title === "Security & Compliance Management"
                  ? "bg-black text-white rounded-lg"
                  : "bg-gray-100"
              }`}
              key={i}
            >
              <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
              {/* Ligne de séparation entre le titre et la description */}
              <div className="border-t-2 border-gray-300 my-4" />
              <p className="text-sm font-medium mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
