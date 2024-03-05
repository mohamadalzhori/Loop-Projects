function parseH4(input)
{
    return input.replace(/^####\s(.*)/gm, "<h4>$1</h4>")
}

module.exports = parseH4;