import './Shell.css';

function Shell (props: any) {
    return (
        <div className='shell'>{props.children}</div>
    );
}

export default Shell;