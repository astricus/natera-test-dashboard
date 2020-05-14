import { createNewUserFromName } from './users.utils';
import data from '../../data.json';

describe('createNewUserFromName', () => {
  test('should return new user object', () => {
    const userId = '5';
    const userName = 'Ivan Petrov';
    const newUser = {
      userId: userId,
      userName: userName,
    };
    expect(
      createNewUserFromName(data.users, newUser).filter(
        (user) => user.id === userId
      )[0].name
    ).toEqual(userName);
  });
});
