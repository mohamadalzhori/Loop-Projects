function parseH1(input)
{
    return input.replace(/^#\s(.*)/gm, "<h1>$1</h1>")
}


module.exports = parseH1;