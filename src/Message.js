// import React, { useState } from "react";

// const Message = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <p>You are logged in!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>You are not logged in!</p>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Message;

// import React from 'react';

// const Message = () => {
//   const items = ['Chocolate', 'Black Current', 'Butter Scotch', 'Death by Chocolate', 'Cotton Candy'];

//   return (
//     <div>
//       <h2>Icecream Flavours</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Message;

// import React, { useState } from "react";

// const Message = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div>
//       <h2>React Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             // id="email"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default Message;

import React from "react";

const ItemList = React.memo(({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  }

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, `Item ${prevState.items.length + 1}`],
    }));
  };

  render() {
    return (
      <div>
        <h2>Item List</h2>
        <ItemList items={this.state.items} />
        <button onClick={this.addItem}>Add New Item</button>
      </div>
    );
  }
}

export default Message;
