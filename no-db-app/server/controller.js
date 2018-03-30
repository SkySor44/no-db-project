let id = 0;
let transactions = [];

module.exports = {
create: (req, res) => {
    let {name, amount} = req.body;
    transactions.push({id, name, amount});
    id++;
    res.status(200).send(transactions);
},

read: (req, res) => {
    res.status(200).send(transactions);
},

update: (req, res) => {
    let {name, amount} = req.body;
    const updateId = req.params.id;
    const transactionIndex = transactions.findIndex(transaction => transaction.id == updateId)
    let transaction = transactions[transactionIndex];
    transactions[transactionIndex] = {
        id: transaction.id,
        name: name || transaction.name,
        amount: amount || transaction.amount
    }

    res.status(200).send(transactions);
},

delete: (req, res) => {
    const deleteId = req.params.id;
    transactionIndex = transactions.findIndex(transaction => transaction.id == deleteId)
    transactions.splice(transactionIndex, 1);

    res.status(200).send(transactions);
}
}