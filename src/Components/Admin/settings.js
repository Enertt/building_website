const bcrypt = require('bcryptjs');

const saltRounds = 10; // Уровень соли для хеширования

// // Генерируем соль и хешируем пароль
// bcrypt.genSalt(saltRounds, function(err, salt) {
//   bcrypt.hash(password, salt, function(err, hash) {
//     if (err) {
//       // Обработка ошибки
//     } else {
//       // Ваш хешированный пароль - hash
//     }
//   });
// });

const hashedPassword = '$2a$12$pwpMaHikNeucenr1njwgDuar65C.l15oMJVyZwgRmk2hI3n/aaS2K';

const checkHash = async (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashedPassword, function (err, result) {
        if (err) {
          reject(err); // Обработка ошибки
        } else {
          resolve(result); // Возвращаем результат асинхронно
        }
      });
    });
  };

export default checkHash