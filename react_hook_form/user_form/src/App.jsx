import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './App.css';

export default function App() {

  //Yup validation schema
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be 8+ characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"
      )
      .required('Password is required'),
    age: yup.number()
      .positive().integer()
      .min(18, 'You must be at least 18 years old')
      .required('Age is required'),
    wantsEmails: yup.boolean()
  });

  //React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm(
    { resolver: yupResolver(schema) }
  );

  //Show form data on submit
  const [formData, setFormData] = useState({})
  const submitForm = data => setFormData(data);

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <input type="text" placeholder="Username"
            {...register("username")} />

          {/* Display any errors next to the form control */}
          {errors.username && errors.username.message}
        </div>

        <div>
          <input type="password" placeholder="Password" {...register("password")} />
          {errors.password && errors.password.message}
        </div>

        <div>
          <input type="number" placeholder="Age" {...register("age")} />
          {errors.age && errors.age.message}
        </div>

        <div>
          <label htmlFor="checkbox">Do you want lots of unnecessary emails? </label><input name="checkbox" type="checkbox" placeholder="WantsEmails" {...register("WantsEmails", {})} />
        </div>
        <input type="submit" />
      </form>
      <p>
        { //Display form data if it is successfully submitted
          Object.keys(formData).length !== 0 && JSON.stringify(formData)
        }
      </p>
    </>
  );
}