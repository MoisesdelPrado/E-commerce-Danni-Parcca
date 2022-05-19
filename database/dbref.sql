USE danni_parcca;

DESC Product;
SELECT * FROM Users;

DESC Product; 
SELECT * FROM Product;

INSERT INTO Users (Username, Password, Type)
VALUES ("Moises", "L4ssTM1rN1cht!", 1);
 
INSERT INTO Product (Product_name, Description, Category, Flavor, Price, Image_src)
VALUES ("Acid-free Porefiner", "A gentle non-acidic exfoliating liquid that effectively dissolves dry skin", "Porefiner", "Meadows", 505, "/Pics/Acid-Free-Porefiner"),
	("Bubble Splash Face Wash (100mL)", "A sulfate-free gel foaming cleanser for clean, supple skin", "Facewash", "Waterfall", 345, "/Pics/Bubble-Splash-Face-Wash-(100mL)"),
       ("Bubble Splash Face Wash (250mL)", "A sulfate-free gel foaming cleanser for clean, supple skin", "Facewash", "Waterfall", 805, "/Pics/Bubble-Splash-Face-Wash-(250mL)"),
	("Charcoal Detox Face Wash (100mL)", "A deep foaming cleanser that purges skin of oil, debris, and bacteria", "Facewash", "Summit", 345, "/Pics/Charcoal-Detox-Face-Wash-(100mL)"),
       ("Charcoal Detox Face Wash (250mL)", "A deep foaming cleanser that purges skin of oil, debris, and bacteria", "Facewash", "Summit", 805, "/Pics/Charcoal-Detox-Face-Wash-(250mL)"),
       ("Citrus Peel Squeeze Mist", "A hydrating citrus mist for a refreshed, visibly brighter complexion", "Mist", "Waterfall", 405, "/Pics/Citrus-Peel-Squeeze-Mist"),
       ("Cooling Soft-Sugar Scrub", "An exfoliating sugar scrub for residue-free, smooth, and refreshed skin", "Scrub", "Summit", 495, "/Pics/Cooling Soft-Sugar Scrub"),
       ("Breakfast Bowl Morning Mask", "A highly nutritious breakfast mask to relax pores and refine texture", "Mask", "Fields", 645, "/Pics/Breakfast-Bowl-Morning-Mask"),
       ("Flourishing Shampoo", "A sulfate-free hair cleanser that imparts healthy volume and thickness", "Shampoo", "Fields", 605, "/Pics/Flourishing Shampoo"),
       ("Fragrant Soft-Sugar Scrub", "A sugar skin scrub with an energizing fragrance for plump, silky skin", "Scrub", "Farmland", 495, "/Pics/Fragrant Soft-Sugar Scrub"),
       ("Fragrant Soft-Sugar Scrub (700g)", "A sugar skin scrub with an energizing fragrance for plump, silky skin", "Scrub", "Farmland", 2495, "/Pics/Fragrant-Soft-Sugar-Scrub-(700g)"),
       ("Kiss Tint Soft-Sugar Scrub in Bubblegum", "An edible lip exfoliator for ultimate softness with a subtle hue", "Scrub", "Bubblegum", 405, "/Pics/Kiss Tint Soft-Sugar Scrub in Bubblegum"),
       ("Kiss Tint Soft-Sugar Scrub in Strawberry", "An edible lip exfoliator for ultimate softness with a subtle hue", "Scrub", "Strawberry", 405, "/Pics/Kiss Tint Soft-Sugar Scrub in Strawberry"),
       ("Kiss Tint Soft-Sugar Scrub in Sunkissed", "An edible lip exfoliator for ultimate softness with a subtle hue", "Scrub", "Sunkissed", 405, "/Pics/Kiss Tint Soft-Sugar Scrub in Sunkissed"),
       ("Enzyme Slime Cleanser (100ml)", "An all-natural foaming gel cleanser that cleans, calms, and hydrates your skin", "Cleanser", "Meadows", 345, "/Pics/Meadows-Enzyme-Slime-Cleanser-100"),
       ("Milky Soft-Sugar Scrub", "A soft sugar scrub to melt away skin impurities for delicious smoothness", "Scrub", "Fields", 495, "/Pics/Milky Soft-Sugar Scrub"),
       ("Milky Soft-Sugar Scrub (700g)", "A moisturizing sugar scrub that calms sensitivity for a goddess glow", "Scrub", "Fields", 2495, "/Pics/Milky-Soft-Sugar-Scrub-(700g)"),
       ("Mineral Morning Rinse", "A gentle no-soap gel cleanser that deeply hydrates skin while controlling sebum for a clean and shine-free glow that lasts all day", "Cleanser", "Waterfall", 405, "/Pics/Mineral-Morning-Rinse"),
       ("Oatmeal Milky Shower Gel (150ml)", "A sulfate-free body cleansing milk for squeaky clean yet extra soft skin", "Showergel", "Fields", 605, "/Pics/Oatmeal-Milky-Shower-Gel-(150mL)"),
       ("Oatmeal Milky Shower Gel (500mL)", "An all-natural milky, moisturizing gel that provides a skin-soothing shower experience", "Showergel", "Fields", 1495, "/Pics/Oatmeal-Milky-Shower-Gel-500"),
       ("Oatmeal Moist Face Wash (100ml)", "A gentle facial cleanser that soothes and moisturizes skin", "Facewash", "Fields", 345, "/Pics/Oatmeal-Moist-100"),
       ("Oatmeal Moist Face Wash (250mL)", "A gentle facial cleanser that soothes and moisturizes skin", "Facewash", "Fields", 805, "/Pics/Oatmeal-Moist-250"),
       ("Plunge Deep Essence", "An essence that relaxes skin for a bright, redness-free complexion", "Facewash", "Fields", 805, "Pics/Plunge-Deep-Essence"),
       ("Pore-fying Tonic", "A gentle triple hydroxy-acid toner that helps you achieve clearer, smoother, brighter skin", "Tonic", "Waterfall", 508, "/Pics/Pore-fying-Tonic"),
       ("Pore-ging Tonic", "An exfoliating liquid that dissolves impurities deep within pores", "Tonic", "Summit", 408, "/Pics/Pore-ging-Tonic"),
       ("Vanishing Serum", "A serum that makes spots vanish for visibly clearer and brighter skin", "Serum", "Summit", 305, "/Pics/Vanishing-Serum"),
       ("Vibrancy Serum", "A serum with water-soluble antioxidants for your healthiest glow ever", "Serum", "Farmland", 608, "/Pics/Vibrancy-hero"),
       ("Vitamin Serum", "A stabilized vitamin c and niacinamide elixir, this serum brightens while minimizing eye bags, wrinkles, and sagging skin. It’s loaded with age-defying antioxidants to protect against the harmful effects of environmental stress, ultimately leading to firmer skin.", "Serum", "Waterfall", 608, "/Pics/Vitamin-Serum");

UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Acid-Free-Porefiner' WHERE (`Id` = '1');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Bubble-Splash-Face-Wash-(100mL)' WHERE (`Id` = '2');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Bubble-Splash-Face-Wash-(250mL)' WHERE (`Id` = '3');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Charcoal-Detox-Face-Wash-(100mL)' WHERE (`Id` = '4');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Charcoal-Detox-Face-Wash-(250mL)' WHERE (`Id` = '5');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Citrus-Peel-Squeeze-Mist' WHERE (`Id` = '6');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Cooling Soft-Sugar Scrub' WHERE (`Id` = '7');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Breakfast-Bowl-Morning-Mask' WHERE (`Id` = '8');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Flourishing Shampoo' WHERE (`Id` = '9');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Fragrant Soft-Sugar Scrub' WHERE (`Id` = '10');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Fragrant-Soft-Sugar-Scrub-(700g)' WHERE (`Id` = '11');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Kiss Tint Soft-Sugar Scrub in Bubblegum' WHERE (`Id` = '12');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Kiss Tint Soft-Sugar Scrub in Strawberry' WHERE (`Id` = '13');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Kiss Tint Soft-Sugar Scrub in Sunkissed' WHERE (`Id` = '14');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Meadows-Enzyme-Slime-Cleanser-100' WHERE (`Id` = '15');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Milky Soft-Sugar Scrub' WHERE (`Id` = '16');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Milky-Soft-Sugar-Scrub-(700g)' WHERE (`Id` = '17');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Mineral-Morning-Rinse' WHERE (`Id` = '18');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Oatmeal-Milky-Shower-Gel-(150mL)' WHERE (`Id` = '19');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Oatmeal-Milky-Shower-Gel-500' WHERE (`Id` = '20');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Oatmeal-Moist-100' WHERE (`Id` = '21');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Oatmeal-Moist-250' WHERE (`Id` = '22');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Plunge-Deep-Essence' WHERE (`Id` = '23');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Pore-fying-Tonic' WHERE (`Id` = '24');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Pore-ging-Tonic' WHERE (`Id` = '25');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Vanishing-Serum' WHERE (`Id` = '26');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Vibrancy-hero' WHERE (`Id` = '27');
UPDATE `danni_parcca`.`Product` SET `Image_src` = '/Pics/Vitamin-Serum' WHERE (`Id` = '28');
       
       
        