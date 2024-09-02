'use client'
import Play from '@/assets/icons/play.svg'

import Textarea from "@/UI/fields/Textarea/Textarea";
import {motion} from 'framer-motion';
import React from 'react';
import styles from './card.module.scss';
import Language from "@/UI/loop/Language/Language";

interface CardProps {
    item: any,
    number:number
}

const Card: React.FC<CardProps> = ({item,number}) => {
    const [flip, setFlip] = React.useState(true);




    const stopFlip = (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        }

    const flipCard = () => {
        setFlip((prevState) => !prevState);
        }


    return (
        <>
            <motion.div
                transition={{duration: 0.5}}
                animate={{rotateY: flip ? 0 : 180, opacity: 1, scale: 1}}
                initial={{opacity: 0, scale: 0.8}}
                exit={{opacity: 0, scale: 0.8}}
                className={styles.cardItem}

            >


                <motion.div
                    transition={{duration: 0.5}}
                    animate={{rotateY: flip ? 0 : 180}}
                    className={styles.Card}
                >
                    <strong className={styles.cardNumber}>{number}</strong>
                    <motion.div
                        transition={{duration: 0.5}}
                        animate={{rotateY: flip ? 0 : 180}}
                        className={styles.front}
                    >
                        <Play
                            width={35}
                            height={35}
                            onClick={flipCard}
                            className={styles.flipIcon}
                        />

                        <div className={styles.frontContent}
                             onClick={(e)=>stopFlip(e)}
                        >
                            <Textarea defaultValue="Front Side"/>
                            {/*<h2>Front Side</h2>*/}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{rotateY: 180}}
                        animate={{rotateY: flip ? 180 : 0}}
                        transition={{duration: 0.5}}
                        className={styles.back}
                    >
                        <Play
                            width={35}
                            height={35}
                            onClick={flipCard}
                            className={styles.flipIcon}
                        />

                        <div className={styles.backContent}
                             onClick={(e)=>stopFlip(e)}
                        >
                            <Language/>

                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default React.memo(Card);
