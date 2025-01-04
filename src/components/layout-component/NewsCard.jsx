import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const truncateDetails = (details, wordLimit) => {
        const words = details.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return details;
    };



    return (
        <div className="card w-full bg-white text-gray-800 shadow-xl mt-10">
            <div className="card-header flex items-center p-4">
                <img
                    src={news.author.img}
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div className="author-info">
                    <h4 className="text-lg font-semibold">{news.author.name}</h4>
                    <span className="text-sm text-gray-500">{news.author.published_date}</span>
                </div>
            </div>
            <figure>
                <img
                    src={news.image_url}
                    alt="Article"
                    className="w-full h-auto"
                />
            </figure>
            <div className="card-body p-4">
                <h3 className="card-title text-xl font-semibold">
                    {news.title}
                </h3>
                <p className="text-sm">
                    {truncateDetails(news.details, 30)}
                </p>
            </div>
            <div className="card-footer flex justify-between items-center p-4 border-t border-gray-200">
                <div className="rating flex items-center">
                    <AiFillStar className="text-yellow-500" />
                    <span className="ml-1 text-sm">{news.rating.number}</span>
                </div>
                <div>
                    <Link to={`/news/${news._id}`}>Read More</Link>
                </div>
                <div className="views text-sm text-gray-500 flex items-center">
                    <BsEye />
                    <span className="ml-1">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;