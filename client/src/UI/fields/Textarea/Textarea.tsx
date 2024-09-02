"use client"
import React from 'react';
import styles from './textarea.module.scss';

interface TextareaProps {
    defaultValue: string
}

const Textarea: React.FC<TextareaProps> = ({defaultValue}) => {

    const [value, setValue] = React.useState<string>(defaultValue);
    const [height, setHeight] = React.useState<string>("auto");

    const changeText = (e: any) => {
        const {value} = e.target;
        setValue(value);
    }

    React.useEffect(() => {
        setHeight("auto")
        const textarea = document.querySelector("textArea")
        const _height = textarea.scrollHeight.toString() + "px";
        setHeight(_height)
    }, [value])

    return (
        <div className={styles.Textarea}>
            <textarea
                className={["textArea",styles.textareaField].join(" ")}
                onChange={(e) => changeText(e)}
                style={{height:height}}
            >
                {value}
            </textarea>
        </div>
    );
};

export default Textarea;
