
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const items = useLoaderData();
    // console.log(items);
    return (
        <div>
            <h1>Items components:{items.length}</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 rounded-lg'>
                {
                    items.categories.map(item=><Item key={item.idCategory} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;