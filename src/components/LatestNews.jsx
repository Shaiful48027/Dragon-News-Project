import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-4 mx-auto">
            <div className="flex gap-1 items-center">
                <p className="p-2 bg-[#D72050] text-white">Latest</p>
                <Marquee pauseOnHover>
                    <Link to="/news" className="p-2 text-lg text-[#403F3F] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;