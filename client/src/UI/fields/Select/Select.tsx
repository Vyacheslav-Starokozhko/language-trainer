import React from 'react';
import styles from './select.module.scss';
interface SelectProps {
    options:any[]
}

const Select: React.FC<SelectProps> = ({}) => {

    return (
        <div className={styles.Select}>

        </div>
    );
};

export default Select;
