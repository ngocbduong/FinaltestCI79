import { useParams } from 'react-router-dom';
import productList from '../Data/data';

const ProductDetails = () => {
    const params = useParams();
    const products = productList.find(item => item.id.toString() === params.id)
    return (<div className='container mt-4'>
        Name: {products.name}
        <img src={products.imgUrl} style={{ width: '14rem' }}/>
    </div>);
};

export default ProductDetails;
