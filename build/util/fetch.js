import config from '../config';
const Fetch = (url) => {
    return new Promise(resolve => {
        fetch(config.apihost + url)
            .then(response => response.json())
            .then(res => resolve(res));
    });
};
export default Fetch;
//# sourceMappingURL=fetch.js.map