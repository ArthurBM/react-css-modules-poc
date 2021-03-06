import React from 'react';
import Text from '../Text';

import styles from './BoxText.module.css';

function BoxText({text}) {
    return (
        <>
            <div className={styles.myDiv} >
                <h1 className={styles.myText} >{text}</h1>
                <h2>Hy, my name is Arthur</h2>
            </div>
            <Text/>
        </>
    );
}

export default BoxText;