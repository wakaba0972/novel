const axios = require('axios')
const URLS = {
    'k': {
        n: "https://www.kadokawa.com.tw/product_list297.htm",
        m: "https://www.kadokawa.com.tw/product_list298.htm"
        },
    't': {
        n: "https://www.tongli.com.tw/NovelDetail.aspx",
        m: "https://www.tongli.com.tw/webpagebooks.aspx"
        },
    's': {
        n: "https://www.spp.com.tw/productlist?item1=02",
        m: "https://www.spp.com.tw/productlist?item1=01"
    }
}
const COOKIE = "_fbp=fb.2.1648649757903.618830472; visid_incap_1045467=9pxVAl+8SsCcIo8iySguzSRmRGIAAAAAQUIPAAAAAACXyL3eDLoonOx1bFj5vWu1; incap_ses_934_1045467=V22cFARPKUPd69Wiljz2DCRmRGIAAAAA7YejYg924PwjxieuXNNbWg=="
const HEADERS = {
    //'content-type': 'application/x-www-form-urlencoded',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
    //'cookie': COOKIE
}
/*
module.exports.getK = function(type, page){
    return new Promise(function(resolve, reject){
        axios.post(URLS.k[type],
            {
                Page: 2,
                Class1: 297
            },
            {
                headers: HEADERS
            }
        )
        .then(res=> {
            resolve(res.data)
        })
        .catch(err=> {
            reject(err)
        })
    }
)}*/

module.exports.getK = function(type, page){
    return new Promise(function(resolve, reject){
        axios.get(URLS.k[type],
            {
                withCredentials: true,
                headers: HEADERS,
            }
        )
        .then(res=> {
            resolve(res.data)
        })
        .catch(err=> {
            reject(err)
        })
    }
)}