import makeTodosService from "./todos-example";

module.exports = ({
    //the object which is used to retrieve data from a datasource
    //actual datasource does not matter. could be db or REST API
    todosRepository,
    //user that is using the service
    //so we can restirct access to their own todos
    currentUser
}) {
    return {
        getTodos: async (query) => {
            const todos = await todos
        }
    }
};
}

//https://medium.com/@Jeffijoe/dependency-injection-in-node-js-2016-edition-part-2-aedc5fd6eed0