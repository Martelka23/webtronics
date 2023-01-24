import axios from "axios";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import MyButton from "../UI/buttons/MyButton";
import MyInput from "../UI/inputs/MyInput";

export default function ContactForm() {
  const router = useRouter();

  const sendData = async (data: FieldValues) => {
    console.log(data);
    await axios.post('https://martelka23.ru/api/users', data);
    router.push('/feedback');
  }

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });

  return (
    <div className="contact-form">
      <div className="bg">
        <form onSubmit={handleSubmit(sendData)}>
          <h2 className="title">
            Contact us
          </h2>
          <p className="text">
            Do you have any kind of help please contact with us.
          </p>
          <MyInput
            register={register('name', {
              required: true,
              minLength: 2
            })}
            placeholder="Name"
            isError={errors.name ? true : false}
            errorMessage={'Invalid name'}
          />
          <MyInput
            register={register('phone', {
              required: true,
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: 'Invalid phone'
              }
            })}
            placeholder="Phone"
            isError={errors.phone ? true : false}
            errorMessage={'Invalid phone'}
          />
          <MyInput
            register={register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email'
              }
            })}
            placeholder="Email"
            isError={errors.email ? true : false}
            errorMessage={'Invalid email'}
          />
          <MyButton onClick={() => { }}>Send</MyButton>
        </form>
      </div>
    </div>
  );
}