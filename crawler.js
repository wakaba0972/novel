const axios = require('axios')
const URLS = {
    'k': {
        n: "https://www.kadokawa.com.tw/product_list297.htm",
        m: "https://www.kadokawa.com.tw/product_list298.htm"
        },
    't': {
        n: "https://www.taipower.com.tw/tc/page.aspx?mid=206&cid=406&cchk=b6134cc6-838c-4bb9-b77a-0b0094afd49d",
        m: "https://www.tongli.com.tw/webpagebooks.aspx"
        },
    's': {
        n: "https://www.spp.com.tw/productlist?item1=02",
        m: "https://www.spp.com.tw/productlist?item1=01"
    }
}
const COOKIE = "_fbp=fb.2.1648649757903.618830472; incap_ses_934_1045467=V22cFARPKUPd69Wiljz2DCRmRGIAAAAA7YejYg924PwjxieuXNNbWg==; PHPSESSID=ulank8ip4f80ea8lhj2pklecb6; visid_incap_1045467=9pxVAl+8SsCcIo8iySguzSRmRGIAAAAAQkIPAAAAAACA+EWjAXIomgaPOxCwWQlb8Q/TLOZN8FHO; _ga=GA1.3.175109404.1648649778; _gid=GA1.3.1869672470.1648649778"
const COOKIEs = "incap_ses_934_1045467=5++pGmY+qjVo8PGiljz2DAiARGIAAAAAO3PDQry3V6nOMaXMcX8Adg==;"
const HEADERS = {
    //'content-type': 'application/x-www-form-urlencoded',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
    //'cookie': COOKIEs
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
        axios.get(URLS.t[type],
            {
                headers: HEADERS,
            }
        )
        .then(res=> {
            resolve(res.data)
        })
        .catch(err=> {
            reject(err.response)
        })
    }
)}