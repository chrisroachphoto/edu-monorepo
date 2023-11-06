import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames/bind'
import { generateColorArray } from '../../utils/generateColors'

const cx = classNames.bind(styles)

type ColorObject = { 
    color: string;
}

export default function gridExample () {
const [gridColors, setGridColors] = useState<ColorObject[]>([]);

useEffect(() => {
    const colorArray = generateColorArray(500)
    setGridColors(colorArray)
}, [])

    return (
        
        <div className={cx('color-grid')}>
           {gridColors.map((object, index) => (
            <li className={cx('color-item')} style={{backgroundColor: object.color}} key={object.color}>
                <div>
                <p>{object.color}</p>
                <p>{`${index}/${gridColors.length}`}</p>
                </div>
            </li>
           ))}
        </div>
    )
}
