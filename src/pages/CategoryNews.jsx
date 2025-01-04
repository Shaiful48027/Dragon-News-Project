import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/layout-component/NewsCard';

const CategoryNews = () => {

    const { data: allNews } = useLoaderData();

    return (
        <div>
            <h2 className="text-[#403F3F] text-center font-semibold text-xl">Dragon News Home</h2>

            <div>
                {
                    allNews.map(news => <NewsCard news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;


