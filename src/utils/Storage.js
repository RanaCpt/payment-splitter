export const getFromStorage = (key) => {
    try{
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }catch(error){
        return null;
    }
};

export const saveToStorage = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value));
    }catch(error){
        return null;
    }
};