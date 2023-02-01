import React, { useState } from 'react';
// import './nav.css';
import './Multilevel.css';

const Multilevel = () => {
    const [isMousedOn, setIsMousedOn] = useState(false);
    document.getElementById('1').addEventListener('mouseenter', () => {
        setIsMousedOn(true);
    });
    document.getElementById('1').removeEventListener('mouseout', () => {
        setIsMousedOn(false);
    });

    const MouseOver = () => {
        setIsMousedOn(!isMousedOn);
    }
    return (
        <div className='bg-warning' style={{ position: 'relative' }} >
            <nav id="menu" className='d-flex flex-row justify-content-between align-items-center p-2'>
                <div>Menu 1</div>
                <div id='1' onClick={MouseOver}>Menu 2
                    <section className={`${isMousedOn ? 'd-block' : 'd-none'}`} style={{ position: 'relative', top: '20px' }} id='Submenu'>
                        <div>Submenu 1</div>
                        <div>Submenu 2</div>
                        <div>Submenu 3</div>
                        <div>Submenu 4</div>
                    </section>
                </div>
                <div>Menu 3</div>
                <div>Menu 4</div>
                <div>Menu 5</div>
            </nav>


        </div>
    );
};

export default Multilevel;