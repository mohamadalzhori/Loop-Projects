function parseH6(input)
{
    return input.replace(/^######\s(.*)/gm, "<h6>$1</h6>")
}

module.exports = parseH6;