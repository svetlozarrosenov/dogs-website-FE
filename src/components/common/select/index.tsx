import './Select.css';

function Select(props: { title: string, options: string[] }) {
    return (
        <div className='select'>
            <label className='select__title' htmlFor={props.title}>{props.title}</label>

            <select className='select__container' name={props.title} id={props.title}>
                    <option className='select__item' key={'All'} value={'All'}>
                        {'All'}
                    </option>
                {props.options.map((option) => (
                    <option className='select__item' key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;