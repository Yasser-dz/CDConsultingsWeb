import Image from "next/image";



const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/insta1.png" width={306} height={306} alt="instaOne" />
                 
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/insta2.png" width={306} height={306} alt="instaTwo" />
                   
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/insta3.png" width={306} height={306} alt="instaThree" />
                    
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/insta4.png" width={306} height={306} alt="instaFour" />
                    
                </div>

            </div>
        </div>
    )
}

export default Insta
