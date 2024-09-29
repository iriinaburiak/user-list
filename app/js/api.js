class API {
    static async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return await response.json();
    }
  }
  
  export default API;
  