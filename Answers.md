# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library used for building large/complex applications with reusable UI components. It makes working with DOM API's easier by utilizing a virtual DOM to interact with the DOM based on changes in data, subsequently updating the information for the DOM. 

2. What does it mean to think in react?

As you build an app with React you have think of how you pass in dynamic data, because React manages state transitions, making it easier for developers because UI is re-rendered more efficiently. 

3. Describe state.

State is data that are used in the apps. State can also be thought of as a baseline. When state changes, it's updated accordingly. React is able to tell when state (basic data) is changed and in which nodes.

4. Describe props.

Props is how data is passed down from a parent component to a child component, and helps to keep the code dry. The props can only be manipulated in the parent component where they are declared. It allows working in nested components to be smoother, as data reference from props can be used multiple components down the tree. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects can happen outside the scope of the current function that is being executed. For example, side effects can run and won't cause problems regardless of what's going on within a component. Some do and do not require cleanup. 

