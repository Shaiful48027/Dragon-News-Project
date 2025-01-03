import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [Categories, setCatefories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCatefories(data.data.news_category)
            )
    }, [])

    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl">All Caterogy({Categories.length})</h2>
            <div className="flex flex-col items-start gap-2 rap">
                {
                    Categories.map(category =>

                        <NavLink to={`/category/${category.category_id}`} className="btn btn-outline w-full text-lg hover:bg-[#E7E7E7] font-semibold rounded-none justify-start" key={category.category_id}>{category.category_name}

                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;