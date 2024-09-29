import API from './api';
import UserList from './userList';
import '../src/styles/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
  const users = await API.fetchUsers();
  const userList = new UserList(users);

  userList.render();

  const filterInput = document.getElementById('filter');
  filterInput.addEventListener('input', (event) => {
    const value = event.target.value;
    userList.filterByName(value);
  });
});
