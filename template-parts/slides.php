<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasenpeterson
 * Date: 11/6/17
 * Time: 1:01 PM
 */

$current_page = sanitize_post($GLOBALS['wp_the_query']->get_queried_object());
$page_id = $current_page->ID;
$introduction = get_field('introduction', $page_id);
$construction = get_field('construction', $page_id);

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
    </div>
    <div class="construction__wrap section__wrap dark__theme section interior" id="construction" data-id="2">
        <div class="section__title__wrap section__title__construction">
            <div class="wrap">
                <h1 class="scroll__button" data-id="construction">
                    <span class="visible">Construction</span>
                </h1>
            </div>
        </div>
        <div class="grid__wrap">
            <div class="cell">
                <h5>
                    <?php echo $construction['title']; ?>
                </h5>
                <span class="line"></span>
                <div class="content__wrap">
                    <?php echo $construction['content']; ?>
                </div>
            </div>
            <div class="cell">
                <img class="product__shot" src="<?php echo $construction['image']['sizes']['large']; ?>" alt="<?php echo $construction['alt']; ?>">
            </div>
        </div>
    </div>
    <div class="durability__wrap section__wrap dark__theme section interior" id="durability" data-id="3">
        <div class="section__title__wrap section__title__construction">
            <div class="wrap">
                <h1 class="scroll__button" data-id="construction">
                    <span class="visible">Durability</span>
                </h1>
            </div>
        </div>
        <div class="grid__wrap">
            <div class="cell">
                <h5>
                    <?php echo $construction['title']; ?>
                </h5>
                <span class="line"></span>
                <div class="content__wrap">
                    <?php echo $construction['content']; ?>
                </div>
            </div>
            <div class="cell">
                <img class="product__shot" src="<?php echo $construction['image']['sizes']['large']; ?>" alt="<?php echo $construction['alt']; ?>">
            </div>
        </div>
    </div>