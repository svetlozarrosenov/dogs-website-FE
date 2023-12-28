'use clients';
import Button from '../Button';
import './popupStyles.css';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={'popup-overlay'} onClick={onClose}>
          <div className={'popup-content'} onClick={(e) => e.stopPropagation()}>
            <Button className={'popup-overlay__close-button'} onClick={onClose}>
              Close
            </Button>
            {children}
          </div>
        </div>
      );
    };

export default Popup;