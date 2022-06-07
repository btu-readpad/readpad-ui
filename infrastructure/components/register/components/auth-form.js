import React from 'react';
import { useFormik } from 'formik';
import styles from './auth-form.module.css'
import Router from 'next/router'

export default function AuthForm() {

  const login = (values) => {
    Router.push('/profile')
  }


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      login(values)
    },
  });
  return (
    <div className={styles.authformWrapper}>
      <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Isim</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="input input-bordered my-8 input-info w-full max-w-xs"
        />

        <label htmlFor="lastName">Soyisim</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="input input-bordered my-8 input-info w-full max-w-xs"
        />

        <label className="mt-5" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="input input-bordered my-8 input-info w-full max-w-xs"
        />

        <label htmlFor="lastName">Sifre</label>
        <input
          id="lastName"
          name="lastName"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="input input-bordered my-8 input-info w-full max-w-xs"
        />


        <button type="submit">Uye Ol</button>
      </form>
    </div>
  );
}