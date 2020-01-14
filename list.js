const bloglist = [
    {
        name: '某科学的最后之作',
        url: 'http://yunfwe.cn/',
        regex: /post-title-link.*?href="(.*?)"/
    },
    {
        name: 'Slanterns blog',
        url:'https://blog.slanterns.net/',
        regex:/post-title[\s\S]*?href="(.*?)"/
    }
]

module.exports = bloglist


