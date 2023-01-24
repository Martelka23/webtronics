import { MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ArrowButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  direction: 'left' | 'right'
}

export default function ArrowButton({ onClick, direction }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className='arrow-button'
    >
      <FontAwesomeIcon 
        className='sidebar__content__img'
        icon={direction === 'left' ? faChevronLeft : faChevronRight}
      />
    </button>
  );
}