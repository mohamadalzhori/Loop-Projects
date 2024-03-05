function parseBoldItalic(input)
{
    return input.replace(/\*{3}(\S*)\*{3}/gm, "<b><i>$1</i></b>")
}

module.exports = parseBoldItalic;