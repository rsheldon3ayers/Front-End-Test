# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response
I updated the OrdersTable component to include logic that converted the 24 hour time to 12 hour time and added the am/pm.

---


## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response

The issue was being caused by not set a limit to how many digits showed after the decimal.  I corrected this by using math methods. 

---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response

The Delete function was not being formatted properly in the DeleteOrder component.  It needed to be wrapped in a function in the onclick method.  
---


## Other