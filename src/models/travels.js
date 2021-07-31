export default {
    namespace: 'travels',
    state: {
        travelList:["旅记1","旅记2","旅记3","旅记4","旅记5","旅记6","旅记7"],
        selected:{title:"旅记1",content:"2002年的第一场雪"},
    },
    reducers: {
        'saveList'(state, {payload}) {
            return {...state.travelList,...payload,}
        },
        'saveSelected'(state,{payload}) {
            return{...state.selected,...payload}
        }
    },
    effects: {
        *fetchList({payload:id},{call, put}){
           yield put({type:'saveList'})
        },
        *fetchSingle({payload:id},{call, put}){
           
        }
    }
}