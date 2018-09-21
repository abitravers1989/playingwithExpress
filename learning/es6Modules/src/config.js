//const apiKey = 'abc1234';

//variables are scoped to their module.
//files are self contained. no global variables.

// export default apiKey;

module.exports = {
    apiKey: () => {
        return 'abc1234';
    },

    sayHi: (name) => {
        console.log(`hi ${name}`);
    }
}

