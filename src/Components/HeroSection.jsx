import Doctor from "../images/Doctor.svg"

const HeroSection = () => {
    return (
        <div className="mt-25 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left side */}
                <div className="text-center md:text-left p-8">
                    <h1 className="text-5xl md:text-[55px] font-bold text-gray-700 md:leading-14 md:tracking-normal">
                        AI-Powered <br />
                        Healthcare <br />
                        at Your Fingertips
                    </h1>
                    <p className="mt-5 text-gray-700 text-lg">Experience the future of healthcare with Rectify. Book appointments instantly, get AI-powered diagnosis, and manage your health with intelligent insights designed for both patients and doctors. </p>

                    {/* Appointment Button */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-8 border-b border-gray-300 pb-10">
                        <button className="bg-teal-600 text-white text-lg py-3 md:py-3 md:px-6 rounded-2xl cursor-pointer transition duration-300 delay-75 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-teal-700">Book Appointment Now</button>
                        <button className="bg-yellow-400 text-white text-lg py-3 md:py-3 md:px-6 rounded-2xl cursor-pointer transition duration-300 delay-75 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-yellow-500">Learn More</button>
                    </div>

                    {/* Properties Overview */}
                    <div className="grid grid-cols-3 mt-10 font-nunito">
                        <div className="text-center font-semibold">
                            <h1 className="text-3xl md:text-[30px] text-teal-600 font-semibold tracking-tight">AI</h1>
                            <span className="text-[14px] md:text-[15px] text-gray-600 ">Powered Diagnosis</span>
                        </div>
                        <div className="text-center font-semibold">
                            <h1 className="text-3xl md:text-[30px] text-teal-600 font-semibold tracking-tight">24/7</h1>
                            <span className="text-[14px] md:text-[15px] text-gray-600 ">Available</span>
                        </div>
                        <div className="text-center font-semibold">
                            <h1 className="text-3xl md:text-[30px] text-teal-600 font-semibold tracking-tight">Instant</h1>
                            <span className="text-[14px] md:text-[15px] text-gray-600 ">Booking</span>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="md:ml-20">
                    <img
                        src={Doctor}
                        className="md:h-4/5"
                    />

                </div>
            </div>

        </div>
    )
}

export default HeroSection
