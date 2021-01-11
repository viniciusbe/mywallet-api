import { EntityRepository, getRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactionsRepository = getRepository(Transaction);

    const transactions = await transactionsRepository.find();

    const { income, outcome, total } = transactions.reduce(
      (accumulator: Balance, currentTransaction: Transaction) => {
        if (currentTransaction.type === 'income') {
          accumulator.income += Number(currentTransaction.value);
        }
        if (currentTransaction.type === 'outcome') {
          accumulator.outcome += Number(currentTransaction.value);
        }

        accumulator.total = accumulator.income - accumulator.outcome;

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
