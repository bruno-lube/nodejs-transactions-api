import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;

    this.transactions.forEach(trans => {
      if (trans.type === 'income') {
        income += trans.value;
      } else {
        outcome += trans.value;
      }
    });

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
