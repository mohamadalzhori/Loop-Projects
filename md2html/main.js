const parseBold = require('./parseBold');
const parseItalic = require('./parseItalic');
const parseBoldItalic = require('./parseBoldItalic');
const parseH1 = require('./parseH1');
const parseH2 = require('./parseH2');
const parseH3 = require('./parseH3');
const parseH4 = require('./parseH4');
const parseH5 = require('./parseH5');
const parseH6 = require('./parseH6');   
const parseUnorederedList = require('./parseUnorderedList');
const parseLinks = require('./parseLinks');
const parseImage = require('./parseImage');

const md =
`This is a **bold text** example. You can also *italicize text* and combine both to create ***bold italic text***.


# h1
## h2
### h3
#### h4
##### h5
###### h6


* Item 1
* Item 2
  


1. First item
2. Second item
   

You can create [links](https://www.example.com) easily.


![Alt text](https://via.placeholder.com/150)`;

html = md;
html = parseBold(html);
html = parseItalic(html);
html = parseBoldItalic(html);
html = parseH1(html);
html = parseH2(html);
html = parseH3(html);
html = parseH4(html);
html = parseH5(html);
html = parseH6(html);
html = parseUnorederedList(html);
html = parseLinks(html);
html = parseImage(html);

console.log(html);

