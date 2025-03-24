

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
                    <div>Sub heading</div>

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