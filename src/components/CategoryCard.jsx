
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${category.name}`); 
    };

    return (
        <div 
            className="border-2 text-slate-700 bg-background rounded-2xl p-4 cursor-pointer hover:bg-accent hover:text-yellow-50 transition" 
            onClick={handleClick}
        >
            <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            <p className="text-center">{category.description}</p>
        </div>
    );
};

export default CategoryCard;
