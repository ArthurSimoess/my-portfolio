/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './form.scss';

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
}).required();

function Form() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nome" className="label">
          <span>Nome</span>
          <input type="text" {...register('name')} placeholder="Digite seu nome" />
          <p>{errors.name?.message}</p>
        </label>
        <label htmlFor="email" className="label">
          <span>Email</span>
          <input type="text" {...register('email')} placeholder="Digite seu email" />
          <p>{errors.email?.message}</p>
        </label>
      </div>
      <label htmlFor="senha" className="label">
        <span>Mensagem</span>
        <textarea type="message" {...register('message')} placeholder="Digite uma mensagem" />
        <p>{errors.message?.message}</p>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
