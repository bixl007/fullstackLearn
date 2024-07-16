// type User = {
//   id: string;
//   username: string;
// };

// type Users = {
//   [key: string]: User;
// };

// const users = {
//   sfsdf: {
//     id: "sdfs",
//     username: "Xyz",
//   },
//   sdfsd: {
//     id: "sfgrre",
//     username: "Abcd",
//   },
// };

// type Users = Record<string, { age: number; name: string }>;

// const user: Users = {
//   dfsd: { age: 21, name: "rhgr" },
//   dfdsf: { age: 21, name: "rhgsgf" },
// };

// type User = {
//   name: string;
//   age: number;
// };

// const users = new Map<string, User>();

// users.set("sdf", { name: "gfd", age: 34 });

// const user = users.get("sdf");
// console.log(user);

// type EventCheck = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventCheck, 'scroll'>;

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); 
// handleEvent('scroll'); 