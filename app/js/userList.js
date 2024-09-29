import User from './user';

class UserList {
  constructor(users) {
    this.users = users.map(user => new User(user));
    this.filteredUsers = this.users;
  }

  filterByName(name) {
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    this.render();
  }

  render() {
    const userContainer = document.getElementById('user-list');
    userContainer.innerHTML = this.filteredUsers.map(user => user.render()).join('');
  }
}

export default UserList;
