const ns = require('./lib/js/emojione')


Object.keys(ns.emojioneList).forEach(function(i) {
    if (ns.emojioneList[i].fname === ns.emojioneList[i].uc) {
        delete ns.emojioneList[i].fname
    }

    // If unicode only has 1 entry and it's the same as uc, then use uc
    if (ns.emojioneList[i].unicode.length === 1) {
        if (ns.emojioneList[i].unicode[0] === ns.emojioneList[i].uc) {
            delete ns.emojioneList[i].unicode
        }
    }
})

console.warn(ns.emojioneList)
