'use clients';
import './popup.css';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return <div className="popup">
        {children}
    </div>
};

export default Popup;