import axios from "axios"
import { Product } from "../types/Product"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" //dùng để lấy giá trị id gửi qua url

function Detail() {
    const { id } = useParams();
    const [product,setProduct] = useState<Product|undefined>();

    //khai báo lấy thông tin chi tiết
    const detail = async (id: string) => {
        try {
            //B1: lấy chi tiết product
            const { data } =  await axios.get(`http://localhost:3000/products/${id}`);
            //B2: dùng hàm setProduct để gán giá trị cho biến product
            setProduct(data); 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!id) return; //nếu ko thấy id thì dừng
        detail(id); //nếu có id thì gọi vào hàm detail
    }, [id])

    return (
        <div>
            <h1>Đây là trang chi tiết</h1>
            <p>{product?.id}</p>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>
                <img src={product?.image} alt="" />
            </p>
        </div>
    )
}

export default Detail