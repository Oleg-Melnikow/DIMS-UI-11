import faker from 'faker';
import db from '../firebase/db';

function FakerDB() {
  db.collection('Users')
    .get()
    .then((users) => {
      if (users.docs.length <= 1) {
        createUser();
      }
    });

  function createUser() {
    for (let i = 0; i <= 2; i + 1) {
      const userId = faker.fake('{{random.number}}');
      const member = db.collection('Users').doc(userId);
      const members = db.collection('Users');

      member
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log('Document data:', doc.data());
          } else {
            const firstName = faker.fake('{{name.firstName}}');
            const lastName = faker.fake('{{name.lastName}}');
            const email = faker.fake('{{internet.email}}');

            members.doc(userId).set({
              userId,
              directionId: i,
              firstName,
              email,
              lastName,
              sex: 'male',
              education: 'hight',
              birthDate: faker.fake('{{date.past}}'),
              university: faker.fake('{{company.companyName}}'),
              mathScore: faker.fake('{{random.number}}'),
              address: faker.fake('{{address.streetAddress}}'),
              mobilePhone: faker.fake('{{phone.phoneNumber}}'),
              skype: faker.fake('{{internet.userName}}'),
              startDate: faker.fake('{{date.past}}'),
            });
          }
        })
        .catch((error) => console.log('Error getting document:', error));
    }
  }
}

export default FakerDB;
