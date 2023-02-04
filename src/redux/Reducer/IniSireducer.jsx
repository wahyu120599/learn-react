const IniSireducer= (state = 0, action)=>{
  switch (action.type){
    case "tambah":
        // return {
        //     ...state,
        //     state:state+=1
        // }
        return state=state+=1
    case "kurang":
        // return {
        //     ...state,
        //     state:state-=1
        // }
        return state=state-=1
    default:
        return state;
  }
}

export default IniSireducer;