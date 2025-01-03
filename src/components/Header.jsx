import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="logo my-6 max-w-md mx-auto text-center">
                <img src={logo} alt="#" />
                <h2 className="text-lg my-2">Journalism Without Fear or Favour</h2>
                <p className="text-black font-medium my-2">{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;