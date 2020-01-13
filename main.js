const axios = require('axios')
const moment = require('moment')
const { GistBox } = require('gist-box')
const { gist_id, gist_token } = process.env
const box = new GistBox({ id: gist_id, token: gist_token })
const time = moment().utcOffset("+08:00").format('YYYY-MM-DD kk:mm')

let content = ''

const bloglist = [
    {
        name: '某科学的最后之作',
        url: 'http://yunfwe.cn/',
        regex: /post-title-link.*?href="(.*?)"/
    },
]

axios(bloglist[0]['url']).then(res => {
    const regex = bloglist[0]['regex']
    const tmp = regex.exec(res.data)
    const latestPost = tmp[1]
    console.log(latestPost)
    
    content = latestPost ? bloglist[0]['name']+'\n'+latestPost + '\n\n' + time : 'Blog DOM Changed' + '\n\n' + time

}).then(() => {
    box.update({ content })
})



