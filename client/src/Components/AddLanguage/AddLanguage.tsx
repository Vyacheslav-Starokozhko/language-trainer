'use client'
import React from 'react';
import styles from './add-language.module.scss';
import Plus from '@/assets/icons/plus.svg'
import {useAppDispatch} from "@/store/hooks";
import {createCard} from "@/store/slices/entitiesSlice";
interface AddLanguageProps {

}

const AddLanguage: React.FC<AddLanguageProps> = ({}) => {

    const dispatch = useAppDispatch();

    const addLanguage = () => {
            dispatch(createCard())
        }

    return (
        <>
            <button className={styles.addLanguage} onClick={addLanguage}>
                <Plus width={15} height={15}/>
            </button>
        </>
    );
};

export default AddLanguage;
