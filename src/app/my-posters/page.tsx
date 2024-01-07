'use client';
import './myPosters.css';
import Shell from '@/components/common/shell';
import { useState } from 'react';
import { usePosters, mutatePosterCreate } from '@/hooks';
import CustomForm from '@/components/common/customForm';
import { fields } from './const';
import Button from '@/components/common/Button';
import Popup from '@/components/common/popup';
import Image from 'next/image';

function MyPosters() {
    const { data: posters } = usePosters();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const onSubmit = async (values) => {
        await mutatePosterCreate(values);
        closePopup();
    };
    console.log('crb_posters', posters)
    return (
        <div>
            <Shell>
            <Button onClick={openPopup}>Add Poster</Button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <CustomForm 
                    fields={fields} 
                    onSubmit={onSubmit}
                    button={'submit'}
                    title={'Add New Poster'}
                />
            </Popup>

            {posters?.length && <ul className='posters-list'>
                {posters.map((poster) => {
                    return <li key={poster._id} className='poster'>
                        <div className="poster__head">
                            {poster.image && (
                                <div className="poster__image">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/file/${poster.image}`}
                                        alt={`Poster Image - ${poster.title}`}
                                        width={300} // Set the desired width
                                        height={200} // Set the desired height
                                    />
                                </div>
                            )}
                            <div className="poster-container">
                                <div className="poster__title">{poster.title}</div>
                                <div className="poster__breed">breed: {poster.breed}</div>
                                <div className="poster__price">price: {poster.price}$</div>
                            </div>
                        </div>

                        <div className="poster__foot">
                            <Button>Edit</Button>
                            <Button>Deactivate</Button>
                        </div>
                    </li>
                })}
            </ul>}

            {!posters?.length && <div className='posters-list-not-found'>You don't have any active posters!</div>}
            </Shell>
        </div>
    );
}

export default MyPosters;