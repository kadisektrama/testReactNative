export async function getUsersRoute() {
    return await (await fetch("http://localhost:3000/users", {
        method: "GET"

    })).json()




}

export async function getAllDepartments(token) {
    return await (await fetch("/user/departments", {
        method: "GET",
        headers: {
            "Authorization": `Bearer_${token}`
        }
    })).json();
}

export async function addNewUser(user) {
    return await (await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })).json()
}