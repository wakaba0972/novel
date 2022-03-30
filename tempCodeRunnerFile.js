
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