var user= new Object();
user.name="divya";
user.age=19;
user.college="suiet";
user.place="ankola";

console.log(user);
//user.get(name)
//user.nameuser.keys()
console.log(Object.keys(user))
Object.keys(user)
//user.values()
//user.is("divya")
for(var key of Object.keys(user)){
    console.log(key);
}  
console.log(Object.values(user));
for(var value of Object.values(user));
{
console.log(value);
}