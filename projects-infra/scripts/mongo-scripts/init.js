db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [ "readWrite", "dbAdmin" ]
  }
)

db.createCollection("users")
db.createCollection("notes");
db.createCollection("notebooks");
db.createCollection("colorPallets");

db.users.insert([{ 
_id: "1", userId: "1", userName: "user" 
}, { 
_id: "2", userId: "2", userName: "admin" 
}]);

db.colorPallets.insert([{
_id: "3", userName: "user", colors: []
}, {
_id: "4", userName: "admin", colors: []
}]);
