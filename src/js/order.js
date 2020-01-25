 export const dateFilter = (objectArray, filterYear) => {
    let orderedArray = [];
    if (filterYear === '*'){
        return objectArray
    } else {
    for (let i = 0; i < objectArray.length; i++){
        if (parseInt(objectArray[i].firstBrewed[3]+objectArray[i].firstBrewed[4]+objectArray[i].firstBrewed[5]+objectArray[i].firstBrewed[6]) == filterYear){
            orderedArray.push(objectArray[i]);
        }
    }
    return orderedArray;
    }
}

export default dateFilter;