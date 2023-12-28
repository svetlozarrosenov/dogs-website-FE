'use client'
import './Filter.css';
import Button from '../Button';
import Select from '../select';
import Shell from '../shell';
import { useState, useEffect } from 'react';

function Filter (props: any) {
    const [breeds, setBreeds] = useState(['']);

    useEffect(() => {
        const url: unknown = process.env.REACT_APP_API_URL + '/breeds';
        fetch(url as RequestInfo, {
            method: "GET"
        }).then(async (response: any)=>{
            response = await response.json();
            setBreeds(response);
        });
    }, []);
    
    const filter = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      
    }

    return (
        <div className="filter">
            <Shell>
                <div className='filter__content'>
                    <Select title={'Choose breed'} options={breeds}/>
                    <Select title={'Choose gender'} options={['male', 'female']}/>
                    <div className='filter__action'>
                        <Button onClick={filter}>Search</Button>
                    </div>
                </div>
            </Shell>
        </div>
    );
}

export default Filter;