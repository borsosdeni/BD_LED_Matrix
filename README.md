http://www.esp32learning.com/code/esp32-and-max7219-8x8-led-matrix-example.php
Demo



MAX7219LedMatrix
Library for the ESP8266 on Arduino IDE displaying text on one or multiple MAX7219 8x8 led matrices.

This library displays text and sets specific pixels on one or multiple 8x8 led matrices with a MAX7219 driver chip controlled through the SPI interface. These modules are relatively cheep and can be daisy chained which makes it easy to get a led text bar up and running You can find modules e.g. with Banggood (<-affiliate link).

For details about the MAX7219 theory, wiring, schematic, etc. there's a great post by Nick Gammon: http://www.gammon.com.au/forum/?id=11516

Currently this library supports the following operations:

set pixels
write text with a simple font
scroll text left or right
oscillate text between the two ends
You're welcome to read in my blog how this library came about.


The MIT License (MIT)

Copyright (c) 2015 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.