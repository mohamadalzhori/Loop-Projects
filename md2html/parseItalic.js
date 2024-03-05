function parseItalic(input)
{
    return input.replace(/(?<!\*)\*(?!\*)(\S*)(?<!\*)\*(?!\*)/g, "<i>$1</i>");
}

module.exports = parseItalic;