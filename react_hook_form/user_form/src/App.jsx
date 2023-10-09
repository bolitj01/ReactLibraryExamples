import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Username"
          {...register("username", { required: true })} />

        {errors?.username?.type === "required" && "You must have a username."}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register("Password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i })} />
        {errors?.password?.type === "pattern" && (
          <p>Password must be 8 or more characters including at least 1 lowercase letter, uppercase letter, a number, and a special character.</p>
        )}
      </div>


      <input type="number" placeholder="Age" {...register("Age", { required: true, max: 100, min: 18 })} />
      <label htmlFor="checkbox">Do you want lots of unnecessary emails? </label><input name="checkbox" type="checkbox" placeholder="WantsEmails" {...register("WantsEmails", {})} />
      <input type="submit" />
    </form>
  );
}