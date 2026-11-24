import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export type UserFormState = {
    name: string,
    username: string
}

const InitialValue: UserFormState = {
    name: '',
    username: ''
}

interface UserFormsProps {
  handleSubmit: (user: UserFormState) => void,
}

export default function UserForm({ handleSubmit }: UserFormsProps) {
    const [form, setForm] = useState(InitialValue);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState;
        setForm({ ...form, [name]: e.target.value });
      }
    
      const handleClick: MouseEventHandler = (e) => {
         e.preventDefault();
         handleSubmit(form);
         setForm(InitialValue);
         console.log(form);
      }
    
      return (
        <>
          <Input value={form.name} name='name' placeholder='Nombre' handleChange={handleChange} /> <br/>
          <Input value={form.username} name='username' placeholder='Usuario' handleChange={handleChange} /> <br/>
          <Button handleClick={handleClick} >Start X</Button>
        </>
      );
}