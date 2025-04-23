store: store the global data (state)

App.jsx: any react component at any level

Reducer: collection of small state ex: [userdata,productsdata, cartsdata].these cobinedly make the global state/data

the data from store is read (not mutable) by App.js using useSelector() hook 

Action:it is connected with compont . it contain the function .the particular componet/state give the instruction to action to change the data.and it change the data . the action give the command to Reducer to accept the changeses data of respactive  state/componets and then it reflect to the global state (store)

Store -> App.jsx ->Action -> Reduces -> store 

