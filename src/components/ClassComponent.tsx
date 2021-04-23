import React from "react";
import { getCurrentUserId, User, userService } from "../entities/User";

interface ClassComponentProps {
    userId?: string;
}

interface ClassComponentState {
    isLoading: boolean;
    user: User | null;
    error: Error | null;
    count: number;
}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
    userId: string;
    constructor(props: ClassComponentProps) {
        super(props);
        this.userId = props.userId ? props.userId : getCurrentUserId()
        this.state = {
            isLoading: true,
            error: null,
            user: null,
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    componentDidMount() {
        this.loadUser()
    }

    componentDidUpdate() {
        if (this.props.userId && this.props.userId !== this.userId) {
            this.userId = this.props.userId;
            this.loadUser();
        }
    }

    loadUser() {
        this.setState({ isLoading: true })
        userService.getById(this.userId)
            .then(user => this.setState({ user, error: null }))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }))
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { isLoading, error, user, count } = this.state
        if (isLoading) return <div>Loading...</div>
        if (error) return <div>There was an error: {error.message}</div>
        if (!user) return <div>No user found with ID "{this.userId}"</div>

        return (
            <div>
                <h2>Class Component</h2>
                Hello {user.name}! The count is {count}.
                <div>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}

export default ClassComponent