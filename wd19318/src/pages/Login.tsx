import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form" //làm việc với form
import { useNavigate } from "react-router-dom";

//khai báo các trường dữ liệu trong form
type RegisterInput = { 
    email: string,
    password: string,
}

function Login() {
    //khai báo register,handleSubmit để làm việc với form
    const { 
        register,
        handleSubmit,
    } = useForm<RegisterInput>();

    const nav = useNavigate(); //khởi tạo hàm điều hướng

    //khởi tạo hàm onSubmit để đăng ký khi ng dùng bấm nút
    const onSubmitForm:SubmitHandler<RegisterInput>=async(data)=>{
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
            <h1>Register page</h1>
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
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login