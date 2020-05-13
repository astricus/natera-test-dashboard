export const createNewUserFromName = (users, { userName, userId }) => {
  const avatarUrl = `https://randomuser.me/api/portraits/${
    Math.random() > 0.5 ? 'men' : 'women'
  }/${parseInt(1 + Math.random() * 98).toString()}.jpg`;
  const position = 'Frontend Developer';
  const newUser = {
    id: userId,
    name: userName,
    position: position,
    avatarUrl: avatarUrl,
  };
  return [...users, newUser];
};
