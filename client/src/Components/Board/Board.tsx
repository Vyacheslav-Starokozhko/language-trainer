'use client'
import React from 'react';
import styles from './board.module.scss';
import {useAppSelector} from "@/store/hooks";
import Card from "@/UI/loop/Card/Card";

enum BoardType {
    Cards = "cards",
    Tables = "tables",
}

interface BoardProps {
    type:BoardType
}

const Board: React.FC<BoardProps> = ({type}) => {

    const {entities} = useAppSelector(state => state.entitiesReducer)
    return (
        <div className={styles.board}>
            {entities && entities.length > 0 &&
                <div className={styles.cards}>
                    {
                        entities.map((item: any, idx: number) => {
                            return (
                                <Card number={++idx} item={item}/>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Board;
