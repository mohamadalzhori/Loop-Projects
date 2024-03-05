function parseH2(input)
{
    return input.replace(/^##\s(.*)/gm, "<h2>$1</h2>")
}

module.exports = parseH2;