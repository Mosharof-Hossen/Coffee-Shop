

const Banner = () => {
    return (
        <div

            className="hero h-[550px] bg-banner-bg bg-cover bg-center bg-no-repeat"

        >
            <div className="hero-overlay "></div>
            <div className="hero-content text-neutral-content ">
                <div className="flex flex-col md:flex-row md:pr-10 md:mr-12 p-8 md:p-0">
                    <div className="flex-1">
                    </div>
                    <div className="flex-1 ">
                        <h1 className="mb-5 text-5xl font-rancho-c text-white">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-base text-white">
                            It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="text-2xl px-3 py-1 rounded text-primary-c bg-primary-b-c font-rancho-c">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;