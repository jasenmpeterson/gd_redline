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

    <div class="introduction__wrap section__wrap section" id="introduction" data-id="1">
        <div class="grid__wrap">
            <div class="cell">
                <h5>
                    <?php echo $introduction['title']; ?>
                </h5>
                <span class="line"></span>
                <div class="content__wrap">
                    <?php echo $introduction['content']; ?>
                </div>
            </div>
            <div class="cell">
                <img class="product__shot" src="<?php echo $introduction['image']['sizes']['large']; ?>" alt="<?php echo $introduction['alt']; ?>">
            </div>
        </div>
        <div class="mousey">
            <div class="scroller"></div>
        </div>
    </div>
    <div class="construction__wrap section__wrap dark__theme section interior" id="construction" data-id="2">
        <div class="section__title__wrap section__title__construction">
            <div class="wrap">
                <h1 class="scroll__button" data-id="construction">
                    <span class="visible">
                        <?php echo $construction['title']; ?>
                    </span>
                </h1>
            </div>
        </div>
        <div class="grid__wrap">
            <div class="cell content__cell">
                <div class="cell__wrap">
                    <h5>
                        <?php echo $construction['title']; ?>
                    </h5>
                    <span class="line"></span>
                    <div class="content__wrap">
                        <?php echo $construction['content']; ?>
                    </div>
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
            <div class="cell image__cell">
                <img class="product__shot" src="<?php echo $construction['image']['url']; ?>" alt="<?php echo $construction['alt']; ?>">
            </div>
        </div>
    </div>
    <div class="durability__wrap section__wrap dark__theme section interior" id="durability" data-id="3">
        <div class="background__image" style="background: url('<?php echo $durability['image']['url']; ?>')"></div>
        <div class="section__title__wrap section__title__construction">
            <div class="wrap">
                <h1 class="scroll__button" data-id="construction">
                    <span class="visible">
                        <?php echo $durability['title']; ?>
                    </span>
                </h1>
            </div>
        </div>
        <div class="grid__wrap content__only">
            <div class="cell content__cell">
                <h5>
                    <?php echo $durability['title']; ?>
                </h5>
                <span class="line"></span>
                <div class="content__wrap">
                    <?php echo $durability['content']; ?>
                </div>
            </div>
        </div>
    </div>
    <div class="service__wrap section__wrap dark__theme section interior" id="service" data-id="4">
        <?php 
            $index = 0;
            foreach($service['images'] as $image) {
                ?>
        <div class="background__image" style="background: url('<?php echo $image['image']; ?>');"></div>
        <?php
            $index++;
            }
        ?>

            <div class="section__title__wrap section__title__construction">
                <div class="wrap">
                    <h1 class="scroll__button" data-id="construction">
                        <span class="visible">
                            <?php echo $service['title']; ?>
                        </span>
                    </h1>
                </div>
            </div>
            <div class="grid__wrap content__only">
                <div class="cell content__cell">
                    <h5>
                        <?php echo $service['title']; ?>
                    </h5>
                    <span class="line"></span>
                    <div class="content__wrap">
                        <?php echo $service['content']; ?>
                    </div>
                </div>
            </div>
    </div>