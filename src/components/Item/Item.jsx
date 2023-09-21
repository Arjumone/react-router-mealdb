import { Link } from "react-router-dom";


const Item = ({item}) => {

    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}= item;
    
    return (
        <div className=" border-2 flex flex-col rounded-lg">
            <img src={strCategoryThumb} alt="" />
            <h1 className=" text-2xl font-bold">Name:{strCategory}</h1>
            <p className="flex-grow">Description:{strCategoryDescription}</p>
            <Link to={`/item/${strCategory}`}><button>Details</button></Link>
        </div>
    );
};

export default Item;