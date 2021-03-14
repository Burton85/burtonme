const dataGetter = {
    getCover: async (url) => {
        let value = await fetch(url)
            .then((response) => {
                return response.data.cover.scaled;
            })
            .catch((error) => {
                alert(error);
            });
        return value;
    },
    getData: async (url) => {
        let value = await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch((error) => {
                alert(error);
            });
        return value;
    },
};
export default dataGetter;
