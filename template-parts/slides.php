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

    <div class="section__wrap first">
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
    </div>

    <div class="section__wrap second">
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
                <img class="product__shot" src="<?php echo $construction['image']['sizes']['large']; ?>" alt="<?php echo $construction['alt']; ?>">
            </div>
        </div>
    </div>

    <div class="section__wrap third">
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

    <div class="section__wrap fourth">
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

    <div class="section__wrap fifth">
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