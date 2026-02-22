import { useAsyncStorage } from './useAsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_KEY, USERS_KEY } from '../constants';

describe('useAsyncStorage', () => {
  const hook = useAsyncStorage();

  const mockUser = { name: 'John', email: 'john@test.com', password: '123456' };
  const mockUsers = [
    { name: 'John', email: 'john@test.com', password: '123456' },
    { name: 'Jane', email: 'jane@test.com', password: 'abcdef' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save a user', async () => {
    await hook.saveUser(mockUser);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      USER_KEY,
      JSON.stringify(mockUser),
    );
  });

  it('should save multiple users', async () => {
    await hook.saveUsers(mockUsers);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      USERS_KEY,
      JSON.stringify(mockUsers),
    );
  });

  it('should get a user', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(mockUser),
    );
    const user = await hook.getUser();
    expect(user).toEqual(mockUser);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(USER_KEY);
  });

  it('should return null if no user exists', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    const user = await hook.getUser();
    expect(user).toBeNull();
  });

  it('should get multiple users', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(mockUsers),
    );
    const users = await hook.getUsers();
    expect(users).toEqual(mockUsers);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(USERS_KEY);
  });

  it('should return empty array if no users exist', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    const users = await hook.getUsers();
    expect(users).toEqual([]);
  });

  it('should remove a user', async () => {
    await hook.removeUser();
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(USER_KEY);
  });

  it('should handle AsyncStorage errors gracefully', async () => {
    (AsyncStorage.setItem as jest.Mock).mockRejectedValueOnce(
      new Error('fail'),
    );
    (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(
      new Error('fail'),
    );
    (AsyncStorage.removeItem as jest.Mock).mockRejectedValueOnce(
      new Error('fail'),
    );

    await expect(hook.saveUser(mockUser)).resolves.toBeUndefined();
    await expect(hook.saveUsers(mockUsers)).resolves.toBeUndefined();
    await expect(hook.getUser()).resolves.toBeNull();
    await expect(hook.getUsers()).resolves.toEqual([]);
    await expect(hook.removeUser()).resolves.toBeUndefined();
  });
});
