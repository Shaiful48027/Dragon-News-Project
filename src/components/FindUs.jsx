import { FaFacebook, FaInstagramSquare} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const FindUs = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl">Find Us On</h2>
            <div className="space-y-2">
                <button className="btn btn-outline w-full text-lg font-semibold rounded-none"><FaFacebook />Facebook</button>
                <button className="btn btn-outline w-full text-lg font-semibold rounded-none"><AiFillTwitterCircle />Twitter</button>
                <button className="btn btn-outline w-full text-lg font-semibold rounded-none"><FaInstagramSquare/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;