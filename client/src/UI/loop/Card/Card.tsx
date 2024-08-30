'usr client'
import { motion } from 'framer-motion';
import React from 'react';
import styles from './card.module.scss';
interface CardProps {

}

const Card: React.FC<CardProps> = ({}) => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className={styles.cardsItem}
            >
            </motion.div>
        </>
    );
};

export default Card;
