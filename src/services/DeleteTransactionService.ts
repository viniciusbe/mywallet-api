import { getRepository } from 'typeorm';
import validator from 'validator';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    if (!validator.isUUID(id)) {
      throw new AppError('Id is not a valid UUID');
    }
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Id does not match any existing transaction');
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
