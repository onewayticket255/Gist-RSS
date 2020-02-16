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
    },
    {
        name: '卖萌凉',
        url:'https://www.jianshu.com/u/5e309e5486c6',
        regex:/class="title".*?>(.*?)</
    },
]

module.exports = bloglist


