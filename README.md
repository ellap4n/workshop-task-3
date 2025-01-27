# workshop-task-3
the URL for my workshop task is: https://ellap4n.github.io/workshop-task-3/

## Idea
My mind instantly jumped to a moodboard when thinking about picture collages - and so I wanted to create a sort of image generator. 

## Image collection
I'm an avid pinterest user so I already had dozens of board sitting there ready for use! 
I chose my green pinterest board as I thought it'd be quite fun to play around with colours: https://nz.pinterest.com/llechyi/g_reen/

### Loading images
Declaring like 61 images was a overkill from me .... but I was determined to load them all up. Declaring all those variables, loading them, and storing them werer all covered in the workshop, but took a hideous amount of time.. (next step finding a easier way?...) but I eventually pulled through and loaded them all up!

## Text
I figured you could change the font styles in javascript, so I searched it up in the p5 reference page:
https://p5js.org/reference/p5/loadFont/
https://p5js.org/reference/p5/text/
https://p5js.org/reference/p5/textFont/
and downloaded a font off daFont: https://www.dafont.com/milky-vintage.font
I downloaded it as a zip - the font existed in a ttf file which I simply moved into the workshop 3 folder I had set up.
to load the font is similar to loading images - stating the file path and storing it in a variable. 
![Screenshot 2025-01-28 005458](https://github.com/user-attachments/assets/9d47f51f-c5cb-41b4-844c-8e3c77571bf4)
```
 milkyVintage = loadFont("/milky_vintage/MilkyVintage-Regular.ttf");
```

the canvas size for this workshop is much, much larger than the ones I used for the previous tasks, so the font size was a bit too small - 
I found some functions that can be used to format text:

https://p5js.org/reference/p5/textLeading/
https://p5js.org/reference/p5/textSize/

to format the text to my liking. the following code is the final one formatting all the title screen text.

```
    textSize(140);
    textLeading(130);
    textFont(milkyVintage);
    text('Click to Create \nmy moodboard!', 320, 310);
    textSize(20);
    text('but it gets progressively more green the more you click', 500, 530);
```

## Image Generation 
I wanted it to simply operate on mouse press - which was demonstrated in a earlier workshop video. pressing the mouse would trigger a function that would generate a series of images. 


#### Resizing 
All the images I downloaded were massive, so only 2 could fit on the screen - but a moodboard but have many images! 
So I resized all the images down by looping them through a 'for' loop. I knew the syntax for this as javascript as its based off C, but to double check I found the syntax of a website: https://www.programiz.com/javascript/for-loop

The array was simply iterated through once all the images were loaded in the array - and every image was resized. 

```
 for (i = 0; i < 61; i++) {
    allImg[i].resize(300, 0);
  }
```

#### image overlap issue

I also used the random function learnt earlier for the position at which the images were generated. however, because decimals were also generated, the images were sometimes too overlapped or bunched up together, so I lowered the interval which the random number was generated and timed the resulting decimal by 200. Im actually not surer how many floating decimals the normal rnadom number which is generated includes, but there was a definite difference between the overlap.

```
function mousePressed() {
  clear();
  background(176, 191, 166);
  for (a = 0; a < 60; a++) {
    r = random(allImg);
    image(r, 200*(random(0, 6.75)), 200*(random(0,3.75)));
  }
```

## Image Filter

The final part of this workshop was adding a filter on top of the images. I decided to make the images take on a greener tint as the mouse is pressed again and again to stick with the green theme going on. 
I found the tint function here: https://p5js.org/reference/p5/tint/

to do this, there needed to be a count everytime the mouse was pressed or the tint value would just reset everytime. 
this meant that it needed to be stored in a global variable - would only reset if page is reloaded. 

I added a 'greencount' which begins  at 0, and increases everytime mousePressed() is called. then a tint is added which decreases the values of r and b in increments. - the differnece between the rb and g channels become bigger and bigger till only the green value is high. 
```
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
```

## Finishing and Next Steps
Final touches was just toggling text size, image size, image count so it fit nicely within the window. 
A cool next step could be pulling images from the internet straight up to create a moodboard based on user text input - it would save me having to load in 61 images individually AND introduce more variety into the generated images. 
