import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form" //làm việc với form
import { useNavigate } from "react-router-dom";
//joi de validate du lieu
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

//khai báo các trường dữ liệu trong form
type LoginInput = { 
    email: string,
    password: string,
}

function Login() {
    //khai báo rule validate 
    const validateForm = Joi.object({
        email: Joi.string().required().email({tlds: false}),
        password: Joi.string().required().min(6),
    })
    //khai báo register,handleSubmit để làm việc với form
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: joiResolver(validateForm)
    });

    const nav = useNavigate(); //khởi tạo hàm điều hướng

    //khởi tạo hàm onSubmit để đăng ký khi ng dùng bấm nút
    const onSubmitForm:SubmitHandler<LoginInput>=async(data)=>{
        try {
            //call api để đăng ký tài khoản
            const response = await axios.post('http://localhost:3000/login',data);
            //lấy được accessToken trong response.data.accessToken
            //lưu token vào trong localStorage:
            localStorage.setItem('key', response.data.accessToken);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="text" 
                        id="email"
                        {
                            ...register('email')
                        }
                    />
                    {
                        errors?.email && (
                            <p>Email không hợp lệ</p>
                        )
                    }
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input 
                        type="text" 
                        id="password"
                        {
                            ...register('password')
                        }
                    />
                    {
                        errors?.password && (
                            <p>Password không hợp lệ</p>
                        )
                    }
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login