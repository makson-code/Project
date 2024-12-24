import React from 'react';
import s from './Card1.module.scss'
import { NavLink } from 'react-router-dom';

export const Card = ({data}) => {
    return(
        <NavLink className={s.wrapper} to={'/character/' + data.id}>
            <div className={s.imgWrap}>
                <img src={data.image} alt="" />
            </div>
        </NavLink>
    )
}