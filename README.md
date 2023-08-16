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
http://localhost:5000/api/v0.1/
```

## EVENTS

### CREATE EVENT

POST /event

```
{
  title: string,
  fighters?: number[],
  fights?: number,
  location: string,
  date: string
}
```

### UPDATE EVENT

PATCH /event/:eventId

```
{
  title?: string,
  fighters?: number[],
  fights?: number,
  location?: string,
  date?: string
}
```

### GET EVENTS

GET /event

### GET EVENT

GET /event/:eventId

### DELETE EVENT

DELETE /event/:eventId

### GET EVENT FIGHTS

GET /event/:eventId/fights


## FIGHT

### CREATE FIGHT

POST /fight

```
{
  event: number,
  fighters: number[]
}
```

## FIGHTER

### CREATE FIGHTER

POST /fighter

```

{
  name: string,
  knockouts: number,
  wins: number,
  losses: number,
  submissions: number,
  weight: float,
  nationality: string,
  team: string,
}
```

### GET FIGHTERS

GET /fighter

### GET FIGHTER

GET /fighter/:fighterId

### DELETE FIGHTER

DELETE /fighter/:fighterId
