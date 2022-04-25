export function checkToken() {
    let result = false;
    let isData = localStorage.getItem("Token");
    if (isData && isData !== null) {
        result = true;
    }
    return result;
}

export async function createAccount (createdUser) {
    let res = await fetch('http://localhost:5081/User/AddUsers', {
        method: "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if(!res.ok) {
        const message = `Am Error has Occurred ${res.status}`;
        throw new Error(message);
        console.log(data);
    }

    let data = await res.json();

}