
const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при сабміті форми

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевірка на незаповнені поля
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створення об'єкта з даними форми
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  // Очищення форми після сабміту
  form.reset();
});