const articles = [
    {
      "id": 1,
      "title": "The Future of Web Development",
      "content": "Web development is evolving rapidly, and the future is bright with new technologies like AI, WebAssembly, and serverless architecture. As the demand for faster and more efficient websites grows, developers are turning to new frameworks and tools to meet these needs. In this article, we explore the exciting developments that will shape the web development landscape over the next few years, including the rise of artificial intelligence for automating tasks, the impact of WebAssembly on performance, and how serverless solutions are changing the way we build applications.",
      "author": "John Doe",
      "likes": 345,
      "views": 1200,
      "votes": 13,
      "asked": "10 Minutes Ago",
      "tags":["Web Development"],
      "comments": [
        {
          "comment": "Great read! Looking forward to seeing how AI influences web dev.",
          "author": "Jane Smith"
        },
        {
          "comment": "I totally agree with the rise of WebAssembly. It's going to be a game changer.",
          "author": "Chris Lee"
        }
      ]
    },
    {
      "id": 2,
      "title": "JavaScript Trends in 2025",
      "content": "JavaScript continues to dominate the web development world, and 2025 promises to be another exciting year for the language. From new frameworks to the evolution of ECMAScript, JavaScript remains at the heart of modern web applications. In this article, we'll discuss the top trends shaping JavaScript development, such as the rise of TypeScript, the growing popularity of server-side rendering (SSR), and the impact of JavaScript in mobile app development. We’ll also explore how new tools and libraries are making JavaScript more efficient and developer-friendly.",
      "author": "Sarah Miller",
      "likes": 512,
      "tags": ["Javascript"],
      "views": 3400,
      "votes": 10,
      "asked": "56 Minutes Ago",
      "comments": [
        {
          "comment": "I'm excited to learn more about these frameworks, especially TypeScript.",
          "author": "Emma Davis"
        },
        {
          "comment": "JavaScript is definitely here to stay. The ecosystem is growing so fast!",
          "author": "Jake Wilson"
        }
      ]
    },
    {
      "id": 3,
      "title": "Building a Full-Stack Application with Node.js and React",
      "content": "In this article, we walk through the process of building a full-stack application using Node.js for the backend and React for the frontend. We’ll cover everything from setting up the Node.js server with Express to creating React components for the user interface. You'll learn how to connect your frontend to a backend API and how to manage state effectively in React. By the end of this guide, you'll have a fully functional web application and an understanding of how to integrate a backend with a frontend framework.",
      "author": "Lucas Brown",
      "tags":["Node.js", "React"],
      "likes": 678,
      "views": 4500,
      "votes": 25,
      "asked": "2 Days Ago",
      "comments": [
        {
          "comment": "This guide is so helpful! I just started using React and needed something like this.",
          "author": "Olivia Green"
        },
        {
          "comment": "I would love to see a part two that covers authentication.",
          "author": "David Scott"
        }
      ]
    },
    {
      "id": 4,
      "title": "Understanding CSS Grid: A Beginner's Guide",
      "content": "CSS Grid is a powerful layout system that allows developers to create complex and responsive designs with ease. Unlike traditional CSS layout techniques, CSS Grid enables two-dimensional layouts, making it easier to align elements in both rows and columns. In this beginner’s guide, we’ll cover the basics of CSS Grid, including how to set up a grid container, define grid items, and control their placement. We’ll also look at some common use cases and real-world examples of how CSS Grid can be used to create modern, responsive layouts.",
      "author": "Sophia White",
      "tags": ["CSS"],
      "likes": 234,
      "views": 1890,
      "votes": 20,
      "asked": "7 Hours Ago",
      "comments": [
        {
          "comment": "CSS Grid has changed the way I approach layouts. This guide is so clear and helpful!",
          "author": "James Miller"
        },
        {
          "comment": "I still find Flexbox a bit easier, but Grid is definitely powerful. Great tutorial!",
          "author": "Natalie Blue"
        }
      ]
    },
    {
      "id": 5,
      "title": "How to Optimize Your Website for Performance",
      "content": "Website performance is crucial for user satisfaction, SEO, and conversion rates. Slow loading times can drive users away and harm your site's search engine ranking. In this article, we discuss various performance optimization techniques that can significantly improve your website’s speed and efficiency. Topics include lazy loading images and assets, minimizing HTTP requests, optimizing CSS and JavaScript, and using caching strategies. We also cover tools you can use to analyze your website’s performance and identify bottlenecks that can be improved.",
      "author": "Matthew Johnson",
      "likes": 821,
      "views": 5200,
      "votes": 29,
      "tags": ["Optimization", "Web Development"],
      "asked": "1 Minute Ago",
      "comments": [
        {
          "comment": "Great tips! I've already implemented lazy loading on my site, and it's made a big difference.",
          "author": "Lily Roberts"
        },
        {
          "comment": "Performance is crucial, especially for mobile users. Thanks for the awesome suggestions!",
          "author": "William Harris"
        }
      ]
    },
    {
      "id": 6,
      "title": "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
      "content": "Contents Here",
      "author": "David Brown",
      "userPic": "https://image.api.playstation.com/cdn/UP2538/CUSA05620_00/cKQCz5nP7YeQo5Wpot7DlvZptrxrhBSe.png?w=440&thumb=false",
      "likes": 345,
      "views": 5200,
      "votes": 10,
      "answers": 2,
      "asked": "10 Minutes Ago",
      "tags":["Troubleshooting"],
      "comments": [
        {
          "comment": "Comment 1",
          "author": "Jane Smith"
        },
        {
          "comment": "Comment 2",
          "author": "Chris Lee"
        }
      ]
    },
    {
    "id": 7,
    "title": "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
    "content": "Contents Here",
    "author": "Arthur Smith",
    "userPic": "https://image.api.playstation.com/cdn/UP2538/CUSA05620_00/cKQCz5nP7YeQo5Wpot7DlvZptrxrhBSe.png?w=440&thumb=false",
    "likes": 600,
    "views": 4200,
    "votes": 30,
    "answers": 2,
    "asked": "3 Hours Ago",
    "tags": ["HTML"],
    "comments": [
        {
          "comment": "Comment 1",
          "author": "Jane Smith"
        },
        {
          "comment": "Comment 2",
          "author": "Chris Lee"
        }
      ]
  },
  {
    "id": 8,
    "title": "JavaScript validation for a form stops the form data from being submitted to mysql database",
    "content": "Contents Here",
    "author": "Amir Beckett",
    "userPic": "https://image.api.playstation.com/cdn/UP2538/CUSA05620_00/cKQCz5nP7YeQo5Wpot7DlvZptrxrhBSe.png?w=440&thumb=false",
    "likes": 2600,
    "views": 14200,
    "votes": 70,
    "answers": 2,
    "asked": "7 Hours Ago",
    "tags": ["Javascript", "Mysql"],
    "comments": [
        {
          "comment": "Comment 1",
          "author": "Jane Smith"
        },
        {
          "comment": "Comment 2",
          "author": "Chris Lee"
        }
      ]
  },
  {
    "id": 9,
    "title": "Help with Javascript",
    "content": "Content Here",
    "author": "Daotama",
    "likes": 3453,
    "views": 16700,
    "votes": 17,
    "asked": "10 Minutes Ago",
    "tags":["Javascript"],
    "comments": [
      {
        "comment": "Comment 1",
        "author": "Jane Smith"
      },
      {
        "comment": "Comment 2",
        "author": "Chris Lee"
      }
    ]
  },
  {
    "id": 10,
    "title": "Help with this error",
    "content": "Content Here",
    "author": "John Doe",
    "likes": 3453,
    "views": 16700,
    "votes": 38,
    "asked": "33 Minutes Ago",
    "tags":["HTML", "CSS"],
    "comments": [
      {
        "comment": "Comment 1",
        "author": "Jane Smith"
      },
      {
        "comment": "Comment 2",
        "author": "Chris Lee"
      },
      {
        "comment": "Comment 3",
        "author": "Daotama"
      },
    ]
  },
  {
    "id": 11,
    "title": "Some Advice",
    "content": "Content Here",
    "author": "Daotama",
    "likes": 253,
    "views": 12700,
    "votes": 29,
    "asked": "20 Hours Ago",
    "tags":["Web Development"],
    "comments": [
      {
        "comment": "Comment 1",
        "author": "Jane Smith"
      },
      {
        "comment": "Comment 2",
        "author": "Chris Lee"
      }
    ]
  },
  {
    "id": 12,
    "title": "How do I fix this?",
    "content": "Content Here",
    "author": "Daotama",
    "likes": 8453,
    "views": 56700,
    "votes": 48,
    "asked": "10 Minutes Ago",
    "tags":["React", "Tailwind"],
    "comments": [
      {
        "comment": "Comment 1",
        "author": "Jane Smith"
      },
      {
        "comment": "Comment 2",
        "author": "Chris Lee"
      }
    ]
  },
  {
    "id": 13,
    "title": "Help with this code here",
    "content": "Content Here",
    "author": "Jane Smith",
    "likes": 33,
    "views": 1700,
    "votes": 9,
    "asked": "38 Minutes Ago",
    "tags":["HTML", "CSS"],
    "comments": [
      {
        "comment": "Comment 1",
        "author": "John Doe"
      },
      {
        "comment": "Comment 2",
        "author": "Chris Lee"
      },
      {
        "comment": "Comment 3",
        "author": "Daotama"
      },
    ]
  },
  {
    "id": 14,
    "title": "How would I start coding when I start it out?",
    "content": "Content Here",
    "author": "David Brown",
    "likes": 35,
    "views": 1600,
    "votes": 8,
    "asked": "48 Minutes Ago",
    "tags":["HTML", "CSS"],
    "comments": [

    ]
  },
]
  
export default articles;