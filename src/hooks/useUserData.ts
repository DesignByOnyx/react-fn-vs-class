import { useEffect, useState } from "react";
import { getCurrentUserId, User, userService } from "../entities/User";

export const useUserData = (userId?: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [user, setUser] = useState<User | null>(null);
    userId = userId ? userId : getCurrentUserId();

    useEffect(() => {
        if (userId) {
            setIsLoading(true)
            userService.getById(userId)
                .then(user => { setUser(user); setError(null); })
                .catch(error => setError(error))
                .finally(() => setIsLoading(false))
        }
    }, [userId])

    return { isLoading, error, user, userId }
}