
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${category.name}`); // Adjust the path based on your routing setup
    };

    return (
        <div 
            className="border-2 border-blue-300 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition" 
            onClick={handleClick}
        >
            <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            <p className="text-center">{category.description}</p>
        </div>
    );
};

export default CategoryCard;
