const users = [
  {
    name: "Camila",
    email: "camila@bossabox.com"
  }
]

module.exports = {
  insertUser: (user) => {
    console.log("conectando com banco de dados...");
    users.push(user);
    return users;
    
  }
}