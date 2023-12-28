'use client';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Shell from '@/components/common/shell';
import { useState } from 'react';
import { mutateLogin } from '@/hooks';
import { useRouter } from 'next/navigation'


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    
    const onSubmit = async (values) => {
        try {
            const { data, error } = await mutateLogin(values);
            // Handle login logic based on data and error
            if (data) {
                setIsLoggedIn(true);
                router.push('/'); 
                // Additional logic for successful login
            } else if (error) {
                // Handle login error (e.g., display error message)
            }
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