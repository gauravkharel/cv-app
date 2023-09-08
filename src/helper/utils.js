import uniqid from "uniqid"

function getNewPoints(){
    return {id: uniqid(), text: ''}
}

function getPointList(){
    const list = []
    for (let i = 0; i < 3; ++i){
        list.push(getNewPoints())
    }

    return list;
}


export {getNewPoints, getPointList}

