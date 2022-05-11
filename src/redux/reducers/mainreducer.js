
const initState = {count:[{text:'打豆豆',type:false,key:1},{text:'睡觉',type:false,key:2}],num:0};

export default function mainreducer (pre = initState,action){
    const {type,data} = action
    switch (type){
        case "add":
            return {count:[...pre.count,{text:data,type:false,key:pre.count.length+1}],num:0};
        case "changenum":
            return {count:[...pre.count],num:data};   
        default:
            return pre;
    }
}
