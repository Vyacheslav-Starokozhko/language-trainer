'use client'
import React from 'react';
import styles from './save.module.scss';
import Check from '@/assets/icons/check.svg'
import {useAppDispatch} from "@/store/hooks";
import {createCard} from "@/store/slices/entitiesSlice";
interface SaveProps {

}

const Save: React.FC<SaveProps> = ({}) => {

    const dispatch = useAppDispatch();

    const save = () => {
            dispatch(createCard())
        }

    return (
        <>
            <button className={styles.save} onClick={save}>
                <Check width={30} height={30}/>
            </button>
        </>
    );
};

export default Save;
