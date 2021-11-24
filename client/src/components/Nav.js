import React from "react";
import { Link } from "react-router-dom";

const Nav= () => {
    return (
        <ul class="nav">
            <li class="nav-item">
                 <Link class="nav-link active" aria-current="page" to="/">
                     Home
                     </Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/register">
                            Sign up
                            </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">
                                    Login
                                    </Link>
                                    </li>
                                            </ul>
                                             );
                                            };

export default Nav;