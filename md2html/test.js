const { default: test } = require('node:test');
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

it("parser", ()=>{
    expect(parseBold("The *quick* **brown** fox ***jumps*** over the lazy dog")).toBe("The *quick* <b>brown</b> fox <b>*jumps*</b> over the lazy dog")
})

it("italic", ()=>{
    expect(parseItalic("The *quick* **brown** fox ***jumps*** over the lazy dog")).toBe("The <i>quick</i> **brown** fox ***jumps*** over the lazy dog")
})

it("bold italic", ()=>{
    expect(parseBoldItalic("The *quick* **brown** fox ***jumps*** over the lazy dog")).toBe("The *quick* **brown** fox <b><i>jumps</i></b> over the lazy dog")
})

it("h1", ()=>{
    expect(parseH1("# The quick brown fox jumps over the lazy dog")).toBe("<h1>The quick brown fox jumps over the lazy dog</h1>")
})

it("h2", ()=>{
    expect(parseH2("## The quick brown fox jumps over the lazy dog")).toBe("<h2>The quick brown fox jumps over the lazy dog</h2>")
})

it("h3", ()=>{  
    expect(parseH3("### The quick brown fox jumps over the lazy dog")).toBe("<h3>The quick brown fox jumps over the lazy dog</h3>")
})

it("h4", ()=>{
    expect(parseH4("#### The quick brown fox jumps over the lazy dog")).toBe("<h4>The quick brown fox jumps over the lazy dog</h4>")
})

it("h5", ()=>{
    expect(parseH5("##### The quick brown fox jumps over the lazy dog")).toBe("<h5>The quick brown fox jumps over the lazy dog</h5>")
})

it("h6", ()=>{
    expect(parseH6("###### The quick brown fox jumps over the lazy dog")).toBe("<h6>The quick brown fox jumps over the lazy dog</h6>")
})

it("unordered list", ()=>{
    expect(parseUnorederedList("* The quick brown fox jumps over the lazy dog")).toBe("<li>The quick brown fox jumps over the lazy dog</li>")
})

it("links", ()=>{
    expect(parseLinks("[The quick brown fox jumps over the lazy dog](https://www.google.com)")).toBe("<a href=\"https://www.google.com\">The quick brown fox jumps over the lazy dog</a>")
})

it("image", ()=>{
    expect(parseImage("![The quick brown fox jumps over the lazy dog](https://www.google.com)")).toBe("<img src=\"https://www.google.com\" alt=\"The quick brown fox jumps over the lazy dog\" />")
})


