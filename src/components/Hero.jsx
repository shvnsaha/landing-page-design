import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";


const Hero = () => {
    return (
        <div className="pt-24 bg-black text-white md:pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
                <div className="mb-6">
                    <span className="text-[#999999] uppercase tracking-[0.2rem]">MORE THAN A WEBSITE BUILDER</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]">Your site should do <br className="md:block hidden" /> more than look good</h1>


                {/* paragraph and btn */}

                <div className="flex md:flex-row items-center flex-col justify-between gap-8">
                    <p className="text-[#999999] md:w-3/5 md:text-xl mb-8 md:mb-0 leading-relaxed">
                        As the first-ever website experience platform, CodeTutor lets marketers, designers, and developers
                        come together to build, manage, and optimize web experiences that get results.
                    </p>
                    <div className="flex  sm:flex-row flex-wrap gap-8 shrink-0">
                        <Link to={"/start-building"} className="bg-[#4353FF] hover:bg-blue-700 rounded px-8 py-4 font-medium text-lg transition-colors duration-200">Start building</Link>

                        <Link to={"/start-building"} className="hover:text-white/40 group flex items-center rounded px-8 py-4 font-medium text-lg transition-colors duration-200">Contact Sales
                        <HiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;