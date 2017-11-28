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

<div class="section__wrap introduction__wrap section" id="introduction" data-id="introduction-section">
	<div class="grid__wrap">
		<div class="cell">
            <span class="line"></span>
			<?php echo $introduction['content']; ?>
		</div>
		<div class="cell">
			<img class="product__shot" src="<?php echo $introduction['image']['sizes']['large']; ?>" alt="<?php echo $introduction['alt']; ?>">
		</div>
	</div>
</div>
<div class="section__wrap construction__wrap dark__theme section" id="construction" data-id="construction-section">
        <div class="section__title__wrap">
            <div class="wrap">
                <h1 class="scroll__button" data-id="construction">Construction</h1>
            </div>
        </div>
    <div class="grid__wrap">
        <div class="cell">
            <h5><?php echo $construction['title']; ?></h5>
            <span class="line"></span>
			<?php echo $construction['content']; ?>
        </div>
        <div class="cell">
            <img src="<?php echo $construction['image']['sizes']['large']; ?>" alt="<?php echo $construction['alt']; ?>">
        </div>
    </div>
</div>