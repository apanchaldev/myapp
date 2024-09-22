import { useParams } from "react-router-dom";





const ProductDetail = () => {

    const {productname, id} = useParams();

    return (
        <div>
            <h1>ProductDetail</h1>
            <p>Product Name: {productname}</p>
            <p>Product Id: {id}</p>
        </div>
    );
};

export default ProductDetail;