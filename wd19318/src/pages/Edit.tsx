import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProductInput = {
    name: string,
    price: number,
    image:string
}

function Edit() {
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ProductInput>();

    const getDetail = async (id:string) => {
        try {
            //call API để lấy dữ liệu
            const {data} = await axios.get(`http://localhost:3000/products/${id}`);
            reset({
                name: data.name,
                price: data.price,
                image: data.image,
            })
        } catch (error) {
            console.log(error);
        }
    }

    const nav = useNavigate()
    const onEdit:SubmitHandler<ProductInput> = async (data) => {
        try {
            const response = await axios.put(`http://localhost:3000/products/${id}`, data);
            if (response.status == 200) {
                alert('Chỉnh sửa thành công');
                nav('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!id) return;
        getDetail(id);
    }, [id]);

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSubmit(onEdit)}>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        {
                            ...register('name')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input 
                        type="number" 
                        {
                            ...register('price')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input 
                        type="text" 
                        {
                            ...register('image')
                        }
                    />
                </div>
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}

export default Edit