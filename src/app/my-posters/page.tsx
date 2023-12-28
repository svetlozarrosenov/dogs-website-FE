'use client';
import Shell from '@/components/common/shell';
import { useState } from 'react';
import { usePosters, mutatePosterCreate } from '@/hooks';
import CustomForm from '@/components/common/customForm';
import { fields } from './const';
import Button from '@/components/common/Button';


function MyPosters() {
    const { data: posters } = usePosters();
    console.log('crb_posters', posters)
    return (
        <div>
            popup
            <Button>Add Poster</Button>

            {posters && <ul className='posters-list'>
                {posters.map((poster) => {
                    return <li key={poster._id} className='poster'>
                        <div className="poster__image">{poster.image}</div>
                        <div className="poster__title">{poster.title}</div>
                        <div className="poster__breed">{poster.breed}</div>
                        <div className="poster__price">{poster.price}$</div>
                        <div className="poster__edit">Edit</div>
                    </li>
                })}
            </ul>}
        </div>
    );

    // const onSubmit = async (values) => {
    //     await mutatePosterCreate(values);
    // };

    // return (
    //     <div>
    //         <CustomForm 
    //             fields={fields} 
    //             onSubmit={onSubmit}
    //             button={'submit'}
    //             title={'Add New Poster'}
    //         />
    //     </div>
    // );
}

export default MyPosters;