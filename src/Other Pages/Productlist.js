import productList from '../Data/data';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {productList.map((item) => {
                    return (
                        <div className="card-text" key={item.id}>
                            <img src={item.imgUrl} style={{ width: '14rem' }} />
                            <Link to={item.id.toString()}>{item.name}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
