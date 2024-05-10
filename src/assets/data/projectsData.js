const projectsData = [
  {
    id: 1,
    title: "Task Manager",
    images: [
      require("../images/TM1.png"),
      require("../images/TM7.png"),
      require("../images/TM2.png"),
      require("../images/TM3.png"),
      require("../images/TM4.png"),
      require("../images/TM5.png"),
      require("../images/TM6.png"),
    ],
    description:
      " The CRUD Task Manager project is an extensive web application designed to streamline task management processes. Leveraging the power of React.js for the frontend, Node.js with Express.js for the backend, and MySQL for database management, this project offers a comprehensive solution for organizing tasks efficiently. The user interface is meticulously crafted using Tailwind CSS, ensuring a visually pleasing and responsive design that adapts seamlessly to different screen sizes and devices. Users are provided with a secure authentication system, allowing them to sign in and access their personalized task lists. Once authenticated, users can perform a myriad of actions including creating new tasks with detailed descriptions, setting due dates, assigning priorities, and categorizing tasks. The application facilitates easy navigation through tasks, enabling users to view, update, and delete tasks effortlessly. Each task's information is stored in a MySQL database, with Sequelize or similar ORM libraries handling data modeling and interactions, ensuring optimal performance and scalability. With its intuitive interface and robust functionality, the CRUD Task Manager empowers users to stay organized, boost productivity, and effectively manage their workload.",
    tec: ["reactjs", "nodejs", "expressjs", "mysql", "tailwindcss"],
    demo: {
      email: "yousseftaussi894@gmail.com",
      password: 1234,
    },
  },
  {
    id: 2,
    title: "Real time chat app ",
    images: [
      require("../images/Chat1.png"),
      require("../images/Chat6.png"),
      require("../images/Chat2.png"),
      require("../images/Chat3.png"),
      require("../images/Chat4.png"),
      require("../images/Chat5.png"),
    ],
    description:
      "Built with Node.js, Express, React, Tailwind CSS, Socket.IO, Sequelize, and more, this real-time chat application offers seamless communication between users. Users can create accounts, add friends, send invitations, and remove friends effortlessly. The application supports various types of messages including text, audio, and images, enhancing the user experience and enabling richer interactions. Leveraging the power of WebSockets with Socket.IO, messages are delivered instantaneously, ensuring a real-time conversation experience. With a sleek and intuitive user interface designed with React and Tailwind CSS, this app delivers a modern and responsive chat platform for users to connect and communicate in real-time.",
    tec: [
      "Reactjs",
      "Tailwindcss",
      "Nodejs",
      "expressjs",
      "Mysql",
      "Sequelize",
      "Socket.io",
      "WebSocket",
    ],
    demo: {
      email: "yousseftaussi894@gmail.com",
      password: 1234,
    },
  },
  {
    id: 3,
    title: "Real time chat app ",
    images: [
      require("../images/Chat1.png"),
      require("../images/Chat6.png"),
      require("../images/Chat2.png"),
      require("../images/Chat3.png"),
      require("../images/Chat4.png"),
      require("../images/Chat5.png"),
    ],
    description:
      "Built with Node.js, Express, React, Tailwind CSS, Socket.IO, Sequelize, and more, this real-time chat application offers seamless communication between users. Users can create accounts, add friends, send invitations, and remove friends effortlessly. The application supports various types of messages including text, audio, and images, enhancing the user experience and enabling richer interactions. Leveraging the power of WebSockets with Socket.IO, messages are delivered instantaneously, ensuring a real-time conversation experience. With a sleek and intuitive user interface designed with React and Tailwind CSS, this app delivers a modern and responsive chat platform for users to connect and communicate in real-time.",
    tec: [
      "Reactjs",
      "Tailwindcss",
      "Nodejs",
      "expressjs",
      "Mysql",
      "Sequelize",
      "Socket.io",
      "WebSocket",
    ],
    demo: {
      email: "yousseftaussi894@gmail.com",
      password: 1234,
    },
  },
];
export default projectsData;
