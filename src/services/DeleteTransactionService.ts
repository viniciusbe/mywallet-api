import { getRepository } from 'typeorm';
import validator from 'validator';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<Transaction> {
    const transactionRepository = getRepository(Transaction);

    if (!validator.isUUID(id)) {
      throw new AppError('Id is not a valid UUID');
    }
    const findTransaction = await transactionRepository.findOne({
      where: { id },
    });

    if (!findTransaction) {
      throw new AppError('Id does not match any existing transaction');
    }

    const deletedTransaction = await transactionRepository.remove(
      findTransaction,
    );

    return deletedTransaction;
  }
}

export default DeleteTransactionService;
