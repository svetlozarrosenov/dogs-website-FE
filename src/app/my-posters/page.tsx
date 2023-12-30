'use client';
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
            <Button onClick={openPopup}>Add Poster</Button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <CustomForm 
                    fields={fields} 
                    onSubmit={onSubmit}
                    button={'submit'}
                    title={'Add New Poster'}
                />
            </Popup>

            {posters && <ul className='posters-list'>
                {posters.map((poster) => {
                    return <li key={poster._id} className='poster'>
                        {poster.image && (
                            <div className="poster__image">
                                <Image
                                    src={`data:${poster.image.mimeType};base64,${poster.image.data}`}
                                    alt={`Poster Image - ${poster.title}`}
                                    width={300} // Set the desired width
                                    height={200} // Set the desired height
                                />
                            </div>
                        )}
                        <div className="poster__title">{poster.title}</div>
                        <div className="poster__breed">{poster.breed}</div>
                        <div className="poster__price">{poster.price}$</div>
                        <div className="poster__edit">Edit</div>
                    </li>
                })}
            </ul>}
        </div>
    );
}

export default MyPosters;