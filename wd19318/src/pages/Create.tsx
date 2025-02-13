import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ProductInput = {
    name: string,
    price: number,
    image:string
}

function Create() {
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<ProductInput>();

    const nav = useNavigate();

    const onCreate:SubmitHandler<ProductInput> = async (data) => {
        try {
            //B1: call API
            const response = await axios.post('http://localhost:3000/products', data);
            //B2: thông báo/điều hướng ng dùng sau khi thành công
            if (response.status == 201) {
                alert('Thêm mới thành công');
                nav('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Create Form</h1>
            <form onSubmit={handleSubmit(onCreate)}>
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
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Create