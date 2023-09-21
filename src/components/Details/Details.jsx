import { useLoaderData } from "react-router-dom";
import Detail from "../Detail/Detail";


const Details = () => {
    const details = useLoaderData()
    console.log(details);
    
   
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 rounded-lg'>
           {
            details.meals.map((detail,idx)=><Detail key={idx} detail={detail}></Detail>)
           }
            
        </div>
    );
};

export default Details;