function parseLinks(input)
{
    return input.replace(/(?<!\!)\[(.*)\]\((.*)\)/gm, '<a href="$2">$1</a>');
}

module.exports = parseLinks;