import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Link } from "react-router-dom";


const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-5">

                <section className="col-span-9">
                    <h2 className="text-[#403F3F] font-semibold text-xl">Dragon News</h2>
                    <div className="card bg-white-300 w-full space-y-5 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body space-y-3  items-start">
                            <h2 className="card-title text-2xl text-[#403F3F]">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn">Back TO Categories</Link>
                            </div>
                        </div>
                    </div>

                </section>

                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;