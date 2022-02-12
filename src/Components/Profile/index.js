import { useSelector } from "react-redux";
import store from "../../Store";
import checkBox from "./actions";

const Profile = () => {
    const state = useSelector(state => state);
    const handleCheck = () =>{
        store.dispatch(checkBox)
    }
    return (
        <>
            <h2>Profile</h2>
            <input type = 'checkbox' checked = {state.checked} onChange={handleCheck}/>
        </>
        
        
    )
}

export default Profile;