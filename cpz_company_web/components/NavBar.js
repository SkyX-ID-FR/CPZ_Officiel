/* 
  _______ _______ _______     _______  ___  ___ __      __       __ 
 |   _   |   _   |   _   |   |   _   .'  _.'  _|__.----|__.-----|  |
 |.  1___|.  1   |___|   |   |.  |   |   _|   _|  |  __|  |  -__|  |
 |.  |___|.  ____|/  ___/    |.  |   |__| |__| |__|____|__|_____|__|
 |:  1   |:  |   |:  1  \    |:  1   | Version 1.0                       
 |::.. . |::.|   |::.. . |   |::.. . | By XlaTor & SkyX-ID-FR                               
 `-------`---'   `-------'   `-------'   
*/

import $ from 'jquery';
import React, { useState, useEffect } from 'react';

export default function NavBar() {
    useEffect(() => {
        $('#caddie_icon').click(function() { $('#checkout_sidebar').addClass('open'); });
        $('#love_icon').click(function() { $('#love_item_sidebar').addClass('open'); });
        $('.close').click(function() { $('.sidebar').removeClass('open'); });
    });

    return (
        <section id='navbar'>
            <img src='https://zupimages.net/up/23/04/eb3o.png' className='logo_app' alt='logo_app'/>
            <svg className='search_icon' viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Recherchez votre produit ici !" className='search_bar'/>

            <button title="Voir toutes mes commandes !" id='caddie_icon'><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></button>
            <button title="Retrouvez tout les articles aimés !" id="love_icon"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
            
            <div className="sidebar" id="checkout_sidebar">
                <h1>🛒 · Mes commandes :</h1>
                <button className="close"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
            </div>

            <div className="sidebar" id="love_item_sidebar">
                <h1><font color="red">❤</font> · Mes produits préférés :</h1>
                <button className="close"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
            </div>
        </section>
    )
}