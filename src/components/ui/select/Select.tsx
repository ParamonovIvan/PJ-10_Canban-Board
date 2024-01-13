import { useEffect, useRef, useState } from 'react';
import { FormDataType } from '../../../context/types';
import styles from './Select.module.scss';
import Button from '../button/Button';
import Option from './Option';
import {ReactComponent as Arrow} from '../../../images/arrow-down-select.svg';

interface SelectProps {
  selected: FormDataType | null;
  options: FormDataType[];
  onChange?: (selected: FormDataType) => void;
  testid: string
};

const Select = ({ selected, options, onChange, testid}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
        isOpen &&
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen])

  const handleOptionClick = (value: FormDataType) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const handlePlaceHolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={rootRef} className={styles.select_wrapper} data-testid={testid}>
      <Button
        className={styles.placeholder}
        onClick={handlePlaceHolderClick}
        testid="button"
      >
        <Arrow className={`${styles.arrow} ${isOpen ? styles.arrow__reverse : ''}`}/>
        <span data-testid='span' className={styles.span}>{selected?.name || ''}</span>
      </Button>
      {isOpen && (
        <ul className={styles.select} data-testid={'select'}>
          {options.map(option => (
            <Option
              key={option.id}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select