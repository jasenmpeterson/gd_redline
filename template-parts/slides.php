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

?>

    <div class="section__wrap first" data="1" id="introduction">
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $introduction['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $introduction['content']; ?>
            </div>
            <div class="column">
                <img class="product__shot" src="<?php echo $introduction['image']['sizes']['large']; ?>" alt="<?php echo $introduction['alt']; ?>">
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

    <div class="section__wrap second" data-id="2" id="construction">
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
                    <a href="">
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

    <div class="section__wrap third" data-id="3" id="durability">
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

    <div class="section__wrap fourth" data-id="4" id="service">
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

    <div class="section__wrap fifth" data-id="5" id="contact">
        <div class="grid">
            <div class="column">
                <h5>
                    <?php echo $contact['title']; ?>
                </h5>
                <span class="line"></span>
                <?php echo $contact['content']; ?>
            </div>
            <div class="column">
                <?php echo do_shortcode( '[contact-form-7 id="4" title="Contact form 1"]' ); ?>
            </div>
        </div>
    </div>