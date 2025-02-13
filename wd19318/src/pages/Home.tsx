import axios from "axios"
import { Product } from "../types/Product"
import { useState,useEffect } from "react"

function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    //khai báo hàm lấy danh sách products
    const getList = async () => {
        try {
            //B1: call api để lấy dữ liệu từ json-server
            const { data } = await axios.get('http://localhost:3000/products');
            //B2: gọi hàm setProducts()
            // gán data nhận đc cho biến products
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    //khai báo hàm xóa
    const delPro = async (id: number) => {
        try {
            if (window.confirm('Are you sure?')) { //popup confirm
                await axios.delete(`http://localhost:3000/products/${id}`);
                alert('Delete success');
                getList(); //gọi hàm getList để tải danh sách sản phẩm mới
            }
        } catch (error) {
            console.log(error);
        }
    }

    //gọi hàm getList khi tải trang
    useEffect(() => {
        getList();
    }, [])

    return (
        <div>
            <h1>Danh sách products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p,index) => (
                        <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <img src={p.image} alt="" />
                            </td>
                            <td>
                                <a className="btn btn-info" href={`/detail/${p.id}`}>Detail</a>
                                <a className="btn btn-warning" href={`/edit/${p.id}`}>Edit</a>
                                <a className="btn btn-danger" onClick={() => delPro(p.id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home