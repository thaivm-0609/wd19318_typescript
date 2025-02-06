import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form" //làm việc với form
import { useNavigate } from "react-router-dom";

//khai báo các trường dữ liệu trong form
type RegisterInput = { 
    email: string,
    password: string,
}

function Register() {
    //khai báo register,handleSubmit để làm việc với form
    const { 
        register,
        handleSubmit,
        formState: { errors }, //khai báo errors để lưu trữ validate errors
    } = useForm<RegisterInput>();

    const nav = useNavigate(); //khởi tạo hàm điều hướng

    //khởi tạo hàm onSubmit để đăng ký khi ng dùng bấm nút
    const onSubmitForm:SubmitHandler<RegisterInput>=async(data)=>{
        try {
            //call api để đăng ký tài khoản
            await axios.post('http://localhost:3000/register',data);
            alert('Đăng ký thành công');
            nav('/'); //điều hướng ng dùng về trang chủ
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
                            ...register('email', {
                                required: "Email không được bỏ trống",
                            })
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
                            ...register('password', {
                                required: "Password không được bỏ trống",
                                minLength: 6,
                            })
                        }
                    />
                    {
                        errors?.password && (
                            <p>{ errors?.password?.message }</p>
                        )
                    }
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register