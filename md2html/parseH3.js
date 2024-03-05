function parseH3(input)
{
    return input.replace(/^###\s(.*)/gm, "<h3>$1</h3>")
}

module.exports = parseH3;