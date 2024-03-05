function parseUnorederedList(input)
{
    return input.replace(/^\*\s{1}(.*)/gm, "<li>$1</li>");
}

module.exports = parseUnorederedList;

