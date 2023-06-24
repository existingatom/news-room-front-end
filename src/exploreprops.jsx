import React from 'react';
import './exploreprops.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function Explore(props) {
    const { journalist, writeup, email, number } = props;

    const [clike, setClike] = useState(false);
    const [count, setCount] = useState(100);

    const handleClick = () => {
        if (clike) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setClike(!clike);
    };

    return (
        <div className="explorebox">
            <div className="dp-journalist">
                <div className="dp-class"><Icon icon="healthicons:ui-user-profile" className="dp" /></div>
                <div className="journalist">{journalist}</div>
            </div>
            <div className="write-up">{writeup}</div>
            <div className='comments'>
                <div className="likes"><Icon icon="ion:heart" onClick={handleClick} className={clike ? "like" : "notlike"} /></div>
                <div className="gmail"><a href={email}><Icon icon="websymbol:mail" className="g-mail" /></a></div>
                <div className="number"><a href={number}><Icon icon="heroicons:phone" className="phoneno" /></a></div>
            </div>
        </div>
    )
}

export default Explore;