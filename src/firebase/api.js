import db from './db';

export function getUsers() {
  return db
    .collection('Users')
    .get()
    .then((users) => users.docs.map((user) => user.data()))
    .catch((er) => console.log(er));
}

export async function setUsers() {
  const setUser = await db.collection('Users').doc('User').set({
    userId: 1222,
    email: 'firebase@gmail.com',
  });
  return setUser;
}
