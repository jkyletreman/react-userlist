Master branch -MVP - A list of users, displayed in React. Click a user to display additional data.

React-Context-API:

* Refractored to use new Context API on master branch
  - Context comes from UserDataProvider component
  
* current App state: Fully Working, lacking test suite
 - Most update to date work is in the UserList.test.js
  -- Currently attempting to correctly mock the Context Provider as a Wrapper Component

** Full testing of the Context API is not fully supported by enzyme
https://github.com/airbnb/enzyme/pull/1513

** For a better test suit checkout the preContextApi branch
  - This branch renders everything from index -> UserListContainer ->
