'use client';
import './Copyright.css';

function Copyright() {
    var currentTime = new Date()
    return (
        <div className='copyright'>
            Copyright {currentTime.getFullYear()}
        </div>
    );
}

export default Copyright;