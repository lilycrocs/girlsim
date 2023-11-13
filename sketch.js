let isWearingFlats = false;
let isWearingHeels = false;
let isWearingConverse = false;
let isWearingTurtleneck = false;
let isWearingCorset = false;
let isWearingTanktop = false;
let isWearingShortshorts = false;
let isWearingShorts = false;
let isWearingMiniskirt = false;
let isWearingJeans = false;
let isWearingSweats = false;
let isWearingSkirt = false;
let isWearingTopp = false;
let isWearingSweater = false;
let isWearingShirt = false;

let score = 0;

let heelTextPosition1, heelTextPosition2, heelTextPosition3, heelTextPosition4, heelTextPosition5, heelTextPosition6, heelTextPosition7;
let turtleneckTextPosition1, turtleneckTextPosition2, turtleneckTextPosition3, turtleneckTextPosition4, turtleneckTextPosition5, turtleneckTextPosition6, turtleneckTextPosition7;
let corsetTextPosition1, corsetTextPosition2, corsetTextPosition3, corsetTextPosition4, corsetTextPosition5, corsetTextPosition6, corsetTextPosition7;
let tanktopTextPosition1, tanktopTextPosition2, tanktopTextPosition3, tanktopTextPosition4, tanktopTextPosition5, tanktopTextPosition6, tanktopTextPosition7;
let shortshortsTextPosition1, shortshortsTextPosition2, shortshortsTextPosition3, shortshortsTextPosition4, shortshortsTextPosition5, shortshortsTextPosition6, shortshortsTextPosition7;
let shortsTextPosition1, shortsTextPosition2, shortsTextPosition3, shortsTextPosition4, shortsTextPosition5, shortsTextPosition6, shortsTextPosition7;
let miniskirtTextPosition1, miniskirtTextPosition2, miniskirtTextPosition3, miniskirtTextPosition4, miniskirtTextPosition5, miniskirtTextPosition6, miniskirtTextPosition7;
let sweatsTextPosition1, sweatsTextPosition2, sweatsTextPosition3, sweatsTextPosition4, sweatsTextPosition5, sweatsTextPosition6, sweatsTextPosition7;
let skirtTextPosition1, skirtTextPosition2, skirtTextPosition3, skirtTextPosition4, skirtTextPosition5, skirtTextPosition6, skirtTextPosition7;
let toppTextPosition1, toppTextPosition2, toppPosition3, toppTextPosition4, toppTextPosition5, toppTextPosition6, toppTextPosition7;
let sweaterTextPosition1, sweaterTextPosition2, sweaterTextPosition3, sweaterTextPosition4, sweaterTextPosition5, sweaterTextPosition6, sweaterTextPosition7;
let shirtTextPosition1, shirtTextPosition2, shirtTextPosition3, shirtTextPosition4, shirtTextPosition5, shirtTextPosition6, shirtTextPosition7;

function preload() {
    titleImg = loadImage("assets/girlsimtitle.png");
    girlImg = loadImage("assets/girl.png");
    flatsImg = loadImage("assets/flats.png");
    heelsImg = loadImage("assets/heels.png");
    converseImg = loadImage("assets/converse.png");
    turtleneckImg = loadImage("assets/turtleneck.png");
    corsetImg = loadImage("assets/corset.png");
    tanktopImg = loadImage("assets/tanktop.png");
    shortshortsImg = loadImage("assets/shortshorts.png")
    shortsImg = loadImage("assets/shorts.png");
    miniskirtImg = loadImage("assets/miniskirt.png");
    jeansImg = loadImage("assets/jeans.png");
    sweatsImg = loadImage("assets/sweats.png");
    skirtImg = loadImage("assets/skirt.png");
    toppImg = loadImage("assets/top.png");
    sweaterImg = loadImage("assets/sweater.png");
    shirtImg = loadImage("assets/shirt.png");
    font = loadFont("assets/Very Simple Chalk.ttf")
}

function setup() {
    canvas = new Canvas(800,600);

    allSprites.drag = 5;

    title = new Sprite(220, 85);
    title.img = titleImg;
    title.position = createVector(220, 85);
    title.collider = 'none'

    girl = new Sprite();
    girl.img = girlImg;
    girl.position = createVector(155, 390);
    girl.collider = 'none';

    flats = new Sprite(485, 475);
    flats.img = flatsImg;
    flats.position = createVector(485, 475);
    flatsCenter = createVector(155, 545);

    heels = new Sprite();
    heels.img = heelsImg;
    heels.position = createVector(485, 505);
    heelsCenter = createVector(156, 546);
    heels.overlaps(flats);

    converse = new Sprite();
    converse.img = converseImg;
    converse.position = createVector(485, 542);
    converseCenter = createVector(156, 538);
    converse.overlaps(flats);
    converse.overlaps(heels);

    turtleneck = new Sprite();
    turtleneck.img = turtleneckImg;
    turtleneck.position = createVector(528, 180);
    turtleneckCenter = createVector(155, 351);
    turtleneck.overlaps(flats);
    turtleneck.overlaps(heels);
    turtleneck.overlaps(converse);

    corset = new Sprite(708, 488);
    corset.img = corsetImg;
    corset.position = createVector(708, 488);
    corsetCenter = createVector(154, 368);
    corset.overlaps(flats);
    corset.overlaps(heels);
    corset.overlaps(converse);
    corset.overlaps(turtleneck);

    tanktop = new Sprite();
    tanktop.img = tanktopImg;
    tanktop.position = createVector(475, 318);
    tanktopCenter = createVector(154, 345);
    tanktop.overlaps(flats);
    tanktop.overlaps(heels);
    tanktop.overlaps(converse);
    tanktop.overlaps(turtleneck);
    tanktop.overlaps(corset);

    shortshorts = new Sprite(585, 285);
    shortshorts.img = shortshortsImg;
    shortshorts.position = createVector(585, 285);
    shortshortsCenter = createVector(154, 415);
    shortshorts.overlaps(flats);
    shortshorts.overlaps(heels);
    shortshorts.overlaps(converse);
    shortshorts.overlaps(turtleneck);
    shortshorts.overlaps(corset);
    shortshorts.overlaps(tanktop);

    shorts = new Sprite();
    shorts.img = shortsImg;
    shorts.position = createVector(585, 350);
    shortsCenter = createVector(154, 410);
    shorts.overlaps(flats);
    shorts.overlaps(heels);
    shorts.overlaps(converse);
    shorts.overlaps(corset);
    shorts.overlaps(turtleneck);
    shorts.overlaps(tanktop);
    shorts.overlaps(shortshorts);

    miniskirt = new Sprite(483, 415);
    miniskirt.img = miniskirtImg;
    miniskirt.position = createVector(483, 415);
    miniskirtCenter = createVector(154.5, 407);
    miniskirt.overlaps(flats);
    miniskirt.overlaps(heels);
    miniskirt.overlaps(converse);
    miniskirt.overlaps(corset);
    miniskirt.overlaps(turtleneck);
    miniskirt.overlaps(tanktop);
    miniskirt.overlaps(shortshorts);
    miniskirt.overlaps(shorts);

    jeans = new Sprite();
    jeans.img = jeansImg;
    jeans.position = createVector(370, 485);
    jeansCenter = createVector(155, 453);
    jeans.overlaps(flats);
    jeans.overlaps(heels);
    jeans.overlaps(converse);
    jeans.overlaps(corset);
    jeans.overlaps(turtleneck);
    jeans.overlaps(tanktop);
    jeans.overlaps(shortshorts);
    jeans.overlaps(shorts);
    jeans.overlaps(miniskirt);

    sweats = new Sprite(700, 325);
    sweats.img = sweatsImg;
    sweats.position = createVector(700, 325);
    sweatsCenter = createVector(154, 461);
    sweats.overlaps(flats);
    sweats.overlaps(heels);
    sweats.overlaps(converse);
    sweats.overlaps(corset);
    sweats.overlaps(turtleneck);
    sweats.overlaps(tanktop);
    sweats.overlaps(shortshorts);
    sweats.overlaps(shorts);
    sweats.overlaps(miniskirt);
    sweats.overlaps(jeans);

    skirt = new Sprite(602, 482);
    skirt.img = skirtImg;
    skirt.position = createVector(602, 482);
    skirtCenter = createVector(155, 447);
    skirt.overlaps(flats);
    skirt.overlaps(heels);
    skirt.overlaps(converse);
    skirt.overlaps(corset);
    skirt.overlaps(turtleneck);
    skirt.overlaps(tanktop);
    skirt.overlaps(shortshorts);
    skirt.overlaps(shorts);
    skirt.overlaps(miniskirt);
    skirt.overlaps(jeans);
    skirt.overlaps(sweats);

    topp = new Sprite();
    topp.img = toppImg;
    topp.position = createVector(368, 360);
    toppCenter = createVector(154, 330);
    topp.overlaps(flats);
    topp.overlaps(heels);
    topp.overlaps(converse);
    topp.overlaps(corset);
    topp.overlaps(turtleneck);
    topp.overlaps(tanktop);
    topp.overlaps(shortshorts);
    topp.overlaps(shorts);
    topp.overlaps(miniskirt);
    topp.overlaps(jeans);
    topp.overlaps(sweats);
    topp.overlaps(skirt);

    sweater = new Sprite();
    sweater.img = sweaterImg;
    sweater.position = createVector(690, 168);
    sweaterCenter = createVector(154, 361);
    sweater.overlaps(flats);
    sweater.overlaps(heels);
    sweater.overlaps(converse);
    sweater.overlaps(corset);
    sweater.overlaps(turtleneck);
    sweater.overlaps(tanktop);
    sweater.overlaps(shortshorts);
    sweater.overlaps(shorts);
    sweater.overlaps(miniskirt);
    sweater.overlaps(jeans);
    sweater.overlaps(sweats);
    sweater.overlaps(skirt);
    sweater.overlaps(topp);

    shirt = new Sprite();
    shirt.img = shirtImg;
    shirt.position = createVector(368, 245);
    shirtCenter = createVector(155, 361)
    shirt.overlaps(flats);
    shirt.overlaps(heels);
    shirt.overlaps(converse);
    shirt.overlaps(corset);
    shirt.overlaps(turtleneck);
    shirt.overlaps(tanktop);
    shirt.overlaps(shortshorts);
    shirt.overlaps(shorts);
    shirt.overlaps(miniskirt);
    shirt.overlaps(jeans);
    shirt.overlaps(sweats);
    shirt.overlaps(skirt);
    shirt.overlaps(topp);
    shirt.overlaps(sweater);

    textFont(font, 25);
    fill('red');
}

function draw() {
    clear();
    background(230, 170, 185);

    if (flats.mouse.dragging()) {
        flats.moveTowards(
            mouseX + flats.mouse.x, 
            mouseY + flats.mouse.y, 
            1);
    }

    if (dist(flats.x, flats.y, flatsCenter.x, flatsCenter.y) < 15) {
        flats.position = flatsCenter
        isWearingFlats = true;
    } else {
        isWearingFlats = false;
    }

    if (heels.mouse.dragging()) {
        heels.moveTowards(
            mouseX + heels.mouse.x, 
            mouseY + heels.mouse.y, 
            1);
    }

    if (dist(heels.x, heels.y, heelsCenter.x, heelsCenter.y) < 15) {
        heels.position = heelsCenter
        if (isWearingHeels == false) {
            // this is the frame when the heels were *just* put on
            heelTextPosition1 = createVector(random(width),random(height));
            heelTextPosition2 = createVector(random(width),random(height));
            heelTextPosition3 = createVector(random(width),random(height));
            heelTextPosition4 = createVector(random(width),random(height));
            heelTextPosition5 = createVector(random(width),random(height));
            heelTextPosition6 = createVector(random(width),random(height));
            heelTextPosition7 = createVector(random(width),random(height));
            // score += 10;
        }
        isWearingHeels = true;
    } else {
        isWearingHeels = false;
    }

    if (isWearingHeels) {
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition1.x, heelTextPosition1.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition2.x, heelTextPosition2.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition3.x, heelTextPosition3.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition4.x, heelTextPosition4.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition5.x, heelTextPosition5.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition6.x, heelTextPosition6.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition7.x, heelTextPosition7.y);
    }

    if (converse.mouse.dragging()) {
        converse.moveTowards(
            mouseX + converse.mouse.x, 
            mouseY + converse.mouse.y, 
            1);
    }

    if (dist(converse.x, converse.y, converseCenter.x, converseCenter.y) < 15) {
        converse.position = converseCenter
        isWearingConverse = true;
    } else {
        isWearingConverse = false;
    }

    if (corset.mouse.dragging()) {
        corset.moveTowards(
            mouseX + corset.mouse.x, 
            mouseY + corset.mouse.y, 
            1);
    }

    if (dist(corset.x, corset.y, corsetCenter.x, corsetCenter.y) < 15) {
        corset.position = corsetCenter
        isWearingCorset = true; {
            corsetTextPosition1 = createVector(random(width),random(height));
            corsetTextPosition2 = createVector(random(width),random(height));
            corsetTextPosition3 = createVector(random(width),random(height));
            corsetTextPosition4 = createVector(random(width),random(height));
            corsetTextPosition5 = createVector(random(width),random(height));
            corsetTextPosition6 = createVector(random(width),random(height));
            corsetTextPosition7 = createVector(random(width),random(height));
            // score += 10;
        }
    } else {
        isWearingCorset = false;
    }
    
    if (isWearingCorset) {
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition1.x, corsetTextPosition1.y);
        text("THAT'S HARDLY APPROPRIATE", 660, 440);
        text("THAT'S HARDLY APPROPRIATE", 375, 480);
        text("THAT'S HARDLY APPROPRIATE", 50, 420);
        text("THAT'S HARDLY APPROPRIATE", 230, 100);
    }

    if (turtleneck.mouse.dragging()) {
        turtleneck.moveTowards(
            mouseX + turtleneck.mouse.x, 
            mouseY + turtleneck.mouse.y, 
            1);
    }

    if (dist(turtleneck.x, turtleneck.y, turtleneckCenter.x, turtleneckCenter.y) < 15) {
        turtleneck.position = turtleneckCenter
        isWearingTurtleneck = true;
    } else {
        isWearingTurtleneck = false;
    }

    if (isWearingTurtleneck) {
        text("HOW OLD ARE YOU?", 640, 40);
        text("HOW OLD ARE YOU?", 340, 410);
        text("HOW OLD ARE YOU?", 520, 550);
        text("HOW OLD ARE YOU?", 20, 410);
        text("HOW OLD ARE YOU?", 80, 70);
    }

    if (tanktop.mouse.dragging()) {
        tanktop.moveTowards(
            mouseX + tanktop.mouse.x, 
            mouseY + tanktop.mouse.y, 
            1);
    }

    if (dist(tanktop.x, tanktop.y, tanktopCenter.x, tanktopCenter.y) < 15) {
        tanktop.position = tanktopCenter
        isWearingTanktop = true;
    } else {
        isWearingTanktop = false;
    }

    if (isWearingTanktop) {
        text("COVER YOUR SHOULDERS", 500, 170);
        text("COVER YOUR SHOULDERS", 230, 430);
        text("COVER YOUR SHOULDERS", 460, 670);
        text("COVER YOUR SHOULDERS", 640, 410);
        text("COVER YOUR SHOULDERS", 10, 520);
    }

    if (shortshorts.mouse.dragging()) {
        shortshorts.moveTowards(
            mouseX + shortshorts.mouse.x, 
            mouseY + shortshorts.mouse.y, 
            1);
    }

    if (dist(shortshorts.x, shortshorts.y, shortshortsCenter.x, shortshortsCenter.y) < 15) {
        shortshorts.position = shortshortsCenter
        isWearingShortshorts = true;
    } else {
        isWearingShortshorts = false;
    }

    if (isWearingShortshorts) {
        text("PUT SOME PANTS ON", 290, 50);
        text("PUT SOME PANTS ON", 490, 130);
        text("PUT SOME PANTS ON", 230, 390);
        text("PUT SOME PANTS ON", 210, 580);
        text("PUT SOME PANTS ON", 660, 480);
    }

    if (shorts.mouse.dragging()) {
        shorts.moveTowards(
            mouseX + shorts.mouse.x, 
            mouseY + shorts.mouse.y, 
            1);
    }

    if (dist(shorts.x, shorts.y, shortsCenter.x, shortsCenter.y) < 15) {
        shorts.position = shortsCenter
        isWearingShorts = true;
    } else {
        isWearingShorts = false;
    }

    if (isWearingShorts) {
        text("THOSE AREN'T IN DRESS CODE", 15, 130);
        text("THOSE AREN'T IN DRESS CODE", 550, 100);
        text("THOSE AREN'T IN DRESS CODE", 240, 340);
        text("THOSE AREN'T IN DRESS CODE", 330, 560);
        text("THOSE AREN'T IN DRESS CODE", 510, 320);
    }

    if (miniskirt.mouse.dragging()) {
        miniskirt.moveTowards(
            mouseX + miniskirt.mouse.x, 
            mouseY + miniskirt.mouse.y, 
            1);
    }

    if (dist(miniskirt.x, miniskirt.y, miniskirtCenter.x, miniskirtCenter.y) < 15) {
        miniskirt.position = miniskirtCenter
        isWearingMiniskirt = true;
    } else {
        isWearingMiniskirt = false;
    }

    if (isWearingMiniskirt) {
        text("WHERE'S THE REST OF YOUR OUTFIT?", -10, 220);
        text("WHERE'S THE REST OF YOUR OUTFIT?", 600, 210);
        text("WHERE'S THE REST OF YOUR OUTFIT?", 450, 290);
        text("WHERE'S THE REST OF YOUR OUTFIT?", 190, 530);
        text("WHERE'S THE REST OF YOUR OUTFIT?", 530, 570);
    }

    if (jeans.mouse.dragging()) {
        jeans.moveTowards(
            mouseX + jeans.mouse.x, 
            mouseY + jeans.mouse.y, 
            1);
    }

    if (dist(jeans.x, jeans.y, jeansCenter.x, jeansCenter.y) < 15) {
        jeans.position = jeansCenter
        isWearingJeans = true;
    } else {
        isWearingJeans = false;
    }

    if (sweats.mouse.dragging()) {
        sweats.moveTowards(
            mouseX + sweats.mouse.x, 
            mouseY + sweats.mouse.y, 
            1);
    }

    if (isWearingSweats) {
        text("ARE YOU SICK?", -15, 310);
        text("ARE YOU SICK?", 500, 500);
        text("ARE YOU SICK?", 420, 210);
        text("ARE YOU SICK?", 250, 120);
        text("ARE YOU SICK?", 630, 370);
    }

    if (dist(sweats.x, sweats.y, sweatsCenter.x, sweatsCenter.y) < 15) {
        sweats.position = sweatsCenter
        isWearingSweats = true;
    } else {
        isWearingSweats = false;
    }

    if (skirt.mouse.dragging()) {
        skirt.moveTowards(
            mouseX + skirt.mouse.x, 
            mouseY + skirt.mouse.y, 
            1);
    }

    if (dist(skirt.x, skirt.y, skirtCenter.x, skirtCenter.y) < 15) {
        skirt.position = skirtCenter
        isWearingSkirt = true;
    } else {
        isWearingSkirt = false;
    }

    if (topp.mouse.dragging()) {
        topp.moveTowards(
            mouseX + topp.mouse.x,
            mouseY + topp.mouse.y,
            1);
    }

    if (dist(topp.x, topp.y, toppCenter.x, toppCenter.y) < 15) {
        topp.position = toppCenter
        isWearingTopp = true;
    } else {
        isWearingTopp = false;
    }

    if (isWearingTopp) {
        text("PUT A SHIRT ON", 520, 430);
        text("PUT A SHIRT ON", 150, 490);
        text("PUT A SHIRT ON", 290, 310);
        text("PUT A SHIRT ON", 670, 150);
        text("PUT A SHIRT ON", 350, 30);
    }

    if (sweater.mouse.dragging()) {
        sweater.moveTowards(
            mouseX + sweater.mouse.x,
            mouseY + sweater.mouse.y,
            1);
    }

    if (dist(sweater.x, sweater.y, sweaterCenter.x, sweaterCenter.y) < 15) {
        sweater.position = sweaterCenter;
        isWearingSweater = true;
    } else {
        isWearingSweater = false;
    }

    if(isWearingSweater) {
        text("AREN'T YOU HOT?", 25, 40);
        text("AREN'T YOU HOT?", 75, 350);
        text("AREN'T YOU HOT?", 400, 150);
        text("AREN'T YOU HOT?", 550, 400);
        text("AREN'T YOU HOT?", 600, 250);
    }

    // if(sweater.position < sweaterCenter + 1) for (let i = 0; i < 5; i++) {
    //     push();
    //     fill(0);
    //     translate(random(width), random(height));
    //     text("AREN'T YOU HOT?", 0, 0);
    //     pop();
    //   }

    if (shirt.mouse.dragging()) {
        shirt.moveTowards(
            mouseX + shirt.mouse.x,
            mouseY + shirt.mouse.y,
            1);
    }

    if (dist(shirt.x, shirt.y, shirtCenter.x, shirtCenter.y) < 15) {
        shirt.position = shirtCenter
        isWearingShirt = true;
    } else {
        isWearingShirt = false;
    }

    if (isWearingShirt) {
        text("THAT DOESN'T FIT YOU", -5, 470);
        text("THAT DOESN'T FIT YOU", 570, 690);
        text("THAT DOESN'T FIT YOU", 200, 180);
        text("THAT DOESN'T FIT YOU", 310, 300);
        text("THAT DOESN'T FIT YOU", 600, 525);
    }
}

// function sayText () {
//     if(sweater.position < sweaterCenter + 1) for (let i = 0; i < 5; i++) {
//         push();
//         fill(0);
//         translate(random(width), random(height));
//         text("AREN'T YOU HOT?", 0, 0);
//         pop();
//       }
// }