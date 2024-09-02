"use client"
import React from 'react';
import styles from './pronounce.module.scss';
interface PronounceProps {
    text:string
}

const Pronounce: React.FC<PronounceProps> = ({text}) => {

    const handlePronounce = () => {
        // event.stopPropagation()
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Speech Synthesis is not supported in this browser.');
        }
    };

    return (
        <div className={styles.pronounce}>
            <button onClick={handlePronounce}>
                Pronounce
            </button>
        </div>
    );
};

export default Pronounce;
