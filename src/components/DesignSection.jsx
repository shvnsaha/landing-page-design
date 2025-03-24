import { Link } from "react-router";


const DesignSection = () => {
    return (
        <div className="overflow-hidden py-24 bg-black text-white">
            <div className="primary-container">
                <div className="max-w-[50rem] lg:mb-24 mb-16">
                    <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
                        Launch pixel-perfect sites
                    </h2>
                </div>

                {/* content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* content */}
                    <div className="flex flex-col justify-between gap-16">
                        {/* sub heading */}
                        <div>
                            <p className="text-2xl text-gray-300">
                                Rethink the web dev cycle with CodeTutor. Give your design and marketing teams the power to launch sophisticated sites quickly — so your dev team can focus on more complex work, not pixel-perfect revisions.
                            </p>
                            <Link
                                to="/dashboard/signup"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-8"
                            >
                                Get started
                                <span className="font-normal ml-1">— it's free</span>
                            </Link>
                        </div>

                        {/* accrodian */}
                        <div>accrodian</div>
                    </div>


                    {/* video */}
                    <div>video</div>
                </div>
            </div>
        </div>
    );
};

export default DesignSection;