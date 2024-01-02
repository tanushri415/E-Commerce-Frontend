const baseUrl = "/api";
const userBaseUrl = `${baseUrl}/users`;

const registerUser = async (username, password) => {
    try {
        const resp =
            await fetch(`${userBaseUrl}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username, password
                })
            });
        const result = await resp.json();
        console.log(`api------>register user result:`, result);
        return result;
    } catch (error) {
        console.error('something went wrong while registering user!', error);
    }
};

export { registerUser };
