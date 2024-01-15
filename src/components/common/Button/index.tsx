'use client';
import './Button.css';

function Button (props: any) {
    let btnClass = props.background === 'blue' ? 'btn btn--blue' : 'btn';
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default behavior of the anchor element
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <a onClick={handleClick} className={btnClass} href="#">{props.children}</a>
    );
}

export default Button;