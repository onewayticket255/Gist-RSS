const { GistBox } = require('gist-box')
const { gist_id, gist_token } = process.env
const box = new GistBox({ id: gist_id, token: gist_token })
const update = content => box.update({ content })

module.exports = update