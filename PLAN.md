## PLAN

### Set up

- Backend

1. Create Space and Story Tables (add constraints: migration and model files)
2. Add relations (same file or extra file, model and migrations)
  2.1 Test migration relation checking on Postico/DBeaver
  2.2 Test models relations by writing queries
3. Add seeds

- Frontend

1. Set up slice reducer for Spaces

### Feature 1

- Set up

- Backend

1. Write a GET endpoint to findAll(Spaces)
2. Test with `http` or with the `browser`
3. Once it works, move to the frontend

- Frontend

1. Create a component/page for Homepage
2. Write some mock data on the component and import it on App.js
3. Go to actions and write an async function to fetch data
4. Console.log the response
5. Import the action in the component and dispatch it inside useEffect
6. Go back to action file and create an action that takes type and a payload
7. Dispatch inside your async function, the payload should be your response
8. Go to reducer and write a case for it, check the dev tool to see if the data is there
9. Write a selector to select the data
10. Import selector in the component, pass it to useSelector and map over the data