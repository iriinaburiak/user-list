class User {
    constructor({ id, name, email, phone }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  
    render() {
      return `
        <div class="user-card" data-id="${this.id}">
          <h2>${this.name}</h2>
          <p>Email: ${this.email}</p>
          <p>Phone: ${this.phone}</p>
        </div>
      `;
    }
  }
  
  export default User;
  