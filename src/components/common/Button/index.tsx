'use client';
import './Button.css';

function Button (props: any) {
    let btnClass = props.background === 'blue' ? 'btn btn--blue' : 'btn';
    return (
        <a onClick={props.onClick} className={btnClass} href="#">{props.children}</a>
    );
}

export default Button;