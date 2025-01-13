let milkyVintage;
let i, a;
let allImg = [];
let apples, apron, arch, bedside, bike, biscuit, book, bus, cake, candy, clock, clover, coffee;
let cooky, dessert, dream, flowers, fountain, froggi, grape, grass, green, greenVinyl, guitar, happy, ice; 
let instax, jelly, kitkat, kitty, lime, lotus, luggage, macaron, manga, mario, marshmellow, matcha, miffy;
let mochi, motion, nana, paint, paintbrush, pancake, piano, pocky, replica, rings, seat, smiski, summer, sushi, sweater;
let tele, train, tree, vangogh, vinyl, vinylbox, water;

let greenCount = 0;

function preload() {
  milkyVintage = loadFont("MilkyVintage-Regular.ttf");
  //load all images
  apples = loadImage('apples.jpg');
  apron = loadImage('apron.jpg');
  arch = loadImage('arch.jpg');
  bedside = loadImage('bedside.jpg');
  bike = loadImage('bike.jpg');
  biscuit = loadImage('biscuit.jpg');
  book = loadImage('book.jpg');
  bus = loadImage('bus.jpg');
  cake = loadImage('cake.jpg');
  candy = loadImage('candy.jpg');
  clock = loadImage('clock.jpg');
  clover = loadImage('clover.jpg');
  coffee = loadImage('coffee.jpg');
  cooky = loadImage('cooky.jpg');
  dessert = loadImage('dessert.jpg');
  dream = loadImage('dream.jpg');
  flowers = loadImage('flowers.jpg');
  fountain = loadImage('fountain.jpg');
  froggi = loadImage('Froggi.jpg');
  grape = loadImage('grape.jpg');
  grass = loadImage('grass.jpg');
  green = loadImage('green.jpg');
  greenVinyl = loadImage('greenVinyl.jpg');
  guitar = loadImage('Guitar.jpg');
  happy = loadImage('happy.jpg');
  ice = loadImage('ice.jpg');
  instax = loadImage('instax.jpg');
  jelly = loadImage('jelly.jpg');
  kitkat = loadImage('kitkat.jpg');
  kitty = loadImage('kitty.jpg');
  lime = loadImage('lime.jpg');
  lotus = loadImage('lotus.jpg');
  luggage = loadImage('luggage.jpg');
  macaron = loadImage('macaron.jpg');
  manga = loadImage('manga.jpg');
  mario = loadImage('mario.jpg');
  marshmellow = loadImage('marshmellow.jpg');
  matcha = loadImage('matcha.jpg');
  miffy = loadImage('miffy.jpg');
  mochi = loadImage('mochi.jpg');
  motion = loadImage('motion.jpg');
  nana = loadImage('nana.jpg');
  paint = loadImage('paint.jpg');
  paintbrush = loadImage('paintbrush.jpg');
  pancake = loadImage('pancake.jpg');
  piano = loadImage('piano.jpg');
  pocky = loadImage('pocky.jpg');
  replica = loadImage('replica.jpg');
  rings = loadImage('rings.jpg');
  seat = loadImage('seat.jpg');
  smiski = loadImage('smiski.jpg');
  summer = loadImage('summer.jpg');
  sushi = loadImage('sushi.jpg');
  sweater = loadImage('sweater.jpg');
  tele = loadImage('tele.jpg');
  train = loadImage('train.jpg');
  tree = loadImage('tree.jpg');
  vangogh = loadImage('vangogh.jpg');
  vinyl = loadImage('vinyl.jpg');
  vinylbox = loadImage('vinylbox.jpg');
  water = loadImage('water.jpg');
}

function setup() {
    //setup starting screen
    createCanvas(1350,750);
    background(176, 191, 166);
    noStroke();
    fill(91, 122, 77);
    textSize(140);
    textLeading(130);
    textFont(milkyVintage);
    text('Click to Create \nmy moodboard!', 320, 310);
    textSize(20);
    text('but it gets progressively more green the more you click', 500, 530);

  //load Images into allImg array
  allImg.push(apples);
  allImg.push(apron);
  allImg.push(arch);
  allImg.push(bedside);
  allImg.push(bike);
  allImg.push(biscuit);
  allImg.push(book);
  allImg.push(bus);
  allImg.push(cake);
  allImg.push(candy);
  allImg.push(clock);
  allImg.push(clover);
  allImg.push(coffee);
  allImg.push(cooky);
  allImg.push(dessert);
  allImg.push(dream);
  allImg.push(flowers);
  allImg.push(fountain);
  allImg.push(froggi);
  allImg.push(grape);
  allImg.push(grass);
  allImg.push(green);
  allImg.push(greenVinyl);
  allImg.push(guitar);
  allImg.push(happy);
  allImg.push(ice);
  allImg.push(instax);
  allImg.push(jelly);
  allImg.push(kitkat);
  allImg.push(kitty);
  allImg.push(lime);
  allImg.push(lotus);
  allImg.push(luggage);
  allImg.push(macaron);
  allImg.push(manga);
  allImg.push(mario);
  allImg.push(marshmellow);
  allImg.push(matcha);
  allImg.push(miffy);
  allImg.push(mochi);
  allImg.push(motion);
  allImg.push(nana);
  allImg.push(paint);
  allImg.push(paintbrush);
  allImg.push(pancake);
  allImg.push(piano);
  allImg.push(pocky);
  allImg.push(replica);
  allImg.push(rings);
  allImg.push(seat);
  allImg.push(smiski);
  allImg.push(summer);
  allImg.push(sushi);
  allImg.push(sweater);
  allImg.push(tele);
  allImg.push(train);
  allImg.push(tree);
  allImg.push(vangogh);
  allImg.push(vinyl);
  allImg.push(vinylbox);
  allImg.push(water);

  //resize all
  for (i = 0; i < 61; i++) {
    allImg[i].resize(300, 0);
  }

}

function mousePressed() {
  clear();
  background(176, 191, 166);
  for (a = 0; a < 60; a++) {
    r = random(allImg);
    tint(255 - greenCount, 255, 255 - greenCount, 210);
    image(r, 200*(random(0, 6.75)), 200*(random(0,3.75)));
  }
  greenCount += 5;
}

function draw() {
}
