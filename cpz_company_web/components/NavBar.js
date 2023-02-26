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
import React, { useRef, useEffect } from 'react';

function handleKeyPress(event) {
    if (event.key === "p") { document.getElementById("checkout_sidebar").classList.toggle("open"); };
    if (event.key === "f") { document.getElementById("love_item_sidebar").classList.toggle("open"); };
    /* if (event.key == "s") { $(".search_bar").select(); }; */
}

export default function NavBar() {
    useEffect(() => {
        $('#caddie_icon').click(function() { $('#checkout_sidebar').addClass('open'); });
        $('#love_icon').click(function() { $('#love_item_sidebar').addClass('open'); });
        $('.close').click(function() { $('.sidebar').removeClass('open'); });
        $(document).mouseup(function(e) { if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0) {$('.sidebar').removeClass('open')} });

        /* 🎹 Détecter les touches de clavier pour les sidebar et la search_bar (notamment pour les raccoursis) : 🎹 */
        document.addEventListener("keydown", handleKeyPress);
        return () => { document.removeEventListener("keydown", handleKeyPress) };
    });

    return (
        <section id='navbar'>
            <img src='https://zupimages.net/up/23/04/eb3o.png' className='logo_app' alt='logo_app'/>
            <svg className='search_icon' viewBox="0 0 24 24" fill="none" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input title='Appuyez sur le touche S de votre clavier pour mettre directment le curseur dans la barre de recherche...' type="text" placeholder="Recherchez votre produit ici !" className='search_bar'/>

            <button title="Voir toutes mes commandes ! [P]" id='caddie_icon'><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></button>
            <button title="Retrouvez tout les articles aimés ! [F]" id="love_icon"><svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
            <button id='search_icon_responsive'><svg viewBox="0 0 24 24" fill="none" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>

            <div className="sidebar" id="checkout_sidebar">
                <button className="close"><svg viewBox="0 0 24 24" fill="none"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
                <h1>Toutes mes commandes :</h1>
                <span className='explain_text'>Retrouvez-ici toutes vos commandes passées, en cours ou annulées. Si vous ne voyez pas votre commande, n'hésitez pas à rafraîchir la page pour actualiser la liste complète.</span>
            
                <div className='not_found_item_card'>
                    <h1 className='smiley'>¯\_(ツ)_/¯</h1><br/>Rien à afficher pour l'instant !
                </div>
            </div>

            <div className="sidebar" id="love_item_sidebar">
                <button className="close"><svg viewBox="0 0 24 24" fill="none"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
                <h1>Mes produits préférés :</h1>
                <span className='explain_text'>Retrouvez-ici tous vos articles préférés sous forme d'une liste dynamique. Vous pouvez mettre à jour votre liste de favoris à chaque fois que vous cliquez sur l'article qui vous intérrèsse.</span>

                <div className='not_found_item_card'>
                    <h1 className='smiley'>¯\_(ツ)_/¯</h1><br/>Rien à afficher pour l'instant !
                </div>
            </div>
        </section>
    )
}