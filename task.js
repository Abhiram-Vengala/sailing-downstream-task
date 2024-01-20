
function filterList(list){
    if(list.length%10!=0){
        throw new Error('List length must be a multiple of 10');
    }

    const filterList = list.filter((_,index)=>index%2!==0&&index%3!==0);
    return filterList;
}

module.exports = filterList;