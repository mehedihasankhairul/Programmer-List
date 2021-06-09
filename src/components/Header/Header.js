import React from 'react';

const Header = () => {
    return (
        <div className="bg-green-500">

            <form>
                <input 
                type="text" 
                placeholder="Search Your Programmer"
                className = "ml-20 mt-6 rounded-md p-2"
                 />
            </form>
        </div>
    );
};

export default Header;