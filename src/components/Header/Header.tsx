import React, { useState } from "react";
import './header.css'

import { Link } from 'react-router-dom';

export default function Header(){
    const [showlinks, setShowlinks] = useState(false)

    function handleShowlinks(){
        setShowlinks(!showlinks)
    }

    return (
			<header className="header">
				<div className="header__container">
					<div className="header__container__logo">
						<Link to="">SQTDN</Link>
					</div>
					<ul className="header__container__links">
						<li>
							<Link className="header__container__links__link" to="">
								Accueil
							</Link>
						</li>
						<li>
							<Link className="header__container__links__link" to="">
								Boutique
							</Link>
						</li>
					</ul>
				</div>
			</header>
		);
}