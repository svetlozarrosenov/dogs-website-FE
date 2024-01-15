'use client';
import './myPosters.css';
import Shell from '@/components/common/shell';
import { useState } from 'react';
import { useInactivePosters, mutatePosterActivate, mutatePosterRemove, URLs } from '@/hooks';
import CustomForm from '@/components/common/customForm';
import { fields } from './const';
import Button from '@/components/common/Button';
import Popup from '@/components/common/popup';
import Image from 'next/image';
import Bar from '@/components/myPosters/bar';
import { useRouter } from 'next/navigation';

import { mutate } from 'swr';

function MyPosters() {
    const { data: posters } = useInactivePosters();

    const router = useRouter();

    const activatePoster = async (posterId: string) => {
        await mutatePosterActivate(posterId);
        await mutate(URLs.activePostersList);
    };

    const removePoster =  async (posterId: string) => {
        await mutatePosterRemove(posterId);
    }

    return (
        <div>
            <Shell>
                <Bar></Bar>
                
                {posters?.length && <ul className='posters-list'>
                    {posters.map((poster) => {
                        return <li key={poster._id} className='poster'>
                            <div className="poster__head">
                                {poster.image && (
                                    <div className="poster__image">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACK_END_API_URL}/file/${poster.image}`}
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
                                <Button onClick={() => router.push(`/my-posters/${poster._id}`)}>View</Button>
                                <Button onClick={() => activatePoster(poster._id)}>Activate</Button>
                                <Button onClick={() => removePoster(poster._id)}>Remove</Button>
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