import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-3xl sm:text-5xl font-bold text-center">Our team delivers advanced cloud solutions for efficiency, security, and scalability.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">We specialize in driving efficiency, security, and scalability with tailored cloud strategies. Automation is at the heart of our approach, optimizing your processes for the future.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
            </div>
        </div>

    )
}

export default index;
