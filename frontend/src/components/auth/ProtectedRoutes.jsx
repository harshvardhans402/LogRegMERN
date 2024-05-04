// ProtectedRoutes.js
import LoginForm from "./LoginForm";
import Home from "../Home";
const deserializeState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined; // If no state is stored, return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error deserializing state:', err);
        return undefined; // Return undefined if deserialization fails
    }
};
export default function ProtectedRoutes() {

    const initialState = deserializeState();
    console.log(initialState)
    let isLoggedIn = false;
    if (initialState) {
        isLoggedIn = initialState.isLoggedIn;
    }

    return (
        <div>
            {
                (isLoggedIn) ?
                    <Home /> :

                    <LoginForm />
            }




        </div>



    );
}
