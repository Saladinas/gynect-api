import { DataSource } from "typeorm";
import { AccountType } from "../entity";
import { AccountTypeEnum } from "../enums";

export const seedAccountTypes = async (dataSource: DataSource) => {
  const accountTypeRepository = dataSource.getRepository(AccountType);

  for (const value of Object.values(AccountTypeEnum)) {
    const accountType = {
      value,
    };

    await accountTypeRepository.save(accountType);
  }
};
