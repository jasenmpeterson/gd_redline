<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasenpeterson
 * Date: 11/6/17
 * Time: 1:01 PM
 */
// FIXME: Sharper 'Durability' Background Image

$current_page = sanitize_post($GLOBALS['wp_the_query']->get_queried_object());
$page_id = $current_page->ID;
$introduction = get_field('introduction', $page_id);
$construction = get_field('construction', $page_id);
$durability = get_field('durability', $page_id);
$service = get_field('service', $page_id);
$contact = get_field('contact', $page_id);

$construction_attachments = $construction['attachments'];

?>

    <div class="section__wrap first" data-id="1" id="introduction" data-emergence="hidden">
        <div class="grid">
            <div class="column">
                <!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="redline__logo mobile" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 576 252" style="enable-background:new 0 0 576 252;" xml:space="preserve">
    <g>
        <g>
            <path class="st0" d="M177.3,183.9h4c2.4,0,3.5,1.2,3.5,2.6c0,1.4-0.9,2.3-2.2,2.6c0.9,0.4,1.5,1,1.5,2.1c0,1.9-1.6,3.2-4.5,3.2
			h-5.1L177.3,183.9z M180,192.3c1.1,0,1.9-0.5,1.9-1.3c0-0.6-0.5-1-1.4-1h-2.5l-0.6,2.3H180z M180.7,188.1c1.2,0,1.9-0.4,1.9-1.3
			c0-0.5-0.4-0.9-1.4-0.9H179l-0.6,2.2H180.7z"></path>
            <path class="st0" d="M199.4,190.2l-2.2-6.3h2.5l1.2,4.3l3.6-4.3h2.8l-5.7,6.5l-1.1,3.9h-2.3L199.4,190.2z"></path>
            <path class="st0" d="M228,190c0-3.2,2.7-6.2,6.5-6.2c2.2,0,3.5,0.8,4.2,1.8l-1.7,1.5c-0.6-0.7-1.4-1.2-2.7-1.2
			c-2.2,0-3.9,1.9-3.9,4.1c0,1.6,1.2,2.5,2.7,2.5c0.8,0,1.4-0.2,1.9-0.4l0.5-1.7h-2.3l0.5-2h4.5l-1.5,5.2c-1,0.6-2.2,1-3.8,1
			C230.5,194.5,228,193.1,228,190z"></path>
            <path class="st0" d="M254.5,183.9h2.2l1.6,10.5H256l-0.3-2.3h-4.4l-1.6,2.3h-2.5L254.5,183.9z M255.4,190l-0.5-3.4l-2.3,3.4H255.4
			z"></path>
            <path class="st0" d="M272.2,183.9h3.8c1.5,0,2.6,0.3,3.3,1c0.5,0.5,0.8,1.2,0.8,2.1c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,1-2.4,1.2
			l1.8,3.5h-2.6l-1.6-3.3h-1.7l-0.9,3.3h-2.3L272.2,183.9z M275.2,189c0.9,0,1.6-0.2,2.1-0.7c0.3-0.3,0.4-0.6,0.4-1.1
			c0-0.4-0.1-0.6-0.3-0.8c-0.3-0.3-0.8-0.4-1.5-0.4H274l-0.8,3H275.2z"></path>
            <path class="st0" d="M293.1,183.9h3c2,0,3.3,0.5,4.1,1.3c0.8,0.8,1.1,1.8,1.1,3c0,1.6-0.6,3-1.7,4.1c-1.2,1.2-3,1.9-5.4,1.9h-3.9
			L293.1,183.9z M294.4,192.3c1.4,0,2.6-0.4,3.5-1.3c0.7-0.7,1-1.6,1-2.6c0-0.7-0.2-1.3-0.6-1.6c-0.5-0.5-1.2-0.8-2.4-0.8h-1.1
			l-1.7,6.3H294.4z"></path>
            <path class="st0" d="M315.3,183.9h2.1l3,6.6l1.8-6.6h2.3l-2.8,10.4h-1.9l-3.1-6.8l-1.8,6.8h-2.3L315.3,183.9z"></path>
            <path class="st0" d="M338,183.9h7.8l-0.5,2h-5.5l-0.6,2.1h4.8l-0.5,2h-4.8l-0.6,2.2h5.6l-0.5,2h-7.8L338,183.9z"></path>
            <path class="st0" d="M358.8,183.9h3.8c1.5,0,2.6,0.3,3.3,1c0.5,0.5,0.8,1.2,0.8,2.1c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,1-2.4,1.2
			l1.8,3.5h-2.6l-1.6-3.3h-1.7l-0.9,3.3H356L358.8,183.9z M361.8,189c0.9,0,1.6-0.2,2.1-0.7c0.3-0.3,0.4-0.6,0.4-1.1
			c0-0.4-0.1-0.6-0.3-0.8c-0.3-0.3-0.8-0.4-1.5-0.4h-1.9l-0.8,3H361.8z"></path>
            <path class="st0" d="M393,183.9h3c2,0,3.3,0.5,4.1,1.3c0.8,0.8,1.1,1.8,1.1,3c0,1.6-0.6,3-1.7,4.1c-1.2,1.2-3,1.9-5.4,1.9h-3.9
			L393,183.9z M394.4,192.3c1.4,0,2.6-0.4,3.5-1.3c0.7-0.7,1-1.6,1-2.6c0-0.7-0.2-1.3-0.6-1.6c-0.5-0.5-1.2-0.8-2.4-0.8h-1.1
			l-1.7,6.3H394.4z"></path>
            <path class="st0" d="M415.8,183.9h7.8l-0.5,2h-5.5l-0.6,2.1h4.8l-0.5,2h-4.8l-0.6,2.2h5.6l-0.5,2h-7.8L415.8,183.9z"></path>
            <path class="st0" d="M437.3,183.9h2.1l3,6.6l1.8-6.6h2.3l-2.8,10.4h-1.9l-3.1-6.8l-1.8,6.8h-2.3L437.3,183.9z"></path>
            <path class="st0" d="M457.9,183.9h2.4l0.7,7.2l4.6-7.2h2.6l-7,10.5h-2L457.9,183.9z"></path>
            <path class="st0" d="M480.2,183.9h7.8l-0.5,2h-5.5l-0.6,2.1h4.8l-0.5,2h-4.8l-0.6,2.2h5.6l-0.5,2h-7.8L480.2,183.9z"></path>
            <path class="st0" d="M500.7,183.9h3.8c1.5,0,2.6,0.3,3.3,1c0.5,0.5,0.8,1.2,0.8,2.1c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,1-2.4,1.2
			l1.8,3.5h-2.6l-1.6-3.3h-1.7l-0.9,3.3h-2.3L500.7,183.9z M503.7,189c0.9,0,1.6-0.2,2.1-0.7c0.3-0.3,0.4-0.6,0.4-1.1
			c0-0.4-0.1-0.6-0.3-0.8c-0.3-0.3-0.8-0.4-1.5-0.4h-1.9l-0.8,3H503.7z"></path>
        </g>
        <g>
            <g>
                <g>
                    <path class="st0" d="M81.5,101.5c-0.8-3.4-2.4-6.5-4.8-8.9c-4.7-4.7-12.5-7.4-24.3-7.4H25.8l-4.4,16.3H81.5z"></path>
                </g>
            </g>
            <g>
                <g>
                    <polygon class="st0" points="162.9,101.5 167.4,85.2 110.8,85.2 106.5,101.5 				"></polygon>
                </g>
            </g>
            <g>
                <g>
                    <path class="st0" d="M245.7,101.5c-1.2-2.7-2.9-5.1-5-7.2c-5.3-5.3-13.9-9.1-27.6-9.1h-22.8l-4.4,16.3H245.7z"></path>
                </g>
            </g>
            <g>
                <g>
                    <path class="st0" d="M81.5,112.9H18.4L6.9,155.8h19.6l5.7-21.4h8.7l9.4,21.4h21.6L61,132C72.9,128.7,79.6,121.8,81.5,112.9z"></path>
                </g>
            </g>
            <g>
                <g>
                    <polygon class="st0" points="118.7,128 152.3,128 156.4,112.9 103.4,112.9 91.9,155.8 148.9,155.8 153.4,139.1 115.7,139.1
					"></polygon>
                </g>
            </g>
            <g>
                <g>
                    <path class="st0" d="M227.9,112.9c0.2,1.1,0.4,2.4,0.4,3.7c0,5.5-2.3,11-6,14.7c-4.6,4.6-12,7.2-20.1,7.2h-6.4l6.9-25.6h-19.7
					l-11.5,42.9h28.4c16.3,0,28.5-4.5,37-13c7.6-7.6,11.6-17.2,11.6-27.8c0-0.7,0-1.4-0.1-2.1H227.9z"></path>
                </g>
            </g>
        </g>
        <g>
            <g>
                <path class="st0" d="M553.5,86.9h-2.6l0.5-1.8h7.2l-0.5,1.8h-2.6l-1.9,7h-2L553.5,86.9z M560.4,85.1h2l1.3,3.7l3.3-3.7h2.2
				l-2.4,8.7h-1.9l1.6-5.9l-3.4,3.8h-0.2l-1.4-3.8l-1.6,5.9H558L560.4,85.1z"></path>
            </g>
        </g>
        <g>
            <g>
                <path class="st0" d="M281.1,85.2h19.6l-14.3,53.4h33.6l-4.6,17.1h-53.3L281.1,85.2z"></path>
            </g>
        </g>
        <g>
            <g>
                <path class="st0" d="M355.8,85.2h19.5l-18.9,70.5h-19.5L355.8,85.2z"></path>
            </g>
        </g>
        <g>
            <g>
                <path class="st0" d="M398.1,85.2h18.2l18.2,39.2l10.6-39.2h19.4l-18.9,70.5h-17.1l-19-40.6l-10.9,40.6h-19.4L398.1,85.2z"></path>
            </g>
        </g>
        <g>
            <g>
                <path class="st0" d="M486.9,85.2h56.5l-4.5,16.6h-37.1l-2.9,10.7h33.6l-4.1,15.4h-33.6l-3,11.2h37.7l-4.4,16.6h-57L486.9,85.2z"
                ></path>
            </g>
        </g>
    </g>
</svg>
            </div>
        </div>
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $introduction['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $introduction['content']; ?>
                <a href="#" class="video__thumbnail">
                    <div class="thumbnail">
                        <img src="<?php echo get_template_directory_uri() ;?>/assets/img/raw/video_thumbnail.jpg">
                        <svg width="30" viewBox="0 0 20 20" class="play__button"><title>Play</title> <path d="M15 10l-9 5v-10l9 5z"></path>
                    </div>
                    <div class="content">
                        <div class="content__title">
                            Watch Overview
                        </div>
                    </div>
                </a>
            </div>
            <div class="column">
                <img class="product__shot" src="<?php echo $introduction['image']['sizes']['large']; ?>">
            </div>
        </div>

        <div class="mousey">
            <div class="scroller"></div>
        </div <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.1 40.76" class="gd__redline__watermark">
        <defs>
            <clipPath id="a" transform="translate(-247.9 -219.24)">
                <path fill="none" d="M248 219h143v41H248z"></path>
            </clipPath>
        </defs>
        <path fill="#000000" d="M.1 20.76h137v3H.1z"></path>
        <g clip-path="url(#a)" fill="#000000">
            <path d="M92.1 18.76h5v-4.87c.11-2.83 1.18-3.83 3.31-3.83.35 0 1.69.15 1.69.15V4.76a7 7 0 0 0-.71-.07 4.13 4.13 0 0 0-4.23 3h-.06v-2h-5zm-1.05-6c.07-4.48-2.86-7.83-7.71-7.83-4.21 0-7.44 2.75-7.44 7.06s3.26 6.81 7.46 6.81c3.05 0 6.36-1.08 7.26-5h-5c-.37 1.48-1.13 1.86-2 1.86a2.61 2.61 0 0 1-2.52-2.9zm-9.95-2a2.16 2.16 0 0 1 2.43-2.28 2.36 2.36 0 0 1 2.3 2.28zm-20 8h5v-6.69c0-1.68.44-2.7 2.1-2.7s1.9 1.15 1.9 2.45v6.94h5V10.9c0-3.61-1.54-5.63-4.81-5.63A4.81 4.81 0 0 0 66.1 7.7V5.76h-5zm-9-3.72c-1.7 0-2.05-1.6-2.05-3s.48-3.11 2.2-3.11 2.23 1.58 2.23 3-.58 3.05-2.38 3.05m8 3.72V.76h-6v5.87a4.08 4.08 0 0 0-3.74-1.7c-3.13 0-5.56 2.83-5.56 7.19 0 3.71 2 6.69 6 6.69 1.68 0 4.34-2.13 4.34-2.13v2.08zm-25 0h6v-4.53c0-2.83 1-3.83 3-3.83a7 7 0 0 1 1 .15V4.76a7 7 0 0 0-.71-.07 4.13 4.13 0 0 0-4.24 3h-.05v-2h-5zm-8.58-2.91c-1 0-1.65-.45-1.65-1.1 0-1.7 2.25-1.3 4-2.13.13 1.8-.48 3.23-2.3 3.23m8.53 2.97v-.59c-1-.55-1.07-.93-1-1.68v-6.13c-.07-3.13-.45-5.43-6.66-5.43-5.18 0-7.16 1.63-7.16 4.83h5a1.61 1.61 0 0 1 1.83-1.7c.55 0 1.7.13 1.7 1.08 0 2.45-9.34-.25-9.34 5.71 0 2.73 2.2 4 4.68 4a6.56 6.56 0 0 0 4.93-1.78l.25 1.74zm-17-10h-8v4h2.69a3.31 3.31 0 0 1-3.13 2.15c-3.08 0-3.91-2.4-3.91-5 0-3.28 1.14-5.46 3.54-5.46a3 3 0 0 1 3.13 2.35h5.75C17.43 2.32 13.92.04 9.54.04 3.64.04 0 4.04 0 9.86c0 6.35 4.18 9.37 8.84 9.37A6.74 6.74 0 0 0 14.33 17l.23 1.8h3.54zm115 32h6v-4.53c0-2.83 1-3.83 3-3.83a6.87 6.87 0 0 1 1 .15v-5.79a6.76 6.76 0 0 0-.71-.08 4.13 4.13 0 0 0-4.24 3h-.05v-2h-5zm-.65-6c.08-4.57-2.85-7.92-7.71-7.92-4.21 0-7.44 2.75-7.44 7.06s3.26 6.81 7.46 6.81c3.05 0 6.36-1.08 7.26-4.95h-5c-.37 1.39-1.13 1.77-2 1.77a2.58 2.58 0 0 1-2.58-2.77zm-9.94-2a2.16 2.16 0 0 1 2.43-2.28 2.36 2.36 0 0 1 2.3 2.28zm-15.32 8h5.75l4.39-13h-5l-2.23 8.21-2.27-8.21h-5.16zm-19.09 0h5v-6.69c0-1.68.44-2.7 2.1-2.7s1.9 1.15 1.9 2.45v6.94h5V32.9c0-3.61-1.71-5.63-5.34-5.63a5.48 5.48 0 0 0-4.66 2.43v-1.94h-4zm-1-6c.08-4.57-2.85-7.92-7.71-7.92-4.21 0-7.44 2.75-7.44 7.06s3.25 6.81 7.46 6.81c3.06 0 6.36-1.08 7.26-4.95h-5c-.37 1.39-1.13 1.77-2 1.77a2.58 2.58 0 0 1-2.58-2.77zm-9.94-2a2.16 2.16 0 0 1 2.43-2.28 2.36 2.36 0 0 1 2.3 2.28zm-15.34 8c5.77 0 9.55-2.6 9.55-9.38 0-5.92-3.6-8.62-9.4-8.62H54.1v18zm-1.72-14h1.17c3.28 0 4.56 1 4.56 4.95 0 3.54-1.56 5.05-4.43 5.05h-1.3z"></path>
        </g>
        </svg>
    </div>

    <div class="section__wrap second dark" data-id="2" id="innovation" data-emergence="hidden">
        <div class="section__title">
            <h6><?php echo $construction['title']; ?></h6>
        </div>
        <div class="video__bg">
            <video loop>
                <source src="<?php echo get_template_directory_uri() ;?>/assets/mp4/GD_Rings_explode.mp4">
            </video>
        </div>
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $construction['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $construction['content']; ?>
                <div class="attachment__wrap">
                    <a target="_blank" href="<?php echo $construction_attachments[0]['attachment']['url']; ?>">
                        <div class="cell">
                            <span class="line"></span>
                            <img src="<?php echo get_template_directory_uri() ;?>/assets/img/file-icon.svg" alt="">
                        </div>
                        <div class="cell">
                            <p>GD Packing Spec Sheet</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="section__wrap third dark" data-id="3" id="resilience" data-emergence="hidden">
        <div class="section__title">
            <h6>
                <?php echo $durability['title']; ?>
            </h6>
        </div>
        <div class="video__bg">
            <video loop>
                <source src="<?php echo get_template_directory_uri() ;?>/assets/mp4/GD_PACKING_VIDEO.mp4">
            </video>
            <div class="bg" style="background: url(<?php echo $durability['image']['url']; ?>)" alt=""></div>
        </div>
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $durability['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $durability['content']; ?>
            </div>
        </div>
    </div>

    <div class="section__wrap fourth dark" data-id="4" id="service" data-emergence="hidden">
        <div class="section__title">
            <h6>
                <?php echo $service['title']; ?>
            </h6>
        </div>
        <?php 
            $index = 0;
            foreach($service['images'] as $image) {
                echo '<div class="bg" style="background: url('.$image['image'].');"></div>';
                $index++;
            }
        ?>
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $service['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $service['content']; ?>
            </div>
        </div>
    </div>

    <div class="section__wrap fifth" data-id="5" id="contact" data-emergence="hidden">
        <div class="section__title">
            <h6>
                <?php echo $contact['title']; ?>
            </h6>
        </div>
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $contact['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $contact['content']; ?>
            </div>
            <div class="column">
                <?php echo do_shortcode( '[contact-form-7 id="99" title="Contact form 1"]' ); ?>
            </div>
        </div>
    </div>