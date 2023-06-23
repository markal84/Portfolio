const progresssPal = 'ProgressPal project';

export const blogArticles = [
  {
    id: 1,
    date: '24.04.2023',
    project: progresssPal,
    title: 'Day 1: Planning Stage',
    desc: "The idea behind this app emerged from my desire to have a clear and efficient way of monitoring my fitness progress. Up until now, I've been relying on a simple document on my phone, where I would update my exercise repetitions and weights. However, this approach made it difficult to track how quickly or slowly I was progressing. So, I decided to embark on creating my own app.",
    summary:
      'Throughout the day, I learned the importance of careful planning and prioritizing core functionalities. Moving forward, I am equipped with Vite and React, which will enable me to create a responsive and efficient gym progress tracking app.',
    fullDesc:
      "To kickstart the development process, I resorted to my trusty drawing board. My approach involves first planning the core functionalities and features of the app. I aim to implement them as soon as possible, focusing on minimum UI design. To ensure the reliability of my app, I employ Jest for writing tests. For this project, I opted for Vite with React as my framework. The combination of Vite's fast build process and React's versatility provides a solid foundation for developing a responsive and efficient gym progress tracking app. With the initial stages of planning, implementation, and the choice of tools in place, I'm excited to dive deeper into the development process of my gym progress tracking app. Stay tuned for more updates and insights as I continue working on this project.",
  },
  {
    id: 2,
    date: '27.04.2023',
    project: progresssPal,
    title: 'Day 3: API PUT Request Struggles',
    desc: "I'll discuss the challenges I encountered with prop drilling while attempting to refactor my code. Specifically, I'll share how I made the mistake of trying to move a portion of the code responsible for adding exercises from the ExerciseList module to the App module. This led to unprofessional and cumbersome prop passing between components, ultimately resulting in the need to revert to a previous Git commit.",
    summary:
      'Prop drilling can introduce complexity and maintenance issues in the codebase. Moving code between components without considering the implications can result in unprofessional prop passing. Reverting to a previous Git commit can be a viable solution to address issues and avoid development delays. Exploring alternative solutions, such as the ref hook, can provide more efficient and cleaner code implementation.',
    fullDesc:
      'During the process, I faced difficulties in grasping the backend-frontend API call connection and what data was sent and received. Debugging on the backend required examining server logs and analyzing data flow, while frontend debugging involved inspecting the UI and monitoring network requests.',
  },
  {
    id: 3,
    date: '30.04.2023',
    project: progresssPal,
    title: 'Day 5: Prop Drilling',
    desc: 'Understanding the connection between API calls and requests between the two components was challenging at first, as was debugging on the backend versus the frontend. Implementing edit requests in my gym progress tracking app was a challenge. Understanding the backend-frontend API connection and debugging processes were key lessons learned during this phase.',
    summary:
      'Understanding the backend-frontend API call connection and data flow was initially challenging. Backend debugging involved examining server logs and analyzing data flow. Frontend debugging included inspecting the UI and monitoring network requests.',
    fullDesc:
      'Prop Drilling Challenges: In my attempt to improve the code structure, I made the error of moving the code responsible for adding exercises from the ExerciseList component to the App component. This resulted in prop drilling, where I had to pass props from the App component through intermediate components to reach the ExerciseList component. Not only did this make the codebase look unprofessional, but it also introduced complexity and potential maintenance issues. Reverting to a Previous Commit: Realizing the issues caused by prop drilling, I decided to revert to the previous Git commit where the logic remained in the ExerciseList component. While it may seem like a setback, I made this decision to avoid putting a hold on my development progress. However, I plan to revisit this issue in the future and utilize the ref hook as a more efficient solution. Conclusion: Prop drilling proved to be a challenge as I attempted to refactor my code. The attempt to move code between components resulted in unprofessional prop passing and ultimately led to a decision to revert to a previous Git commit. Although I left the logic in the ExerciseList component for now, I plan to explore using the ref hook in the future to address the issue more effectively.',
  },
  {
    id: '4',
    date: '01.05.2023',
    project: progresssPal,
    title: 'Day 7: Overcoming Update Form Struggles',
    desc: 'During the implementation of the updateExerciseForm feature in my ProgressPal app, I encountered several obstacles that required careful debugging and analysis. From addressing a "key" prop warning to resolving issues with state updates, I\'ll share my struggles and the steps taken to overcome them.',
    summary:
      'Overcoming the struggles encountered during the updateExerciseForm implementation in the ProgressPal app provided valuable lessons for my development journey. I learned about the significance of proper backend error handling, the importance of careful data flow analysis for state updates, and the need for comprehensive test coverage.',
    fullDesc:
      'Encountering the "key" Prop Warning: While working on the updateExerciseForm, I came across a "key" prop warning, which prompted me to investigate and resolve the issue. Through debugging and logging, I discovered that the problem was caused by a nested object in the edited exercise. This experience taught me the importance of thorough backend error handling and response structure validation. Debugging State Updates: After addressing the "key" prop warning, I encountered difficulties with state updates. By revisiting the update exercise handler and service, I identified that the backend was returning the entire workout instead of just the updated exercise. This challenge taught me the significance of carefully examining data flow and ensuring correct data manipulation for seamless state management.',
  },
  {
    id: 5,
    date: '03.05.2023',
    project: progresssPal,
    title: 'Day 9: Resolving Weight Parameter Display Issue',
    desc: 'During the development of the ProgressPal app, I encountered challenges related to the weight parameter within the exercise object. In this article, I will discuss the struggles I faced and the steps taken to resolve the issue. From implementing conditions on the backend to tweaking requests, I found a solution that ensured accurate weight display in the app.',
    summary:
      'The struggle with the weight parameter within the exercise object posed a challenge during the development of the ProgressPal app. By addressing the issue at the backend level and optimizing the conditions within the create and update requests, I was able to overcome the problem of displaying "0kg" or empty weight positions. This experience taught me the importance of handling data consistency and logic comprehensively in the backend to minimize frontend complexity.',
    fullDesc:
      'Struggling with the Weight Parameter: One challenge I faced was that setting the weight parameter to 0 resulted in displaying "0kg" in the exercises list. To address this issue, I initially added a condition on the backend to remove the created or updated weight parameter from the exercise body. However, even after implementing this condition, the empty weight position still appeared on the frontend. Exploring Solutions on the Frontend: In an attempt to solve the issue, I initially considered adding a simple condition on the exercise component to prevent displaying the weight if it was equal to 0 or undefined. Unfortunately, this approach did not yield the desired results. Realizing that duplicating conditions on the frontend might not be the most efficient solution, I decided to focus on optimizing the backend to handle the weight parameter more effectively. Optimizing Conditions on the Backend: To tackle the weight parameter problem, I decided to refine the conditions on the backend. By fine-tuning the logic within the create and update requests, I successfully resolved the issue. This approach eliminated the need for repetitive conditions on the frontend and ensured consistent and accurate weight display in the ProgressPal app.',
  },
  {
    id: '6',
    date: '04.05.2023',
    project: progresssPal,
    title: 'Day 10: Successful User Authentication Implementation',
    desc: "On Day 10 of my ProgressPal app development journey, I focused on implementing user authentication. Surprisingly, this implementation went much smoother compared to my previous attempt during the Helsinki Fullstack course. Following the course instructions, I successfully integrated user authentication into the app's core functionality. With this milestone achieved, I now face the decision of either refactoring the bloated app.jsx code or focusing on proper styling before proceeding with feature additions and improvements.",
    summary:
      'Day 10 marked a significant achievement in the development of the ProgressPal app with the successful implementation of user authentication. Compared to my previous attempt, this process went smoothly, reflecting my growth and learning from past experiences. Now, with the core functionality in place, I need to decide whether to prioritize refactoring the app.jsx code or enhancing the styling before moving forward.',
    fullDesc:
      "Smooth User Authentication Implementation: The process of incorporating user authentication into the ProgressPal app exceeded my expectations in terms of ease and efficiency. Drawing from my past experience and the lessons learned during the Helsinki Fullstack course, I approached this implementation with a clearer understanding of the necessary steps. Following the course instructions closely, I navigated through the authentication process seamlessly, achieving a successful integration within the app. Next Steps: Refactoring or Styling? Having completed the core functionality of the app, I now stand at a crossroads. One option is to prioritize refactoring the app.jsx code, which has become bloated and could benefit from structural improvements. This would enhance the app's maintainability and code organization. Alternatively, I could shift my focus to styling the app properly before moving on to adding new features and making further improvements. This would improve the overall user experience and visual appeal of the ProgressPal app.",
  },
  {
    id: '7',
    date: '05.05.2023',
    project: progresssPal,
    title: 'Day 11: Struggles with Date Formatting and Localization',
    desc: 'On the eleventh day of developing the ProgressPal app, I encountered challenges related to date handling, specifically with formatting and localization. The process of creating and updating workouts using the add workout form proved to be confusing due to date formats. ',
    summary:
      "Day 11 presented challenges in dealing with date formatting and localization while creating and updating workouts in the ProgressPal app. By sending raw date objects to the backend and implementing a formatting mechanism in the server's response, I successfully tackled these challenges. This approach ensured consistency between the frontend and backend and provided a reliable and accurate representation of dates.",
    fullDesc:
      "Navigating Date Formats and Localization: Managing date formats and localization proved to be a daunting task. Ensuring consistency between the frontend and backend was crucial for accurate representation of dates. Struggling with this aspect, I sought a solution that would enable seamless communication and consistent handling of dates throughout the app. The Power of Raw Date Objects: After careful consideration, I discovered that sending the raw date object to the backend was the key to maintaining consistency. By transmitting the unaltered date information, I could avoid any issues caused by formatting or localization discrepancies. This approach laid a solid foundation for further processing and manipulation of the date data. Formatting the Server Response: To achieve a consistent and planned representation of dates, I implemented a formatting mechanism in the server's response. This allowed me to present the date information in the desired format and structure on the frontend. By handling the formatting on the server side, I ensured centralized control and maintained consistency in date presentation across the app.",
  },
  {
    id: '8',
    date: '06.05.2023',
    project: progresssPal,
    title: 'Day 12: Streamlining Workflow for Improved Focus',
    desc: "During my journey in developing the ProgressPal app, I discovered that multitasking doesn't work well for me as an independent developer. While it may be suitable for larger teams, I found myself encountering difficulties when attempting to juggle multiple tasks simultaneously. One particular challenge arose while implementing form validation functionality, as I often got distracted by ideas for further improvements or refactoring. This led to a higher probability of introducing code errors.",
    summary:
      'Day 12 brought the realization that multitasking is not an optimal approach for me as an independent developer. By embracing a more focused and sequential workflow, I aim to improve efficiency, minimize errors, and enhance overall productivity. Going forward, I will prioritize completing one task at a time, while capturing ideas that arise during the process for future implementation. This shift in approach allows for more thorough testing and validation, resulting in a higher quality implementation of the ProgressPal app.',
    fullDesc:
      'Challenges of Multitasking: In my experience, multitasking proved to be less effective as an independent developer. The tendency to switch between backend and frontend implementation while working on form validation led to a higher risk of overlooking critical details and introducing errors. Realizing the need for a more streamlined workflow, I recognized the importance of dedicating my attention to one task before moving on to the next. A Sequential Approach: To enhance productivity and minimize errors, I have made the decision to prioritize a sequential approach. For example, when faced with the task of adding password validation during user creation, I will no longer jump straight from Mongoose schemas to backend validation. Instead, I will first write tests to confirm the functionality of the Mongoose schemas. Once I have validated that the schemas are functioning correctly, I will proceed to implement and test the password validation. This sequential approach ensures thorough testing and validation at each stage, reducing the likelihood of errors.',
  },
  {
    id: '9',
    date: '08.05.2023',
    project: progresssPal,
    title: 'Day 14: Implementing Theme Switch with Material UI',
    desc: 'On the fourteenth day of developing the ProgressPal app, I embarked on the task of implementing theme switching using Material UI. Initially, I perceived it as a simple feature, but it turned out to be more complex and somewhat frustrating than anticipated. Despite encountering challenges along the way, I managed to complete the implementation, albeit with a codebase that feels somewhat overcomplicated. However, I have decided to leave it as is for now, with the possibility of refactoring it in the future.',
    summary:
      'Day 14 presented unexpected challenges during the implementation of theme switching using Material UI. Despite the complexities and frustrations encountered, I successfully completed the implementation, albeit with a codebase that may require future refactoring. The use of local storage, guided by ChatGPT, proved instrumental in retaining the theme switch position after page reloads. Moving forward, I will continue to refine and optimize the theme switching functionality, ensuring a seamless and visually pleasing user experience in the ProgressPal app.',
    fullDesc:
      "The Complexity of Theme Switching: Implementing theme switching, which I initially perceived as straightforward, proved to be a more intricate task than expected. As I delved into the implementation, I encountered various challenges and complexities that tested my problem-solving skills. It became evident that the seemingly simple task of switching themes required careful consideration of multiple factors, such as component styling, state management, and persistence across page reloads. An Overcomplicated Codebase: During the implementation process, I found myself navigating through an overcomplicated codebase. While I acknowledge that there is room for improvement and refactoring, I decided to leave it in its current working state for the time being. I recognized the importance of balancing progress with the need for code refinement, allowing me to focus on other essential tasks at hand. Retaining Theme Switch Position: One specific challenge I encountered was retaining the theme switch position after a page reload. This proved to be a puzzling aspect that required a solution. Leveraging the power of ChatGPT, I sought guidance and discovered the use of local storage to save the theme mode. This approach enabled me to preserve the user's chosen theme, ensuring that the selected theme remains consistent even after refreshing the page.",
  },
  {
    id: '10',
    date: '09.05.2023',
    project: progresssPal,
    title: 'Day 15: Refactoring the App Component for Improved Structure',
    desc: 'On the fifteenth day of developing the ProgressPal app, as I began implementing routing, I realized that my App component required significant refactoring. Previously, it had accumulated all the handle logic for tasks such as login, adding/deleting/editing workouts and exercises. Recognizing the need for a more organized structure, I decided to transform the App component into a wrapper that encapsulates routing and component rendering. Consequently, I aimed to migrate most of the logic and state management to individual components, which would then be imported into pages. However, I also realized the importance of proceeding cautiously to prevent introducing numerous bugs, errors, and problems. Instead, I adopted a step-by-step approach, gradually moving small portions of code from the App component to pages, testing each step before proceeding further.',
    summary:
      'Day 15 marked a crucial turning point in the development of the ProgressPal app, as I recognized the need to refactor the App component to achieve a more organized and maintainable codebase. By adopting a gradual, step-by-step approach, I successfully moved the login logic to the Login component, aligning it with the intended structure. This method allowed for thorough testing and reduced the risk of introducing unexpected bugs or errors. Moving forward, I will continue the incremental migration process, ensuring that each component assumes its designated responsibilities while maintaining a cohesive and efficient codebase.',
    fullDesc:
      'Refactoring Strategy: The decision to refactor the App component arose when I started working on implementing routing functionality. It became evident that the component had become overcrowded with various handle logic responsibilities. To achieve a cleaner and more manageable codebase, I devised a plan to distribute the logic and state management to specific components based on their respective tasks. However, I understood that attempting to move everything at once would likely introduce unforeseen issues and hinder productivity. Instead, I adopted a gradual process, moving small portions of code at a time. Successful Migration: By following the step-by-step approach, I successfully migrated the login logic to the Login component, which, in turn, became part of the Login page. This method allowed me to focus on discrete tasks and thoroughly test each step before proceeding further. It provided a sense of control and prevented overwhelming complexities that could arise from attempting a complete migration all at once.',
  },
  {
    id: '11',
    date: '10.05.2023',
    project: progresssPal,
    title: 'Day 16: The Power of localStorage',
    desc: 'On the sixteenth day of developing the ProgressPal app, I had an epiphany about the usefulness of localStorage. While I had been utilizing it for storing user and theme data in my project, I realized that its capabilities extend far beyond those specific use cases. localStorage proved to be an incredibly valuable tool as it allows for the storage and retrieval of data from any part of the application.',
    summary:
      'Day 16 brought about a newfound appreciation for the power of localStorage in the development of the ProgressPal app. While initially used for user and theme storage, I discovered its versatility and accessibility, enabling data storage and retrieval from any part of the application. Furthermore, it resolved the challenge of redirecting users to the correct page after refreshing the browser. Moving forward, I am excited to explore the full potential of localStorage and leverage its capabilities to enhance user experiences and streamline functionality within the ProgressPal app.',
    fullDesc:
      "Unlocking the Potential: Prior to this realization, I had primarily focused on using localStorage for storing user-related information and managing the app's theme. However, I soon discovered that localStorage has a wide range of applications. Its versatility allows for storing various types of data, such as user preferences, form input, or even temporary state. This newfound understanding opened up possibilities for leveraging localStorage in future features and improvements. Addressing the Refresh Challenge: One particular problem I encountered was maintaining the user's session and ensuring they are redirected to the appropriate page after refreshing the browser. Thanks to localStorage, I found an elegant solution. By storing a relevant piece of data in localStorage, such as the current page or user authentication status, I could easily access and utilize this information upon refreshing the browser. This eliminated the need for cumbersome workarounds and provided a seamless user experience. Realizing the Full Potential: The realization of localStorage's vast capabilities has prompted me to explore additional ways to leverage it in my project. Its accessibility from any part of the application provides a convenient and efficient means of storing and retrieving data. This opens up opportunities for enhancing user customization, optimizing form interactions, and improving overall application performance.",
  },
  {
    id: '12',
    date: '11.05.2023',
    project: progresssPal,
    title: 'Day 17: Revisiting Props Drilling',
    desc: 'On the seventeenth day of developing the ProgressPal app, I found myself grappling with the issue of props drilling once again. As I refactored the app and relocated components and states from the app component to individual components, I encountered a significant hurdle in my approach to adding exercises to workouts. Despite investing hours into troubleshooting and employing console.log statements at various steps of the exercise creation process, I was unable to find a solution that both functioned correctly and eliminated the need for extensive props drilling.',
    summary:
      "Day 17 brought to light the persistence of the props drilling challenge during the development of the ProgressPal app. Despite my best efforts, the process of adding exercises to workouts revealed a flaw in the existing implementation, leading to concerns regarding efficiency and code structure. While a temporary solution involving props drilling was employed to maintain functionality, I am committed to revisiting this issue in the future to find a more elegant and sustainable resolution. By doing so, I aim to enhance the app's performance, improve user experiences, and refine the development process.",
    fullDesc:
      'Identifying the Flaw: While transitioning components and states from the app component to separate components, I discovered a flaw in my implementation for adding exercises to workouts. This flaw hindered the intended functionality and raised concerns regarding the efficiency of my solution. Determined to rectify the issue, I delved into the code, closely examining each step of the exercise creation process. However, despite my efforts, a satisfactory resolution that both maintained functionality and eliminated the need for excessive props passing eluded me. Temporary Solution: Recognizing the limitations of my current implementation, I made the decision to proceed with a temporary solution that allowed the app to continue functioning correctly. Although this solution involved props drilling, it provided a working workaround until I could address the underlying issue more comprehensively in the future. While I acknowledged the less-than-ideal nature of this temporary fix, I remained committed to delivering a functional and user-friendly app. Future Improvements: While I have temporarily accepted the reliance on props drilling, I am keenly aware that this is not the optimal approach. In the days to come, I plan to revisit and reevaluate the exercise creation process, seeking a more efficient and elegant solution that minimizes the need for extensive props passing. By addressing this challenge, I aim to enhance the overall user experience, improve code maintainability, and streamline the development process.',
  },
  {
    id: '13',
    date: '12.05.2023',
    project: progresssPal,
    title: 'Day 18: Debugging and Filtering Workouts',
    desc: 'During the eighteenth day of developing the ProgressPal app, I gained valuable insights into the debugging process and discovered the effectiveness of utilizing ChatGPT as a debugging tool. While I found that ChatGPT excelled in providing explanations and clarifications for code within a single file scope, I also recognized its limitations when dealing with complex data flows across multiple files. Additionally, I continued to deepen my understanding of asynchronous functions, their appropriate usage, and the importance of considering the order of execution. The interplay between useEffect and state changes posed further challenges, particularly in visualizing the data flow from fetching to displaying fetched data. ',
    summary:
      'Day 18 brought me face-to-face with the power of debugging and the importance of effectively utilizing tools like ChatGPT and console logging to gain insights into code behavior. While ChatGPT proved invaluable in single-file debugging scenarios, console logging enabled me to visualize data flow and analyze state changes and fetch responses. Additionally, I found satisfaction in achieving optimized workout display by implementing a progressive filtering process. As I continue my development journey, I will build upon these experiences, employing various debugging techniques to overcome challenges and refine the functionality of the ProgressPal app.',
    fullDesc:
      "Harnessing the Power of ChatGPT for Debugging: During my development journey, I discovered that ChatGPT can serve as a valuable debugging tool when prompted effectively. When faced with challenges, particularly within the context of a single file, I leveraged ChatGPT's capabilities to gain insights into my code. By carefully crafting prompts that encapsulated my specific debugging needs, I could obtain explanations and clarity regarding data flow, state changes, and the effects of different code snippets. This approach proved particularly beneficial in understanding the intricacies of asynchronous functions and gaining a deeper comprehension of how they fit into the broader code structure. Navigating the Complexity of Data Flow and State Changes: As I ventured deeper into the development process, I encountered the complexities of data flow and state changes, especially in conjunction with the useEffect hook. Understanding the order and timing of asynchronous operations, state updates, and component re-renders posed a significant challenge. To overcome this hurdle, I relied on a tried-and-true technique: console logging. By strategically placing console log statements at critical junctures in my code—before, during, and after fetch operations—I could observe and analyze the sequence of state changes, fetched objects, and fetch responses. This approach provided invaluable insights into the intricacies of data flow and helped me identify potential issues or areas for improvement. Pride in Achieving Optimized Workout Display: Amidst the debugging and challenges, I found a sense of pride in successfully implementing a feature that allowed posts to be visible only to logged-in users. I tackled this objective in stages, initially displaying all workouts, then filtering workouts on the frontend based on the logged-in user's ID. Finally, I reached an optimized solution by shifting the filtering process to the backend, where filtered workouts were sent as a response. This iterative approach allowed me to refine the app's functionality and deliver an enhanced user experience.",
  },
  {
    id: '14',
    date: '15.05.2023',
    project: progresssPal,
    title: 'Day 21: Challenges of Styling Without Conception',
    desc: 'On the twenty-first day of developing the ProgressPal app, I encountered the difficulties of styling and implementing a good user interface (UI) and user experience (UX) without a clear conception of how the app would look from the beginning. This lack of initial vision made the process of designing and refining the UI/UX a challenging and time-consuming endeavor. Over the course of four days, I dedicated significant effort to styling the app, constantly iterating and adapting as my conceptions and styles evolved.',
    summary:
      'Day 21 presented me with the challenges of styling and implementing a compelling UI/UX without a clear app conception. The lack of initial direction made the process time-consuming and required constant adjustments as my conceptions and styles evolved. This experience served as a valuable lesson, emphasizing the importance of establishing a well-defined app conception before diving into the world of UI/UX development. Armed with this newfound knowledge, I will approach future projects with a solid foundation in app conception, ensuring a more streamlined and efficient process of creating a captivating user interface and experience.',
    fullDesc:
      "The Challenges of Uncertainty in App Conception: Embarking on the styling and UI/UX implementation phase without a clear vision of the app's desired look and feel posed significant challenges. Without a well-defined conception, I found myself grappling with decisions on color schemes, layout structures, typography, and overall design principles. The lack of direction made it difficult to make informed design choices and led to a constant state of iteration and refinement. The Time-Consuming Nature of Styling and UI/UX Development: Styling and perfecting the UI/UX proved to be a time-consuming process. The constant evolution of conceptions and styles necessitated frequent adjustments and modifications to the app's appearance. What initially seemed like a straightforward task of making the app usable for testing purposes quickly transformed into an iterative journey of trial and error. Each modification required careful consideration, testing, and potential rework, further extending the timeline for achieving a satisfactory UI/UX. Lessons Learned and Moving Forward: Through this experience, I learned the importance of having a clear app conception before delving into the realm of styling and UI/UX development. A solid vision from the beginning provides a guiding light and allows for more efficient decision-making throughout the design process. While it may be tempting to jump into styling and implementation, investing time upfront in conceptualizing the app's look and feel can save valuable time and effort in the long run.",
  },
];

/*
{
  id: '',
  date: '',
  project: progresssPal,
  title: '',
  desc: '',
  summary: '',
  fullDesc: '',
},
*/
