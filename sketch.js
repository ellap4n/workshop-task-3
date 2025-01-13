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
  milkyVintage = loadFont("/milky_vintage/MilkyVintage-Regular.ttf");
  //load all images
  apples = loadImage('images/apples.jpg');
  apron = loadImage('images/apron.jpg');
  arch = loadImage('images/arch.jpg');
  bedside = loadImage('images/bedside.jpg');
  bike = loadImage('images/bike.jpg');
  biscuit = loadImage('images/biscuit.jpg');
  book = loadImage('images/book.jpg');
  bus = loadImage('images/bus.jpg');
  cake = loadImage('images/cake.jpg');
  candy = loadImage('images/candy.jpg');
  clock = loadImage('images/clock.jpg');
  clover = loadImage('images/clover.jpg');
  coffee = loadImage('images/coffee.jpg');
  cooky = loadImage('images/cooky.jpg');
  dessert = loadImage('images/dessert.jpg');
  dream = loadImage('images/dream.jpg');
  flowers = loadImage('images/flowers.jpg');
  fountain = loadImage('images/fountain.jpg');
  froggi = loadImage('images/Froggi.jpg');
  grape = loadImage('images/grape.jpg');
  grass = loadImage('images/grass.jpg');
  green = loadImage('images/green.jpg');
  greenVinyl = loadImage('images/greenVinyl.jpg');
  guitar = loadImage('images/Guitar.jpg');
  happy = loadImage('images/happy.jpg');
  ice = loadImage('images/ice.jpg');
  instax = loadImage('images/instax.jpg');
  jelly = loadImage('images/jelly.jpg');
  kitkat = loadImage('images/kitkat.jpg');
  kitty = loadImage('images/kitty.jpg');
  lime = loadImage('images/lime.jpg');
  lotus = loadImage('images/lotus.jpg');
  luggage = loadImage('images/luggage.jpg');
  macaron = loadImage('images/macaron.jpg');
  manga = loadImage('images/manga.jpg');
  mario = loadImage('images/mario.jpg');
  marshmellow = loadImage('images/marshmellow.jpg');
  matcha = loadImage('images/matcha.jpg');
  miffy = loadImage('images/miffy.jpg');
  mochi = loadImage('images/mochi.jpg');
  motion = loadImage('images/motion.jpg');
  nana = loadImage('images/nana.jpg');
  paint = loadImage('images/paint.jpg');
  paintbrush = loadImage('images/paintbrush.jpg');
  pancake = loadImage('images/pancake.jpg');
  piano = loadImage('images/piano.jpg');
  pocky = loadImage('images/pocky.jpg');
  replica = loadImage('images/replica.jpg');
  rings = loadImage('images/rings.jpg');
  seat = loadImage('images/seat.jpg');
  smiski = loadImage('images/smiski.jpg');
  summer = loadImage('images/summer.jpg');
  sushi = loadImage('images/sushi.jpg');
  sweater = loadImage('images/sweater.jpg');
  tele = loadImage('images/tele.jpg');
  train = loadImage('images/train.jpg');
  tree = loadImage('images/tree.jpg');
  vangogh = loadImage('images/vangogh.jpg');
  vinyl = loadImage('images/vinyl.jpg');
  vinylbox = loadImage('images/vinylbox.jpg');
  water = loadImage('images/water.jpg');
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
