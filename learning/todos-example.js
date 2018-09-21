export default function makeTodosService({ db }) {
    return {
        getTodos: () => {
            return db.query('select * from todos')
        }
    }
}

// export default class TodosService {
//     constructor({ db }) {
//         this.db = db;
//     }
//     getTodos() {
//         return this.db.query('select * from todos');
//     }
// }