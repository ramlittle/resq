import React from 'react';
import logo from '../assets/1.png';

const Footer = () => {
  return (
    <div class="container footer">
        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top">
            <div class="col-md-4 d-flex align-items-center d-flex justify-content-center">
                <span class="mb-1 mb-md-0 text-muted">&copy; 2022 RESQ</span>
            </div>
            <div>
                <a href='http://localhost:3000/'>
                    <img src={logo} alt='Footer Logo' width='50'/>
                </a>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"> <i class="bi bi-github"></i> </a></li>
            <li class="ms-3"><a class="text-muted" href="#"> <i class="bi bi-facebook"></i> </a></li>
            <li class="ms-3"><a class="text-muted" href="#"> <i class="bi bi-envelope-fill"></i> </a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer;