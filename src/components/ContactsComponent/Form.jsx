/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './form.scss';

// https://www.youtube.com/watch?v=NgWGllOjkbs ->how to use emailJs

const schema = yup.object({
  from_name: yup.string().required('O nome é obrigatório'),
  email_id: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  message: yup.string().min(10).required('Mensagem é obrigatória'),
}).required();

function Form() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (formData) => {
    emailjs
      .send('gmailMessage', 'arthurgmail15', formData, 'oeAlCYFuM2yjGucm0')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <div>
        <label htmlFor="nome" className="label">
          <span>Nome</span>
          <input type="text" name="from_name" {...register('from_name')} placeholder="Digite seu nome" autoComplete="off" />
          <p>{errors.from_name?.message}</p>
        </label>
        <label htmlFor="email" className="label">
          <span>Email</span>
          <input type="text" name="email_id" {...register('email_id')} placeholder="Digite seu email" autoComplete="off" />
          <p>{errors.email_id?.message}</p>
        </label>
      </div>
      <label htmlFor="senha" className="label">
        <span>Mensagem</span>
        <textarea type="message" name="message" {...register('message')} placeholder="Digite uma mensagem" autoComplete="off" />
        <p>{errors.message?.message}</p>
      </label>
      <button type="submit" value="send">Enviar</button>
    </form>
  );
}

export default Form;
