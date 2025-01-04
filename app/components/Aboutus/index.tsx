"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from "react";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Who We Are",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'At CD Consulting, we specialize in providing innovative cloud DevSecOps solutions that simplify complex workflows and optimize cloud infrastructure. Our team is committed to building secure, scalable, and cost-effective systems that are tailored to meet the specific needs of your business.',
        link: 'Read more'
    },
    {
        heading: "Our Expertise",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'With deep expertise in cloud platforms such as AWS, Azure, GitHub, and Terraform, we help businesses automate their processes, accelerate deployments, and enhance operational efficiency. Whether it’s streamlining your workflows or ensuring seamless integrations, we use industry-leading tools to build systems that drive long-term success.',
        link: 'Read more'
    },
    {
        heading: "Our Mission",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'We are passionate about helping our clients navigate the cloud to achieve better performance and greater business outcomes. By optimizing cloud infrastructure, we ensure that your systems are not only secure but also built for scalability and efficiency. Let us work with you to simplify your cloud journey and support your growth.',
        link: 'Read more'
    },
];

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
                <Image
                    src="/images/aboutus/dots.svg"
                    width={100}
                    height={100}
                    alt="dots-image"
                    className="absolute bottom-1 -left-20"
                />
                <h3 className="text-center text-black text-lg tracking-widest">ABOUT US</h3>
                <h4 className="text-center text-4xl lg:text-5xl font-bold mt-4">
                    Know more about us.
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-y-10 gap-x-16 lg:gap-x-32">
                    {Aboutdata.map((item, i) => (
                        <Card key={i} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Card = ({ data }: { data: datatype }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="hover:bg-black bg-white rounded-3xl p-6 shadow-xl group flex flex-col items-center space-y-5 h-full min-h-[400px] max-h-[450px]">
            <h4 className="text-4xl font-semibold text-black group-hover:text-white text-center">
                {data.heading}
            </h4>
            <Image
                src={data.imgSrc}
                alt={data.imgSrc}
                width={100}
                height={100}
                className="self-center"
            />
            <p
                className={`text-lg font-normal text-black group-hover:text-offwhite text-center overflow-hidden ${
                    !expanded ? "line-clamp-3" : ""
                }`}
                style={{ minHeight: "72px" }}
            >
                {data.paragraph}
            </p>
            <div className="mt-auto">
                <button
                    className="text-lg font-semibold group-hover:text-white text-blue hover-underline flex items-center"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Show less" : "Read more"}
                    <ChevronRightIcon width={20} height={20} />
                </button>
            </div>
        </div>
    );
};

export default Aboutus;
