# MMA Fights Server

This is the server application for the MMA Fights platform.

## SETUP

To properly run this server locally:

### INSTALL DEPENDENCIES

```
npm install
```

### RUN SERVER WITHOUT HOT RELOAD (PROD)

```
npm run start
```

### RUN SERVER IN DEV MODE WITH HOT RELOAD

```
npm run dev
```

### RUN SERVER IN DEV MODE WINDOWS WITH HOT RELOAD

```
npm run dev-win
```

### BASE ROUTE

```
https://api.gettruckdispatch.com
```

## AUTHENTICATION

### REGISTER

POST `/auth/join`

```
  {
    email: string,
    phone: string e.g (07046505102, +2347046505102, 7046505102),
    userType: string e.g ('transporter', 'transportCompany', 'shipper', 'company'),
    firstName: string,
    lastName: string,
    roleInCompany: string e.g ('CEO', 'manager', 'secretary', 'accountant')
  }
```

### VERIFY PHONE

POST `/auth/verify-phone`

```
  {
    phone: string e.g (07046505102, +2347046505102, 7046505102),
    pin: number e.g (1001, 1002, 1003)
  }
```

### REQUEST SMS

POST `/auth/request-sms`

If SMS expires or wasn't sent, this would be the ideal endpoint to use.

```
  {
    phone: string e.g (07046505102, +2347046505102, 7046505102)
  }
```

### REQUEST EMAIL VERIFICATION

POST `/auth/request-email-verification`

```
  Requires JWT
```

### REQUEST PASSWORD RESET

POST `/auth/request-reset-password`

```
  {
    email: string
  }
```

### PASSWORD RESET

POST `/auth/reset-password`

```
  {
    token: string (JWT from email),
    password: string (new password)
  }
```

### VERIFY EMAIL

POST `/auth/verify-email`

```
  REQUIRES JWT
  {
    token: string (JWT from email)
  }
```

### LOGIN

POST `/auth/login`

```
  {
    email: string,
    password: string,
  }
```

## BIDS

### CREATE BID

POST `/bids/:tripId`

This feature is only available for service based users ('transporter', 'transportCompany') to indicate interest in an existing and unassigned trip.

```
  {
    extraNotes?: string,
    price: number,
    presentLocation: string (present truck location),
    vehicle: Vehicle (Check type in Types),
    tripId: string
  }
```

### UPDATE BID

PATCH `/bids/:tripId`

This feature is only available for service based users ('transporter', 'transportCompany') to update bid sent to an existing and unassigned trip.

```
  {
    extraNotes?: string,
    price?: number,
    presentLocation?: string (present truck location),
    vehicle?: Vehicle (Check type in Types),
    tripId?: string
  }
```

### GET BIDS BY TRIP CREATOR

GET `/bids/:tripId`

This feature is only available for client based users ('shipper', 'company') to fetch bids sent to his trip.

### GET BIDS BY TRANSPORTER

GET `/bids`

This feature is only available for service based users ('transporter', 'transportCompany') to fetch previous but active bids.

### DELETE BID

DELETE `/bids/:tripId`

This feature is only available for service based users ('transporter', 'transportCompany') to delete bid sent for a trip.

## CHAT

### CREATE CHAT

POST `/chat`

```
  {
    message: string,
    sender: string,
    receiver: string,
    chatLog: string
  }
```

### GET ALL CHAT

GET `/chat`

### CREATE CHAT LOG

POST `/chat/log`

```
  {
    clientId: string,
    transporterId: string,
  }
```

### GET CHAT LOGS

GET `/chat/logs`

### READ MESSAGE

GET `/chat/logs`

```
  {
    chatLog: string
  }
```

## EXTERNAL REQUESTS

### LOAD BANKS

GET `/externals/banks`

### LOAD BANK ACCOUNT DETAILS

GET `/externals/banks`

```
{
  bank_code: string,
  account_number: string
}
```

## PAYMENTS

### REQUEST PAYMENT

POST `/payment/request-payment/trip/:tripId`

This request is only available for transporters who have been assigned to a trip.

```
{
  proofVideo: File (Video of the truck been loaded)
}
```

### UPDATE PAYMENT REQUEST

PATCH `/payment/request-payment/trip/:tripId`

This request is only available for transporters who have been assigned to a trip.

```
{
  proofVideo: File (Video of the truck been loaded)
}
```

### REJECT PAYMENT REQUEST

POST `/payment/payment-request/trip/:tripId/reject/:paymentRequestId`

This request is only available for clients who need to reject a payment request.

```
{
  reasonForReject: string
}
```

### APPROVE PAYMENT REQUEST

POST `/payment/payment-request/trip/:tripId/approve/:paymentRequestId`

This request is only available for clients who need to reject a payment request.

### GET ALL PAYMENT REQUESTS

GET `/payment/payment-requests`

This request is only available for transporters who need to see all payments.

## RATINGS

### RATE USER

POST `/rating/:tripId`

```
{
  comment: string,
  userRating: string(userId),
  userRated: string(userId),
  tripId: string,
  starRating: number (1-5)
}
```

### GET TRIP RATING OF A USER

GET `/rating/:tripId`

this can be used to check if a user has rated after a trip has been completed. and if hasn't trigger rating form.

## TRIP

### CREATE TRIP

POST `/trips`

```
{
  pickUpAddress: string,
  deliveryAddress: string,
  pickUpDate: string,
  deliveryDate: string,
  typeOfGoods: string,
  weight: number,
  sizeOfContainer: string (e.g '20ft', '2 By 20ft', '40ft', '45ft'),
  shippingLine: string (e.g 'Maersk line', 'Cosco', 'Zim', 'mol', 'Hapagllyod', 'CMA', 'ARKAS', 'MSC', 'OOCL'),
  jobType: string (e.g 'Empty', 'Import', 'Export'),
}
```

### UPDATE TRIP

PATCH `/trips/:tripId`

```
{
  pickUpAddress: string,
  deliveryAddress: string,
  pickUpDate: string,
  deliveryDate: string,
  typeOfGoods: string,
  weight: number,
  sizeOfContainer: string (e.g '20ft', '2 By 20ft', '40ft', '45ft'),
  shippingLine: string (e.g 'Maersk line', 'Cosco', 'Zim', 'mol', 'Hapagllyod', 'CMA', 'ARKAS', 'MSC', 'OOCL'),
  jobType: string (e.g 'Empty', 'Import', 'Export'),
}
```

### GET TRIPS

GET `/trips`

### GET TRIP

GET `/trips/:tripId`

### GET JOBS

GET `/trips/jobs`

For a transporter to get all active jobs on the platform.

### GET BIDS SENT TO A TRIP BY TRIP CREATOR

GET `/trips/jobs/:tripId`

For a client to get all bids sent to his trip.

### CHANGE TRIP STATUS

PATCH `/trips/change-status/:status`

A transporter can change the status of a trip assigned to him from `assigned` => `in-progress` => `completed`

### ASSIGN TRIP

PATCH `/trips/:tripId/assign-trip`

```
{
  from: string (userId of trip owner),
  to: string (userId of assigned transporter),
  tripId: string,
  bidId: string (id of accepted bid),
  processorReference?: string (paystack processor reference),
  paymentSource: string ('balance' | 'paystack'),
  amountInBid: number,
  totalAmountPaid: number,
  transaction?: string (for paystack),
}
```

### UNASSIGN TRIP

PATCH `/trips/:tripId/unassign-trip`

```
{
  tripId: string
}
```

### CANCEL TRIP BY TRIP OWNER

PATCH `/trips/:tripId/cancel-trip-by-trip-owner`

```
{
  tripId: string
}
```

### CANCEL TRIP BY TRANSPORTER

PATCH `/trips/:tripId/cancel-trip-by-transporter`

```
{
  tripId: string
}
```

### UPLOAD TDO

```
{
  TDO: File
}
```

## USER

### GET PROFILE

GET `/user`

### UPDATE USER

PATCH `/user`

```
{
  avatar: File
}
```

### ADD & UPDATE BANK DETAILS

POST `/user/bank-details`

```
{
  name: string,
  account_number: number,
  bank_code: number,
  bank_name: string
}
```

### UPDATE PASSWORD

POST `/user/update-password`

```
{
  password: string
}
```

<!-- TODO: Document Vehicle and Verification -->