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
let gameOver = false;

let score = 0;
let button

let flatsTextPosition1, flatsTextPosition2, flatsTextPosition3, flatsTextPosition4, flatsTextPosition5, flatsTextPosition6, flatsTextPosition7, flatsTextPosition8, flatsTextPosition9, flatsTextPosition10;
let heelTextPosition1, heelTextPosition2, heelTextPosition3, heelTextPosition4, heelTextPosition5, heelTextPosition6, heelTextPosition7, heelTextPosition8, heelTextPosition9, heelTextPosition10;
let converseTextPosition1, converseTextPosition2, converseTextPosition3, converseTextPosition4, converseTextPosition5, converseTextPosition6, converseTextPosition7, converseTextPosition8, converseTextPosition9, converseTextPosition10;
let turtleneckTextPosition1, turtleneckTextPosition2, turtleneckTextPosition3, turtleneckTextPosition4, turtleneckTextPosition5, turtleneckTextPosition6, turtleneckTextPosition7, turtleneckTextPosition8, turtleneckTextPosition9, turtleneckTextPosition10;
let corsetTextPosition1, corsetTextPosition2, corsetTextPosition3, corsetTextPosition4, corsetTextPosition5, corsetTextPosition6, corsetTextPosition7, corsetTextPosition8, corsetTextPosition9, corsetTextPosition10;
let tanktopTextPosition1, tanktopTextPosition2, tanktopTextPosition3, tanktopTextPosition4, tanktopTextPosition5, tanktopTextPosition6, tanktopTextPosition7, tanktopTextPosition8, tanktopTextPosition9, tanktopTextPosition10;
let shortshortsTextPosition1, shortshortsTextPosition2, shortshortsTextPosition3, shortshortsTextPosition4, shortshortsTextPosition5, shortshortsTextPosition6, shortshortsTextPosition7, shortshortsTextPosition8, shortshortsTextPosition9, shortshortsTextPosition10;
let shortsTextPosition1, shortsTextPosition2, shortsTextPosition3, shortsTextPosition4, shortsTextPosition5, shortsTextPosition6, shortsTextPosition7, shortsTextPosition8, shortsTextPosition9, shortsTextPosition10;
let miniskirtTextPosition1, miniskirtTextPosition2, miniskirtTextPosition3, miniskirtTextPosition4, miniskirtTextPosition5, miniskirtTextPosition6, miniskirtTextPosition7, miniskirtTextPosition8, miniskirtTextPosition9, miniskirtTextPosition10;
let jeansTextPosition1, jeansTextPosition2, jeansTextPosition3, jeansTextPosition4, jeansTextPosition5, jeansTextPosition6, jeansTextPosition7, jeansTextPosition8, jeansTextPosition9, jeansTextPosition10;
let sweatsTextPosition1, sweatsTextPosition2, sweatsTextPosition3, sweatsTextPosition4, sweatsTextPosition5, sweatsTextPosition6, sweatsTextPosition7, sweatsTextPosition8, sweatsTextPosition9, sweatsTextPosition10;
let skirtTextPosition1, skirtTextPosition2, skirtTextPosition3, skirtTextPosition4, skirtTextPosition5, skirtTextPosition6, skirtTextPosition7, skirtTextPosition8, skirtTextPosition9, skirtTextPosition10;
let toppTextPosition1, toppTextPosition2, toppPosition3, toppTextPosition4, toppTextPosition5, toppTextPosition6, toppTextPosition7, toppTextPosition8, toppTextPosition9, toppTextPosition10;
let sweaterTextPosition1, sweaterTextPosition2, sweaterTextPosition3, sweaterTextPosition4, sweaterTextPosition5, sweaterTextPosition6, sweaterTextPosition7, sweaterTextPosition8, sweaterTextPosition9, sweaterTextPosition10;
let shirtTextPosition1, shirtTextPosition2, shirtTextPosition3, shirtTextPosition4, shirtTextPosition5, shirtTextPosition6, shirtTextPosition7, shirtTextPosition8, shirtTextPosition9, shirtTextPosition10;

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
    imdoneImg = loadImage("assets/i'm done!.png")
}

function setup() {
    canvas = new Canvas(800,600);

    allSprites.drag = 10;

    textFont(font);
    textSize(25)
    fill('red');
    noStroke()

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

    // imdone = new Sprite()
    // imdone.img = imdoneImg;
    // imdone.position = createVector(735, 40)
}

function draw() {
    clear();
    background(230, 170, 185);

    // text(score, 20, 40)

    button = createButton("I'm done!");
    button.position(700, 30);
    button.mousePressed(done) 
    button.style('color', '#f54597')
    button.style('background-color', '#ffbada' )
    button.style('border-color', '#ff87bf')
    button.style('font', 'Comic Sans MS')

    if (gameOver == true) {
        if (score >= 0) {
            respectSprite = new Sprite(400, 300, 800, 600, 's')
            respectSprite.overlaps(allSprites)
            respectSprite.fill = color(230, 170, 185)
            respectSprite.text = "Have some self respect."
            respectSprite.textSize = 75
            respectSprite.textPosition = 100, 100
    } else {
        if (score <= 0) {
            prudeSprite = new Sprite(400, 300, 800, 600, 's')
            prudeSprite.overlaps(allSprites)
            prudeSprite.fill = color(230, 170, 185)
            prudeSprite.text = "No one likes a prude."
            prudeSprite.textSize = 75
            prudeSprite.textPosition = 100, 100
        }
    }
}

    if (flats.mouse.dragging()) {
        flats.moveTowards(
            mouseX + flats.mouse.x, 
            mouseY + flats.mouse.y, 
            1);
    }

    if (dist(flats.x, flats.y, flatsCenter.x, flatsCenter.y) < 15) {
        flats.position = flatsCenter
        if (isWearingFlats == false) {
            flatsTextPosition1 = createVector(random(width),random(height));
            flatsTextPosition2 = createVector(random(width),random(height));
            flatsTextPosition3 = createVector(random(width),random(height));
            flatsTextPosition4 = createVector(random(width),random(height));
            flatsTextPosition5 = createVector(random(width),random(height));
            flatsTextPosition6 = createVector(random(width),random(height));
            flatsTextPosition7 = createVector(random(width),random(height));
            flatsTextPosition8 = createVector(random(width),random(height));
            flatsTextPosition9 = createVector(random(width),random(height));
            flatsTextPosition10 = createVector(random(width),random(height));
        }
        isWearingFlats = true;
    } else {
        isWearingFlats = false;
    }

    if (isWearingFlats) {
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition1.x, flatsTextPosition1.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition2.x, flatsTextPosition2.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition3.x, flatsTextPosition3.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition4.x, flatsTextPosition4.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition5.x, flatsTextPosition5.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition6.x, flatsTextPosition6.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition7.x, flatsTextPosition7.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition8.x, flatsTextPosition8.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition9.x, flatsTextPosition9.y);
        text("HOW MANY SHOES DO YOU NEED?", flatsTextPosition10.x, flatsTextPosition10.y);
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
            heelTextPosition8 = createVector(random(width),random(height));
            heelTextPosition9 = createVector(random(width),random(height));
            heelTextPosition10 = createVector(random(width),random(height));
            score += 3;
        }
        isWearingHeels = true;
    } else {
        isWearingHeels = false;
    }

    if (heels.position != heelsCenter) {
        if (isWearingHeels == true) {}
    }
    // frame when heels are *just* taken off

    if (isWearingHeels) {
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition1.x, heelTextPosition1.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition2.x, heelTextPosition2.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition3.x, heelTextPosition3.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition4.x, heelTextPosition4.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition5.x, heelTextPosition5.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition6.x, heelTextPosition6.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition7.x, heelTextPosition7.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition8.x, heelTextPosition8.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition9.x, heelTextPosition9.y);
        text("YOU'RE TOO TALL FOR THOSE", heelTextPosition10.x, heelTextPosition10.y);
    }

    if (converse.mouse.dragging()) {
        converse.moveTowards(
            mouseX + converse.mouse.x, 
            mouseY + converse.mouse.y, 
            1);
    }

    if (dist(converse.x, converse.y, converseCenter.x, converseCenter.y) < 15) {
        converse.position = converseCenter
        if (isWearingConverse == false) {
            converseTextPosition1 = createVector(random(width),random(height));
            converseTextPosition2 = createVector(random(width),random(height));
            converseTextPosition3 = createVector(random(width),random(height));
            converseTextPosition4 = createVector(random(width),random(height));
            converseTextPosition5 = createVector(random(width),random(height));
            converseTextPosition6 = createVector(random(width),random(height));
            converseTextPosition7 = createVector(random(width),random(height));
            converseTextPosition8 = createVector(random(width),random(height));
            converseTextPosition9 = createVector(random(width),random(height));
            converseTextPosition10 = createVector(random(width),random(height));
            score += 0;
        }
        isWearingConverse = true;
    } else {
        isWearingConverse = false;
    }

    if (isWearingConverse) {
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition1.x, converseTextPosition1.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition2.x, converseTextPosition2.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition3.x, converseTextPosition3.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition4.x, converseTextPosition4.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition5.x, converseTextPosition5.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition6.x, converseTextPosition6.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition7.x, converseTextPosition7.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition8.x, converseTextPosition8.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition9.x, converseTextPosition9.y);
        text("HOW MANY SHOES DO YOU NEED?", converseTextPosition10.x, converseTextPosition10.y);
    }

    if (turtleneck.mouse.dragging()) {
        turtleneck.moveTowards(
            mouseX + turtleneck.mouse.x, 
            mouseY + turtleneck.mouse.y, 
            1);
    }

    if (dist(turtleneck.x, turtleneck.y, turtleneckCenter.x, turtleneckCenter.y) < 15) {
        turtleneck.position = turtleneckCenter
        if (isWearingTurtleneck == false) {
            turtleneckTextPosition1 = createVector(random(width),random(height));
            turtleneckTextPosition2 = createVector(random(width),random(height));
            turtleneckTextPosition3 = createVector(random(width),random(height));
            turtleneckTextPosition4 = createVector(random(width),random(height));
            turtleneckTextPosition5 = createVector(random(width),random(height));
            turtleneckTextPosition6 = createVector(random(width),random(height));
            turtleneckTextPosition7 = createVector(random(width),random(height));
            turtleneckTextPosition8 = createVector(random(width),random(height));
            turtleneckTextPosition9 = createVector(random(width),random(height));
            turtleneckTextPosition10 = createVector(random(width),random(height));
            score -= 1;
        }
        isWearingTurtleneck = true;
    } else {
        isWearingTurtleneck = false;
    }

    if (isWearingTurtleneck) {
        text("HOW OLD ARE YOU?", turtleneckTextPosition1.x, turtleneckTextPosition1.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition2.x, turtleneckTextPosition2.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition3.x, turtleneckTextPosition3.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition4.x, turtleneckTextPosition4.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition5.x, turtleneckTextPosition5.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition6.x, turtleneckTextPosition6.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition7.x, turtleneckTextPosition7.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition8.x, turtleneckTextPosition8.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition9.x, turtleneckTextPosition9.y);
        text("HOW OLD ARE YOU?", turtleneckTextPosition10.x, turtleneckTextPosition10.y);
    }

    if (corset.mouse.dragging()) {
        corset.moveTowards(
            mouseX + corset.mouse.x, 
            mouseY + corset.mouse.y, 
            1);
    }

    if (dist(corset.x, corset.y, corsetCenter.x, corsetCenter.y) < 15) {
        corset.position = corsetCenter
        if (isWearingCorset == false) {
            corsetTextPosition1 = createVector(random(width),random(height));
            corsetTextPosition2 = createVector(random(width),random(height));
            corsetTextPosition3 = createVector(random(width),random(height));
            corsetTextPosition4 = createVector(random(width),random(height));
            corsetTextPosition5 = createVector(random(width),random(height));
            corsetTextPosition6 = createVector(random(width),random(height));
            corsetTextPosition7 = createVector(random(width),random(height));
            corsetTextPosition8 = createVector(random(width),random(height));
            corsetTextPosition9 = createVector(random(width),random(height));
            corsetTextPosition10 = createVector(random(width),random(height));
            score += 5;
        }
        isWearingCorset = true;
    } else {
        isWearingCorset = false;
    }
    
    if (isWearingCorset) {
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition1.x, corsetTextPosition1.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition2.x, corsetTextPosition2.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition3.x, corsetTextPosition3.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition4.x, corsetTextPosition4.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition5.x, corsetTextPosition5.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition6.x, corsetTextPosition6.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition7.x, corsetTextPosition7.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition8.x, corsetTextPosition8.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition9.x, corsetTextPosition9.y);
        text("THAT'S HARDLY APPROPRIATE", corsetTextPosition10.x, corsetTextPosition10.y);
    }

    if (tanktop.mouse.dragging()) {
        tanktop.moveTowards(
            mouseX + tanktop.mouse.x, 
            mouseY + tanktop.mouse.y, 
            1);
    }

    if (dist(tanktop.x, tanktop.y, tanktopCenter.x, tanktopCenter.y) < 15) {
        tanktop.position = tanktopCenter
        if (isWearingTanktop == false) {
            tanktopTextPosition1 = createVector(random(width),random(height));
            tanktopTextPosition2 = createVector(random(width),random(height));
            tanktopTextPosition3 = createVector(random(width),random(height));
            tanktopTextPosition4 = createVector(random(width),random(height));
            tanktopTextPosition5 = createVector(random(width),random(height));
            tanktopTextPosition6 = createVector(random(width),random(height));
            tanktopTextPosition7 = createVector(random(width),random(height));
            tanktopTextPosition8 = createVector(random(width),random(height));
            tanktopTextPosition9 = createVector(random(width),random(height));
            tanktopTextPosition10 = createVector(random(width),random(height));
            score += 1;
        }
        isWearingTanktop = true;
    } else {
        isWearingTanktop = false;
    }

    if (isWearingTanktop) {
        text("COVER YOUR SHOULDERS", tanktopTextPosition1.x, tanktopTextPosition1.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition2.x, tanktopTextPosition2.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition3.x, tanktopTextPosition3.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition4.x, tanktopTextPosition4.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition5.x, tanktopTextPosition5.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition6.x, tanktopTextPosition6.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition7.x, tanktopTextPosition7.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition8.x, tanktopTextPosition8.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition9.x, tanktopTextPosition9.y);
        text("COVER YOUR SHOULDERS", tanktopTextPosition10.x, tanktopTextPosition10.y);
    }

    if (shortshorts.mouse.dragging()) {
        shortshorts.moveTowards(
            mouseX + shortshorts.mouse.x, 
            mouseY + shortshorts.mouse.y, 
            1);
    }

    if (dist(shortshorts.x, shortshorts.y, shortshortsCenter.x, shortshortsCenter.y) < 15) {
        shortshorts.position = shortshortsCenter
        if (isWearingShortshorts == false) {
            shortshortsTextPosition1 = createVector(random(width),random(height));
            shortshortsTextPosition2 = createVector(random(width),random(height));
            shortshortsTextPosition3 = createVector(random(width),random(height));
            shortshortsTextPosition4 = createVector(random(width),random(height));
            shortshortsTextPosition5 = createVector(random(width),random(height));
            shortshortsTextPosition6 = createVector(random(width),random(height));
            shortshortsTextPosition7 = createVector(random(width),random(height));
            shortshortsTextPosition8 = createVector(random(width),random(height));
            shortshortsTextPosition9 = createVector(random(width),random(height));
            shortshortsTextPosition10 = createVector(random(width),random(height));
            score += 5;
        }
        isWearingShortshorts = true;
    } else {
        isWearingShortshorts = false;
    }

    if (isWearingShortshorts) {
        text("PUT SOME PANTS ON", shortshortsTextPosition1.x, shortshortsTextPosition1.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition2.x, shortshortsTextPosition2.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition3.x, shortshortsTextPosition3.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition4.x, shortshortsTextPosition4.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition5.x, shortshortsTextPosition5.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition6.x, shortshortsTextPosition6.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition7.x, shortshortsTextPosition7.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition8.x, shortshortsTextPosition8.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition9.x, shortshortsTextPosition9.y);
        text("PUT SOME PANTS ON", shortshortsTextPosition10.x, shortshortsTextPosition10.y);
    }

    if (shorts.mouse.dragging()) {
        shorts.moveTowards(
            mouseX + shorts.mouse.x, 
            mouseY + shorts.mouse.y, 
            1);
    }

    if (dist(shorts.x, shorts.y, shortsCenter.x, shortsCenter.y) < 15) {
        shorts.position = shortsCenter
        if (isWearingShorts == false) {
            shortsTextPosition1 = createVector(random(width),random(height));
            shortsTextPosition2 = createVector(random(width),random(height));
            shortsTextPosition3 = createVector(random(width),random(height));
            shortsTextPosition4 = createVector(random(width),random(height));
            shortsTextPosition5 = createVector(random(width),random(height));
            shortsTextPosition6 = createVector(random(width),random(height));
            shortsTextPosition7 = createVector(random(width),random(height));
            shortsTextPosition8 = createVector(random(width),random(height));
            shortsTextPosition9 = createVector(random(width),random(height));
            shortsTextPosition10 = createVector(random(width),random(height));
            score += 3;
        }
        isWearingShorts = true;
    } else {
        isWearingShorts = false;
    }

    if (isWearingShorts) {
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition1.x, shortsTextPosition1.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition2.x, shortsTextPosition2.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition3.x, shortsTextPosition3.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition4.x, shortsTextPosition4.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition5.x, shortsTextPosition5.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition6.x, shortsTextPosition6.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition7.x, shortsTextPosition7.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition8.x, shortsTextPosition8.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition9.x, shortsTextPosition9.y);
        text("THOSE AREN'T IN DRESS CODE", shortsTextPosition10.x, shortsTextPosition10.y);
    }

    if (miniskirt.mouse.dragging()) {
        miniskirt.moveTowards(
            mouseX + miniskirt.mouse.x, 
            mouseY + miniskirt.mouse.y, 
            1);
    }

    if (dist(miniskirt.x, miniskirt.y, miniskirtCenter.x, miniskirtCenter.y) < 15) {
        miniskirt.position = miniskirtCenter
        if (isWearingMiniskirt == false) {
            miniskirtTextPosition1 = createVector(random(width),random(height));
            miniskirtTextPosition2 = createVector(random(width),random(height));
            miniskirtTextPosition3 = createVector(random(width),random(height));
            miniskirtTextPosition4 = createVector(random(width),random(height));
            miniskirtTextPosition5 = createVector(random(width),random(height));
            miniskirtTextPosition6 = createVector(random(width),random(height));
            miniskirtTextPosition7 = createVector(random(width),random(height));
            miniskirtTextPosition8 = createVector(random(width),random(height));
            miniskirtTextPosition9 = createVector(random(width),random(height));
            miniskirtTextPosition10 = createVector(random(width),random(height));
            score += 5;
        }
        isWearingMiniskirt = true;
    } else {
        isWearingMiniskirt = false;
    }

    if (isWearingMiniskirt) {
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition1.x, miniskirtTextPosition1.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition2.x, miniskirtTextPosition2.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition3.x, miniskirtTextPosition3.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition4.x, miniskirtTextPosition4.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition5.x, miniskirtTextPosition5.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition6.x, miniskirtTextPosition6.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition7.x, miniskirtTextPosition7.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition8.x, miniskirtTextPosition8.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition9.x, miniskirtTextPosition9.y);
        text("WHERE'S THE REST OF YOUR OUTFIT?", miniskirtTextPosition10.x, miniskirtTextPosition10.y);
    }

    if (jeans.mouse.dragging()) {
        jeans.moveTowards(
            mouseX + jeans.mouse.x, 
            mouseY + jeans.mouse.y, 
            1);
    }

    if (dist(jeans.x, jeans.y, jeansCenter.x, jeansCenter.y) < 15) {
        jeans.position = jeansCenter
        if (isWearingJeans == false) {
            jeansTextPosition1 = createVector(random(width),random(height));
            jeansTextPosition2 = createVector(random(width),random(height));
            jeansTextPosition3 = createVector(random(width),random(height));
            jeansTextPosition4 = createVector(random(width),random(height));
            jeansTextPosition5 = createVector(random(width),random(height));
            jeansTextPosition6 = createVector(random(width),random(height));
            jeansTextPosition7 = createVector(random(width),random(height));
            jeansTextPosition8 = createVector(random(width),random(height));
            jeansTextPosition9 = createVector(random(width),random(height));
            jeansTextPosition10 = createVector(random(width),random(height)); 
            // score -= 2
        }
        isWearingJeans = true;
    } else {
        isWearingJeans = false;
    }

    if (isWearingJeans) {
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition1.x, jeansTextPosition1.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition2.x, jeansTextPosition2.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition3.x, jeansTextPosition3.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition4.x, jeansTextPosition4.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition5.x, jeansTextPosition5.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition6.x, jeansTextPosition6.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition7.x, jeansTextPosition7.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition8.x, jeansTextPosition8.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition9.x, jeansTextPosition9.y);
        text("THOSE JEANS DON'T FIT YOU", jeansTextPosition10.x, jeansTextPosition10.y);
    }

    if (sweats.mouse.dragging()) {
        sweats.moveTowards(
            mouseX + sweats.mouse.x, 
            mouseY + sweats.mouse.y, 
            1);
    }

    if (dist(sweats.x, sweats.y, sweatsCenter.x, sweatsCenter.y) < 15) {
        sweats.position = sweatsCenter
        if (isWearingSweats == false) {
            sweatsTextPosition1 = createVector(random(width),random(height));
            sweatsTextPosition2 = createVector(random(width),random(height));
            sweatsTextPosition3 = createVector(random(width),random(height));
            sweatsTextPosition4 = createVector(random(width),random(height));
            sweatsTextPosition5 = createVector(random(width),random(height));
            sweatsTextPosition6 = createVector(random(width),random(height));
            sweatsTextPosition7 = createVector(random(width),random(height));
            sweatsTextPosition8 = createVector(random(width),random(height));
            sweatsTextPosition9 = createVector(random(width),random(height));
            sweatsTextPosition10 = createVector(random(width),random(height));
            // score -= 5;
        }
        isWearingSweats = true;
    } else {
        isWearingSweats = false;
    }

    if (isWearingSweats) {
        text("ARE YOU SICK?", sweatsTextPosition1.x, sweatsTextPosition1.y);
        text("ARE YOU SICK?", sweatsTextPosition2.x, sweatsTextPosition2.y);
        text("ARE YOU SICK?", sweatsTextPosition3.x, sweatsTextPosition3.y);
        text("ARE YOU SICK?", sweatsTextPosition4.x, sweatsTextPosition4.y);
        text("ARE YOU SICK?", sweatsTextPosition5.x, sweatsTextPosition5.y);
        text("ARE YOU SICK?", sweatsTextPosition6.x, sweatsTextPosition6.y);
        text("ARE YOU SICK?", sweatsTextPosition7.x, sweatsTextPosition7.y);
        text("ARE YOU SICK?", sweatsTextPosition8.x, sweatsTextPosition8.y);
        text("ARE YOU SICK?", sweatsTextPosition9.x, sweatsTextPosition9.y);
        text("ARE YOU SICK?", sweatsTextPosition10.x, sweatsTextPosition10.y);
    }

    if (skirt.mouse.dragging()) {
        skirt.moveTowards(
            mouseX + skirt.mouse.x, 
            mouseY + skirt.mouse.y, 
            1);
    }

    if (dist(skirt.x, skirt.y, skirtCenter.x, skirtCenter.y) < 15) {
        skirt.position = skirtCenter
        if (isWearingSkirt == false) {
            skirtTextPosition1 = createVector(random(width),random(height));
            skirtTextPosition2 = createVector(random(width),random(height));
            skirtTextPosition3 = createVector(random(width),random(height));
            skirtTextPosition4 = createVector(random(width),random(height));
            skirtTextPosition5 = createVector(random(width),random(height));
            skirtTextPosition6 = createVector(random(width),random(height));
            skirtTextPosition7 = createVector(random(width),random(height));
            skirtTextPosition8 = createVector(random(width),random(height));
            skirtTextPosition9 = createVector(random(width),random(height));
            skirtTextPosition10 = createVector(random(width),random(height));
            // score -= 5
        }
        isWearingSkirt = true;
    } else {
        isWearingSkirt = false;
    }

    if (isWearingSkirt) {
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition1.x, skirtTextPosition1.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition2.x, skirtTextPosition2.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition3.x, skirtTextPosition3.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition4.x, skirtTextPosition4.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition5.x, skirtTextPosition5.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition6.x, skirtTextPosition6.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition7.x, skirtTextPosition7.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition8.x, skirtTextPosition8.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition9.x, skirtTextPosition9.y);
        text("ARE YOU COMFORTABLE IN THAT?", skirtTextPosition10.x, skirtTextPosition10.y);
    }

    if (topp.mouse.dragging()) {
        topp.moveTowards(
            mouseX + topp.mouse.x,
            mouseY + topp.mouse.y,
            1);
    }

    if (dist(topp.x, topp.y, toppCenter.x, toppCenter.y) < 15) {
        topp.position = toppCenter
        if (isWearingTopp == false) {
            toppTextPosition1 = createVector(random(width),random(height));
            toppTextPosition2 = createVector(random(width),random(height));
            toppTextPosition3 = createVector(random(width),random(height));
            toppTextPosition4 = createVector(random(width),random(height));
            toppTextPosition5 = createVector(random(width),random(height));
            toppTextPosition6 = createVector(random(width),random(height));
            toppTextPosition7 = createVector(random(width),random(height));
            toppTextPosition8 = createVector(random(width),random(height));
            toppTextPosition9 = createVector(random(width),random(height));
            toppTextPosition10 = createVector(random(width),random(height));
            score += 4;
        }
        isWearingTopp = true;
    } else {
        isWearingTopp = false;
    }

    if (isWearingTopp) {
        text("PUT A SHIRT ON", toppTextPosition1.x, toppTextPosition1.y);
        text("PUT A SHIRT ON", toppTextPosition2.x, toppTextPosition2.y);
        text("PUT A SHIRT ON", toppTextPosition3.x, toppTextPosition3.y);
        text("PUT A SHIRT ON", toppTextPosition4.x, toppTextPosition4.y);
        text("PUT A SHIRT ON", toppTextPosition5.x, toppTextPosition5.y);
        text("PUT A SHIRT ON", toppTextPosition6.x, toppTextPosition6.y);
        text("PUT A SHIRT ON", toppTextPosition7.x, toppTextPosition7.y);
        text("PUT A SHIRT ON", toppTextPosition8.x, toppTextPosition8.y);
        text("PUT A SHIRT ON", toppTextPosition9.x, toppTextPosition9.y);
        text("PUT A SHIRT ON", toppTextPosition10.x, toppTextPosition10.y);
    }

    if (sweater.mouse.dragging()) {
        sweater.moveTowards(
            mouseX + sweater.mouse.x,
            mouseY + sweater.mouse.y,
            1);
    }

    if (dist(sweater.x, sweater.y, sweaterCenter.x, sweaterCenter.y) < 15) {
        sweater.position = sweaterCenter;
        if (isWearingSweater == false) {
            sweaterTextPosition1 = createVector(random(width),random(height));
            sweaterTextPosition2 = createVector(random(width),random(height));
            sweaterTextPosition3 = createVector(random(width),random(height));
            sweaterTextPosition4 = createVector(random(width),random(height));
            sweaterTextPosition5 = createVector(random(width),random(height));
            sweaterTextPosition6 = createVector(random(width),random(height));
            sweaterTextPosition7 = createVector(random(width),random(height));
            sweaterTextPosition8 = createVector(random(width),random(height));
            sweaterTextPosition9 = createVector(random(width),random(height));
            sweaterTextPosition10 = createVector(random(width),random(height));
            score -= 1;
        }
        isWearingSweater = true;
    } else {
        isWearingSweater = false;
    }

    if(isWearingSweater) {
        text("AREN'T YOU HOT?", sweaterTextPosition1.x, sweaterTextPosition1.y);
        text("AREN'T YOU HOT?", sweaterTextPosition2.x, sweaterTextPosition2.y);
        text("AREN'T YOU HOT?", sweaterTextPosition3.x, sweaterTextPosition3.y);
        text("AREN'T YOU HOT?", sweaterTextPosition4.x, sweaterTextPosition4.y);
        text("AREN'T YOU HOT?", sweaterTextPosition5.x, sweaterTextPosition5.y);
        text("AREN'T YOU HOT?", sweaterTextPosition6.x, sweaterTextPosition6.y);
        text("AREN'T YOU HOT?", sweaterTextPosition7.x, sweaterTextPosition7.y);
        text("AREN'T YOU HOT?", sweaterTextPosition8.x, sweaterTextPosition8.y);
        text("AREN'T YOU HOT?", sweaterTextPosition9.x, sweaterTextPosition9.y);
        text("AREN'T YOU HOT?", sweaterTextPosition10.x, sweaterTextPosition10.y);
    }

    if (shirt.mouse.dragging()) {
        shirt.moveTowards(
            mouseX + shirt.mouse.x,
            mouseY + shirt.mouse.y,
            1);
    }

    if (dist(shirt.x, shirt.y, shirtCenter.x, shirtCenter.y) < 15) {
        shirt.position = shirtCenter
        if (isWearingShirt == false) {
            shirtTextPosition1 = createVector(random(width),random(height));
            shirtTextPosition2 = createVector(random(width),random(height));
            shirtTextPosition3 = createVector(random(width),random(height));
            shirtTextPosition4 = createVector(random(width),random(height));
            shirtTextPosition5 = createVector(random(width),random(height));
            shirtTextPosition6 = createVector(random(width),random(height));
            shirtTextPosition7 = createVector(random(width),random(height));
            shirtTextPosition8 = createVector(random(width),random(height));
            shirtTextPosition9 = createVector(random(width),random(height));
            shirtTextPosition10 = createVector(random(width),random(height));
            score -= 1;
        }
        isWearingShirt = true;
    } else {
        isWearingShirt = false;
    }

    if (isWearingShirt) {
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition1.x, shirtTextPosition1.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition2.x, shirtTextPosition2.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition3.x, shirtTextPosition3.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition4.x, shirtTextPosition4.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition5.x, shirtTextPosition5.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition6.x, shirtTextPosition6.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition7.x, shirtTextPosition7.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition8.x, shirtTextPosition8.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition9.x, shirtTextPosition9.y);
        text("THAT'S RATHER BIG ON YOU", shirtTextPosition10.x, shirtTextPosition10.y);
    }
}

function done () {
    if (button.mousePressed()) {
        if (gameOver == false) {
            gameOver = true
        } else {
            gameOver = false
        }
    }
}