var ismath = function(p,s) {
    let sindex =0
    let pindex =0
    
    let sstarindex=-1
    let pstarindex=-1
while(sindex <s.length){
    if(pindex < p.length && compare(s[sindex], p[pindex])){
        sindex++
        pindex++
    }else if (pindex < p.length && p[pindex]==="*"){
        pstarindex = pindex
        sstarindex =sindex
        pindex++
    }else if (sstarindex != -1 ){
        sindex = sstarindex + 1
        pindex = pstarindex +1 
        sstarindex++
    }else{
        return false
    }
    }
    while(pindex <p.length&& p[pindex]==="*"){
        pindex++
    }
    return pindex = p.length
}
function compare(s,p){
    if(p==="?") return  true
    return p === s
}