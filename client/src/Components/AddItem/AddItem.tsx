'use client'
import React from 'react';
import styles from './add-item.module.scss';
import Plus from '@/assets/icons/plus.svg'
import {useAppDispatch} from "@/store/hooks";
import {createCard} from "@/store/slices/entitiesSlice";
interface AddItemProps {

}

const AddItem: React.FC<AddItemProps> = ({}) => {

    const dispatch = useAppDispatch();

    const addItem = () => {
            dispatch(createCard())
        }

    return (
        <>
            <button className={styles.addItem} onClick={addItem}>
                <Plus width={30} height={30}/>
            </button>
        </>
    );
};

export default AddItem;
