function parseImage(input)
{
    return input.replace(/!\[(.*)\]\((.*)\)/gm, '<img src="$2" alt="$1" />');
}

module.exports = parseImage;