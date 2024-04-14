import data from "./danhSachGhe.json"




const inittolstate = {
    listcol:[
        {col:1},{col:2},{col:3},{col:4},{col:5},{col:""},{col:6},{col:7},{col:8},{col:9},{col:10},{col:11},{col:12},
    ],
    listrow:[
        {row:"A"},{row:"B"},{row:"C"},{row:"D"},{row:"E"},{row:""},{row:"F"},{row:"G"},{row:"H"},{row:"I"},{row:"J"},
    ],
    listdata:data,
    listuser:[],
    userData:null,
    systemUser:null,
}


const  datareducer = (stare=inittolstate,action)=>{
    console.log(action)
    switch (action.type) {
        case "UPDATA_USER":
          const newuserData = {...stare.userData,...action.payload}
         
          stare.userData = newuserData
           return {...stare}
        case "UPDATE_DATA":
             const newListUser = [...stare.listuser]
             let newUser = {...stare.userData}
             newListUser.push(action.payload);
             newUser = null
             stare.listuser = newListUser;
             stare.userData = newUser
             return {...stare}
        case "UP_SYSTEM":
           let newsystem = action.payload;
           
           stare.systemUser = newsystem
           return {...stare}
        case "DELETE_SEAT":
           let newsystem1 = action.payload;
           stare.systemUser = newsystem1
           const newlistdata = [...stare.listuser];
           if(newlistdata[newsystem1.index].seat.length >0){
            newlistdata[newsystem1.index] = newsystem1;
           }
           stare.listuser = newlistdata
           return {...stare}
        case "EDIT_DATA":
            const arr = [...stare.listuser];
            const newarr = arr.filter(pro=>{
                  return pro.seat.length !== 0;
            });
            stare.listuser = newarr;
            return {...stare}
        default:
            return {...stare}
    }
}

export default datareducer