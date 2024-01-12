'use client';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Shell from '@/components/common/shell';
import { signIn } from 'next-auth/react';

function Login() {    
    const onSubmit = async (values) => {
        try {
            await signIn('credentials', {
                redirect: true,
                email: values.email,
                password: values.password,
                callbackUrl: '/dashboard'
            });
        } catch (error) {
            console.log('crb_the_error', error);
            // Handle other errors if needed
        }
    };

    const content = (
        <div className='login'>
            <Shell>
                <Formik 
                    initialValues={{ email: '', password: '' }}
                    onSubmit={onSubmit}>
                
                    {({ isSubmitting }) => (
                        <Form className='login-form'>
                            <h1 className='login-form__title'>Login Form</h1>
                            <Field type="email" name="email" placeholder="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" placeholder="password"/>
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Shell>
        </div>
    )

    return content
}

export default Login;