export type User = {
    id: string;
    name: string;
}

export const getCurrentUserId = () => '1234'

export const userService = {
    getById(id: string) {
        // AJAX request
        // return Promise.reject(new Error('Not found'))
        // return Promise.resolve(null)
        return Promise.resolve({ id, name: 'Ryan' } as User)
    }
}