import { IResDto } from "../../types/global.type";
import { IUser } from "../../types/users";
import { httpClient } from "../client";
import { urls } from "../urls";

interface IUserResDto extends IResDto {
  users: IUser[];
}
type fetchUsers = (skip: number) => Promise<IUserResDto>;

export const fetchUsers: fetchUsers = async (skip) => {
  const params = { skip: skip, limit: 10 };
  const response = await httpClient().get<IUserResDto>(urls.users.list, {
    params: params,
  });
  return response.data;
};
