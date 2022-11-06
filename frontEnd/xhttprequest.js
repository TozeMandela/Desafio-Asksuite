class XhttpRequest {

    static get(url){
        return this.GP('get',url);
    }
    static Post(url, obj){
        return this.GP('post',url, obj);
    }

    static GP(Method,url, params){
        const Xhr = new XMLHttpRequest();
        Xhr.open(Method.toUpperCase(), url)

        Xhr.onload = ()=>{
            console.log(Xhr.responseText)
        }

        Xhr.onerror = e=>{
            console.log(e)
        }
        Xhr.setRequestHeader('json', 'aplication/json');
        Xhr.send(params)
    }
    
}

module.exports = XhttpRequest;