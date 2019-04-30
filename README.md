# Clients-Balance-Manager for Business Owners.

![Demo-loading... Please Wait...](https://github.com/ganesh-deshmukh/client-manager/blob/master/src/client-balance-manager-demo.gif)

Clients-Balance-Manager is Webapp to track clients and their balances in accounts.

We can Add, Delete clients and their balances as well.

Also, we can give authority to make changes by other loggedin users, which can be enable/disable to register.

Owners can allow/deny other users to edit balances while new user is added or user details are edited.

#Steps to run project locally:

1. npm install

2. npm start

3. Sign Up using any Email and Password

4. Login using same.

5. Add/Edit your customers details as Name, Email, phone, balances.

6. for each customer unique cust_id is generated and total balance is displayed at top.

7. we can give permission to add owners or deny, by allowing new registrations.

8. you may control editing of balance to avoid further due by client.

9. If new-Registration is disabled, then you can't register new user, even after you visit url as `/register`, it will redirect you to main login page, using private routes.

# Technology used: React, Redux, Firebase, Bcryptjs, Bootstrap, firebase-cloud-hosting.
