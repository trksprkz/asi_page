import React from "react";
import { useForm } from "react-hook-form";

const Inquiry = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name:</label>
        <input name="name" {...register('name')} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>Order Details:</label>
        <textarea id="order-inquiry" name="order-inquiry" rows='4' cols="50" {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Inquiry;

