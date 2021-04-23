import { useState, FC } from "react"
import { useUserData } from "../hooks/useUserData";

interface FunctionalComponentProps {
    /** The user */
    userId?: string;
}

const useCounter = () => {
    const [count, setCount] = useState(0);
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)

    return { count, increment, decrement }
}

const FunctionalComponent: FC<FunctionalComponentProps> = (props) => {
    const { isLoading, error, user, userId } = useUserData(props.userId);
    const { count, increment, decrement } = useCounter();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>There was an error: {error.message}</div>
    if (!user) return <div>No user found with ID "{userId}"</div>

    return (
        <div>
            <h2>Functional Component</h2>
            Hello {user.name}! The count is {count}.
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default FunctionalComponent