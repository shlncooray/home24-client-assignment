# Notes - Home24 Tech Task - Client Application

> **NOTE: Time to time I had to remove cache behaviour of server in order to get different product categories**

# New Features added to original assignment

I wanted to make given project into something similar to home24.de website with given product list via graphql API. I've did bit investigation around graphql API and current web site to get few more category ids to make it more dynamic look. While keep in mind that limited product & product category availability due to caching enabled on server project, I've added following new features to given project.

- Language switch: Localisation feature which can be use without any code modification for future features
- Side bar with Main Product Categories
- Home page image slider & page product categories carousel(and other carousel): Just wanted to make it look like home24.de website home page
- Shopping cart feature: Which wasn't implemented in given project code. But given a hint by adding Add to cart button which makes me to implement that feature upto checkout button
- Product list page based on category: Used MUI components to imrpove UI/UX of product list screen
- Improved Product Cards: Used MUI components to imrpove look and feel of product cards
- Single Product view & Add to cart option: This hasn't implemented in original code but I've Used MUI components to imrpove UI/UX
- Login/Register Screen for future extendability of project
- Protected routes
- Overall project state management using Redux Tool Kit
- RTK query for API calls(both REST & Graphql)

# Frameworks and Reasons to Use

I've used following Frameworks & Concepts additionally to improve the code quality, speed up the development process and thinking about future scalability & extendability of the project.

- Yarn package manager
- Atomic folder structure
- Redux Toolkit
- RTK Query (Redux Toolkit Query)
- React MUI Components
- Jest for Unit & Snapshot testing

## Yarn - For package management

Both Yarn and NPM are powerful package managers, and my choice between them often depends on the following factors

- **Performance:** Yarn tends to be faster than npm when it comes to package installation. Yarn parallelizes operations, fetches packages more efficiently, and has a local cache, which contributes to faster and more consistent builds.
- **Network Efficiency:** Yarn optimizes network requests when fetching packages. It only downloads the differences between versions, making updates more efficient and reducing the overall amount of data transferred.
- **Concurrent Installations:** Yarn can perform multiple operations concurrently, which speeds up the installation process. This is especially beneficial when working with projects that have a large number of dependencies.
- **Strong Ecosystem Support:** While both npm and Yarn have extensive package ecosystems, many projects are compatible with both. Yarn, however, has gained widespread adoption in the React and JavaScript community, with many projects officially recommending or defaulting to Yarn.

## Atomic Folder Structure

By adopting the Atomic Design folder structure concept in this React web app for the Home24 assignment, I'm trying to create a well organised and maintainable codebase that aligns with best practices in software architecture and design.

**Atomic Design:**

- **Atoms:** The smallest building blocks of your application, such as buttons, input fields, and other simple UI elements. These are the basic components that can't be broken down further.
- **Molecules:** Combinations of atoms that form more complex UI components. For example, a form component composed of input fields (atoms) and a button (atom) would be a molecule.
- **Organisms:** Larger components that combine molecules and atoms to create functional sections of your UI. An example could be a header that includes a navigation bar (molecule) and a logo (atom).
- **Templates:**(**Layout**) These represent entire layouts or page structures. Templates bring together organisms to create complete pages, providing a higher-level abstraction.
- **Pages:**(**Features**) The final layer, representing specific instances of templates. Each page is a unique implementation of a template with real content.

**Why Atomic Folder Structure is suitable for a React Web App like Home24:**

- **Modularity and Reusability:** The Atomic Design structure encourages modularity, making it easy to reuse components across different parts application. This is particularly beneficial for maintaining consistency in design and functionality.
- **Scalability:** As application grows, the Atomic Design structure scales well. The separation of components into atomic elements, molecules, organisms, etc., provides a clear hierarchy that accommodates both small and large-scale applications.
- **Easy Navigation and Maintenance:** The clear structure makes it easy for developers to navigate the codebase and locate specific components. This is crucial for onboarding new team members and maintaining the application over time.
- **Consistent Design Patterns:** By organizing components based on their level of complexity, Atomic Design naturally enforces a consistent design pattern. This consistency is essential for a polished and professional-looking user interface.
- **Collaboration:** The Atomic Design structure facilitates collaboration among team members. Designers can work on atoms and molecules independently, while developers can focus on integrating them into organisms, templates, and pages.
- **Testing and Debugging:** The modular nature of Atomic Design makes it easier to test individual components in isolation. This granularity aids in debugging and ensures that changes to one component don't unintentionally affect others.

## Redux Toolkit - For state management

Using Redux Toolkit for state management in this React application, especially in the context of a larger project like the Home24, which helps maintain a scalable and organized codebase while benefiting from the advantages of Redux. It's a powerful tool that strikes a good balance between simplicity and flexibility.

- **Officially Recommended:** Redux Toolkit is officially recommended by the Redux team. It incorporates best practices and conventions endorsed by the Redux community, making it a solid and well-supported choice for state management.
- **Boilerplate Reduction:** Redux Toolkit is designed to minimize the amount of boilerplate code traditionally associated with Redux. It includes utilities like `createSlice` and `createAsyncThunk` that streamline the process of defining reducers and handling asynchronous actions.
- **Structured State Slices:** The concept of slices in Redux Toolkit helps organize the state into manageable pieces. Each slice corresponds to a specific feature or section of the application, making the overall state structure more modular and maintainable.

## RTK Query - API Data Fetch

By incorporating RTK Query into this React web app for the Home24 assignment, it is leveraging a powerful tool that simplifies the complexity of data fetching and state management. It aligns with modern best practices, enhances developer productivity, and contributes to the overall maintainability of application. RTK Query is an additional package provided by Redux Toolkit that simplifies API data fetching and state management. Here's a brief overview of why RTK Query is suitable for a modern React application:

- **Declarative Data Fetching:** RTK Query introduces a declarative approach to data fetching, where we define API endpoints and queries in a simple and readable way. This helps in reducing boilerplate code and making data fetching logic more intuitive.
- **Normalisation and Caching:** RTK Query automatically normalizes and caches API responses. This means that if multiple components request the same data, RTK Query ensures that the data is fetched only once and shared across components. This can significantly improve the performance of a React application.
- **Automatic State Management:** RTK Query integrates seamlessly with the Redux store, providing a centralised place to manage API-related state. The state is automatically updated based on the results of API queries, making it easy to synchronize the UI with the latest data.
- **Mutations and Optimistic Updates:** RTK Query supports mutations for updating server data, and it provides a mechanism for optimistic updates. This means that you can update the UI optimistically based on the assumption that the mutation will succeed, improving the perceived performance of your application.
- **Middleware and Customization:** RTK Query allows you to add middleware to modify or intercept requests and responses. This provides flexibility in customizing API interactions according to your specific requirements.
- **Typescript Support:** RTK Query is built with TypeScript in mind, providing strong typing support throughout your application. This helps catch potential errors at compile time and enhances the developer experience.
- **React Hooks Integration:** RTK Query provides React hooks for each API endpoint, making it easy to integrate API calls into your React components. This allows you to fetch and manage data using familiar React patterns.
- **API Slice Generation:** RTK Query can automatically generate Redux slices for your API, reducing the need for manual slice creation. This makes it easier to organize and manage the state related to API calls.
- **Official Redux Toolkit Integration:** RTK Query is an official part of the Redux Toolkit ecosystem. As such, it aligns well with other Redux Toolkit features, providing a cohesive solution for state management in a React application.

## Material UI (MUI)

Material-UI is a popular React component library that implements Google's Material Design principles. By incorporating Material-UI components into React web app for the Home24 assignment, it is saving development time, but also ensuring a modern and user-friendly interface. Here's a brief overview of why Material-UI components are suitable for this React application:

- **Design Consistency:** Material-UI follows the Material Design guidelines, providing a set of pre-designed and consistent components that contribute to a visually appealing and cohesive user interface. This consistency helps create a professional and polished look for your application.
- **Component Library:** Material-UI offers a comprehensive library of ready-to-use components, including buttons, inputs, navigation bars, modals, and more. This saves development time and effort, as you can leverage these components instead of building everything from scratch.
- **Theming and Customisation:** Material-UI provides a theming system that allows you to customize the appearance of components to match your application's branding and style. You can easily change colors, typography, and other style elements to create a unique design.
- **Responsive Design:** Material-UI components are designed with responsiveness in mind, ensuring a seamless user experience across various devices and screen sizes. This is essential for creating a modern and accessible web application.
- **Accessibility:** Material-UI places a strong emphasis on accessibility. The components are built with accessibility best practices, making it easier to create web applications that are inclusive and user-friendly for people with disabilities.
- **Community Support:** Material-UI has a large and active community. This means you can find a wealth of resources, tutorials, and community-contributed components that can further enhance your development process.
- **Integration with React Ecosystem:** Material-UI is specifically designed for React, and its components seamlessly integrate with React applications. This ensures a smooth development experience and allows you to leverage the power of React for building dynamic and interactive user interfaces.
- **Continuous Development:** Material-UI is actively maintained and regularly updated. This means you can benefit from bug fixes, performance improvements, and new features as the library evolves.
- **Grid System:** Material-UI includes a responsive grid system that simplifies the layout of your application. It provides a flexible and powerful way to create complex layouts with different screen sizes in mind.
