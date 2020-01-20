export const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem('state')
        console.log("localstorage is defined")
        if(serializedState===null)
            return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    } finally {

    }
}


export const saveState = (state)=>{
    try {
        const serializedState = JSON.stringify({
            auth: state.auth,
        })
        // const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {

    } finally {

    }

}
