const axios = require('axios')
const moment = require('moment')
const bloglist = require('./list.js')
const update = require('./gist.js')
const time = moment().utcOffset("+08:00").format('YYYY-MM-DD kk:mm')
let content = ''

const getFeed = (entry) => new Promise((resolve, reject) => {
    const { name, url, regex } = entry
    axios(url).then(res => {
        const result = regex.exec(res.data)
        result ? resolve(result[1]) : reject(`${name}'s DOM Changed`)
    })
}).catch(e => e)


Promise.all(bloglist.map(element => getFeed(element)))
    .then(data => {
        data.forEach((value, index) => {
            content += bloglist[index].name + ': ' + data[index] + '\n'
        })
        content += '\nUpdate: UTC+8 ' + time
        update(content)
    })



