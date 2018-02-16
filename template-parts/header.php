<button class="mobile__menu__button">
    <div class="bar"></div>
</button>
<div class="contact__button" data-id="5">
    Contact
</div>
<header class="header">
    <div class="grid">
        <div class="column">

            <nav>
                <ul>
                    <li class="active scroll__button" data-id="1">About</li>
                    <li class="scroll__button" data-id="2">Construction</li>
                    <li class="scroll__button" data-id="3">Durability</li>
                    <li class="scroll__button" data-id="4">Service</li>
                    <li class="scroll__button" data-id="5">Contact</li>
                </ul>
            </nav>
        </div>
        <div class="column">
            <div class="social__icon__wrap">
                <ul>
                    <li>
                        <a class="active" href="<?php echo get_field('linkedin', 'option');?>">
                            <i class="fa fa-linkedin"></i>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo get_field('facebook', 'option');?>">
                            <i class="fa fa-facebook"></i>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo get_field('youtube', 'option');?>">
                            <i class="fa fa-youtube"></i>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo get_field('twitter', 'option');?>">
                            <i class="fa fa-twitter"></i>
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
<div class="mobile__menu__wrap">
    <nav>
        <ul>
            <li class="active scroll__button" data-id="1">Introduction</li>
            <li class="scroll__button" data-id="2">Innovation</li>
            <li class="scroll__button" data-id="3">Resilience</li>
            <li class="scroll__button" data-id="4">Service</li>
            <li class="scroll__button" data-id="5">Contact</li>
        </ul>
        <div class="social__icon__wrap">
            <ul>
                <li>
                    <a class="active" href="<?php echo get_field('linkedin', 'option');?>">
                        <i class="fa fa-linkedin"></i>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo get_field('facebook', 'option');?>">
                        <i class="fa fa-facebook"></i>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo get_field('youtube', 'option');?>">
                        <i class="fa fa-youtube"></i>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="<?php echo get_field('twitter', 'option');?>">
                        <i class="fa fa-twitter"></i>
                        <span></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <button class="close__button" id="close__button">Close Menu</button>
</div>