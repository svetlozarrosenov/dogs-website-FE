'use client';
import './customForm.css';
import Shell from '@/components/common/shell';
import { useState } from 'react';
import { mutateLogin } from '@/hooks';
import CustomFormInterface from './CustomFormInterface';
import { useForm } from 'react-hook-form';

function CustomForm({
    fields,
    onSubmit,
    button,
    title,
}: CustomFormInterface) {    
    const { register, handleSubmit } = useForm();

    return (
        <div className='custom-form'>
            <Shell>
                <h3 className="custom-form__title">
                    {title}
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field) => {      
                        if (field.fieldType === 'input') {
                            return (
                                <div key={field.id}>
                                {field.label && <label>{field.label}</label>}
                                <input
                                    type='text'
                                    id={field.id}
                                    {...register(field.name)}
                                    required={field.required}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                />
                                </div>
                            );
                        }

                        if (field.fieldType === 'textarea') {
                            return (
                                <div key={field.id}>
                                {field.label && <label>{field.label}</label>}
                                <textarea
                                    id={field.id}
                                    rows={field.rows}
                                    cols={field.cols}
                                    placeholder={field.placeholder}
                                    {...register(field.name)}
                                ></textarea>
                                </div>
                            );
                        }

                        if (field.fieldType === 'number') {
                            return (
                                <div key={field.id}>
                                {field.label && <label>{field.label}</label>}
                                <input
                                    id={field.id}
                                    type='number'
                                    {...register(field.name)}
                                    required={field.required}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                />
                                </div>
                            );
                        }

                        if (field.fieldType === 'fileInput') {                            
                            return (
                                <div key={field.id}>
                                {field.label && <label>{field.label}</label>}
                                <input
                                    id={field.id}
                                    type='file'
                                    accept="image/png, image/jpeg"
                                    {...register(field.name)}
                                    required={field.required}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                    multiple={field.multiple}
                                />
                                </div>
                            );
                        }

                        return null;
                    })}
            
            
                    <button type="submit">{button}</button>
                </form>
            </Shell>
        </div>
    );
}

export default CustomForm;