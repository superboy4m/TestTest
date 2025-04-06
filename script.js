// Массив пар логин/пароль
const users = [
  { username: 'guest', password: '' },
  { username: 'UserName', password: '12345' },
  { username: 'Admin', password: 'Admin' }
];

// Обработчик события отправки формы авторизации
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let isAuthenticated = false;

  // Проходим по каждому пользователю в массиве
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      isAuthenticated = true;
      break; // Выходим из цикла, если нашли совпадение
    }
  }

  if (isAuthenticated) {
    // Успешная авторизация: показываем основной контент сайта
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
  } else {
    // Ошибка авторизации: показываем сообщение об ошибке
    document.getElementById('errorMessage').innerText = 'Неверный логин или пароль';
  }
});
