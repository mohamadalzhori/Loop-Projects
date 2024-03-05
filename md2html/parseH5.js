function parseH5(input)
{
    return input.replace(/^#####\s(.*)/gm, "<h5>$1</h5>")
}

module.exports = parseH5;