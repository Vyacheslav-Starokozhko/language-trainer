import React from 'react';
import styles from './language.module.scss';
import Textarea from "@/UI/fields/Textarea/Textarea";
import AddLanguage from "@/Components/AddLanguage/AddLanguage";
import Pronounce from "@/Components/Pronounce/Pronounce";
import Select from "@/UI/fields/Select/Select";
interface LanguageProps {

}

const Language: React.FC<LanguageProps> = ({}) => {





    return (
        <div className={styles.language}>
            <Select options={[]}/>
            <Textarea defaultValue=""/>
            <Pronounce text=""/>
            <AddLanguage/>
        </div>
    );
};

export default Language;
