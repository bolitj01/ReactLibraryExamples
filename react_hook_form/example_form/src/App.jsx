import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("Username", {required: true})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
      <input type="number" placeholder="Age" {...register("Age", {required: true, max: 100, min: 18})} />
      <input type="checkbox" placeholder="WantsEmails" {...register("WantsEmails", {})} />

      <input type="submit" />
    </form>
  );
}