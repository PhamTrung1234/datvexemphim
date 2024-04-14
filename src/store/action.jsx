export const nhapLieu=(data)=>{
    return{
        type:"UPDATA_USER",
        payload: data
    }
}
export const upSystem=(data)=>{
     return {
        type:"DELETE_SEAT",
        payload:data,
     }
}


export const nhapLaiLieu = (data)=>{
    return {
        type: "UPDATA_USER",
        payload: data,
    }
}


export const editData=()=>{
    return {
        type:"EDIT_DATA",
              payload:null,
    }
}

export const updateListUser =(data)=>{
    return {
        type: "UPDATE_DATA",
        payload: data,
    }
}

export const upDateSystem = (data)=>{
       return {
        type: "UP_SYSTEM",
        payload: data,
       }
}