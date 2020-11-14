import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDto {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDto): Transaction {
    if (value <= 0) {
      throw new Error('Value must be a positive number');
    }

    if (
      type === 'outcome' &&
      this.transactionsRepository.getBalance().total - value < 0
    ) {
      throw new Error('Insufficient funds available');
    }

    const transactionCreated = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transactionCreated;
  }
}

export default CreateTransactionService;
