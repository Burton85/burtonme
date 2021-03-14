const dataGetter = {
    getCover: async (url) => {
        let value = await fetch(url).then((response) => {
            return response.data.cover.scaled;
        });
        return value;
    },
    getData: async (url) => {
        let value = await fetch(url).then(function (response) {
            return response.json();
        });
        return value;
    },
};
export default dataGetter;
