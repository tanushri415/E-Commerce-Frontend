const baseUrl = "/api";
const userBaseUrl = `${baseUrl}/users`;
const productsBaseUrl = 'https://fakestoreapi.com/products';

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
const loginUser = async (username, password) => {
    try {
        const resp =
            await fetch(`${userBaseUrl}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username, password
                })
            });
        const result = await resp.json();
        console.log(`api------>Login user result:`, result);
        return result;
    } catch (error) {
        console.error('something went wrong while logging user!', error);
    }
};


const getAllProducts = async () => {
    try {
        var products = [];
        await fetch(productsBaseUrl)
            .then((res) => res.json())
            .then((data) => products = data);
        return products;
    } catch (error) {
        console.error('something went wrong while getting all products!', error);
    }
};

const getProductCategories = async () => {
    try {
        var productCategories = [];
        await fetch(`${productsBaseUrl}/categories`)
            .then((res) => res.json())
            .then((data) => productCategories = data);
        return productCategories;
    } catch (error) {
        console.error('something went wrong while getting all product categories!', error);
    }
};

const getProductsOfSpecificCategory = async (category) => {
    try {
        var products = [];
        await fetch(`${productsBaseUrl}/category/${category}`)
            .then((res) => res.json())
            .then((data) => products = data);
        return products;
    } catch (error) {
        console.error('something went wrong while getting all product for category!', error);
    }
};

export { registerUser, loginUser, getAllProducts, getProductCategories, getProductsOfSpecificCategory };


