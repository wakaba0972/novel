axios = require('axios')

var urls = {
    'k': {
        'n': "https://www.kadokawa.com.tw/product_list297.htm",
        'm': "https://www.kadokawa.com.tw/product_list298.htm"
        },
    't': {
        'n': "https://www.tongli.com.tw/NovelDetail.aspx",
        'm': "https://www.tongli.com.tw/webpagebooks.aspx"
        },
    's': {
        'n': "https://www.spp.com.tw/productlist?item1=02",
        'm': "https://www.spp.com.tw/productlist?item1=01"
    }
}

module.exports.getK = function(type){
    return new Promise(function(resolve, reject){
        {url: urls.k[type]}
    }
)}