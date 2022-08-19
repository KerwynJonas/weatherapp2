import React from 'react';
import { useForm } from 'react-hook-form';
import Form  from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import './contact.scss'
const {Group, Label, Control} = {...Form}
export default function App() {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    const text = `${data["First name"]} ${data["Last name"]}\n ${data["Your comments"]}`
    console.log(text)
    window.open(`mailto:jonas.kerwyn@student.hogent.be?subject=WeatherApp&body=${text}`)};
  
  return (    
    <>
    <Navbar />
    <h1>Contact form</h1>
    <p>If you have a question, please fill in the contact form.</p>
    <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          First name
        </Label>
        <Control type="text" placeholder="First name" {...register("First name")} />
      </Group>
      <Group>
        
        <Label>Last Name</Label>
        <Control type="text" placeholder="Last name" {...register("Last name")} />
      </Group>
      <Group>
        <Label>Email</Label>
        <Control type="text" placeholder="Email" {...register("Email")} />
      </Group>
      <Group>
        <Label>Mobile number</Label>
        <Control  type="tel" placeholder="Mobile number" {...register("Mobile number")} />
      </Group>
      <Group>
        <Label>Comments</Label>
        <Control as="textarea"  {...register("Your comments")} />
        <Button type="submit" >
          Send
        </Button>
      </Group>
    </form>
    </>
  );
}