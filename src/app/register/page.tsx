'use client';
import './register.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Shell from '@/components/common/shell';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required().min(5).max(30),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

function Register() {
    return (
        <div className='register'>
            <Shell>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async values => {
                        const url = `${process.env.REACT_APP_API_URL}/user/register`
                        try{
                            await fetch(url, {
                                body: JSON.stringify(values),
                                headers: {
                                'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                mode: 'cors'
                            })
                            .then((data)=>{
                                console.log('crb_here')
                                console.log(data)
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                            console.log(values);

                        }catch(error: any){
                            throw new error;
                        }
                    // same shape as initial values
                }}
                >
                    {({ errors, touched }) => (
                        <Form className='register-form'>
                            <h1 className='register__title'>Register Form</h1>

                            <Field name="firstName" placeholder="First Name"/>
                            {errors.firstName && touched.firstName ? (
                                <div className='register-form__error'>{errors.firstName}</div>
                            ) : null}
                            
                            <Field name="lastName" placeholder="Last Name" />
                            {errors.lastName && touched.lastName ? (
                                <div className='register-form__error'>{errors.lastName}</div>
                            ) : null}
                            
                            <Field name="email" type="email" placeholder="Email" />
                            {errors.email && touched.email ? <div className='register-form__error'>{errors.email}</div> : null}
                            
                            <Field name="password" type="password" placeholder="Password" />
                            {errors.password && touched.password ? <div className='register-form__error'>{errors.password}</div> : null}
                            
                            <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                            {errors.confirmPassword && touched.confirmPassword ? <div className='register-form__error'>{errors.confirmPassword}</div> : null}
                            
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </Shell>
        </div>
    )
}

export default Register;