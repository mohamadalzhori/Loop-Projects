function parseBold(input) {
    return input.replace(/\*\*([^\*]*)\*\*/gm, "<b>$1</b>");
}

module.exports = parseBold;