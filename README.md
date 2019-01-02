# u&i

## Background and Overview
u&i is a place where two people can connect, share, and archive key moments of their relationship. 

Features:
  * Photos for sharing memories 
  * Special notes/messages for each other 
  * Voice/video recordings
  * Calendar events with weather

## Functionality and MVP
- [ ] User authorization (sign up and log in)
- [ ] Moments with date on timeline
- [ ] Relationship Timeline/Calendar (track special dates, count down until next date)
- [ ] Photo/Video Album
- [ ] Messaging (text/voice)
- [ ] Production README

### Bonus:
- [ ] Comments for posts
- [ ] Future messaging
- [ ] Notification
- [ ] Location/weather

## Technologies and Technical Challenges
u&i is a web-application built using the MERN stack (MongoDB, Express, React, and Node).

### Backend: MongoDB/Express/Node.js
This application will utilize MongoDB to store data. 

Schema (Tables):
*  Users (email, password digest, session token, name, connection code, connected (boolean, default: false))
*  Messages (body, timestamp)  (ask about how to save text/voice msg in db -- reference Andy’s lecture on Bluebird)
*  Dates (specific date/events title(anniversary or future events))
*  Moments (picture url, video url, body, date)

#### Backend Routes:

**Session**
*  POST /api/session - log in
*  DELETE /api/session - log out

**User**
*  POST /api/users - create
*  GET /api/users/:id	 

**Moments**
*  GET /api/moments - returns all moments
*  GET /api/moments/:moment_id - returns specific moment/ (including date, body, etc)
*  POST /api/moments - create new moment
*  PATCH /api/moments/:moment_id  - edit specific moment
*  DELETE /api/moments/:moment_id - delete specific moment

**Date**
*  GET /api/dates - returns all dates
*  GET /api/dates/:date_id - returns specific date (including title, date stamp, etc)
*  POST /api/dates - create new date
*  PATCH /api/dates/:date_id  - edit specific date
*  DELETE /api/dates/:date_id  - delete specific date

**Messages**
*  TBD

#### Frontend Routes:
*  NavBar (this will be present across all pages except login)
  *  NavBarContainer
    *  NavBar

SWITCH
*  Root
*  App
*  Main Components 
*  /
    * Splash
*  /login
    * SessionForm
*  /signup
    *  SessionForm
*  /home
    *  Modal for profile
*  /moments (Index of all moments)
    *  /moments/momentId (specific moment content)
 *  /albums (index of all albums)
    *  /albums/albumId (specific album content)
    *  /albums/albumId/momentId (specific moment within an album)
*  /messages
*  /calendar

### Incorporated API's:
Google calendar
Websockets for messaging
AWS
Voice recording(twilio/nexmo)

## Group Members and Work Breakdown

Christine Pham, Joshua Arriola, Miso Lee, Nicole Hui 

### Day 1 - January 2nd(Wednesday)
#### Backend

* MERN stack setup - Nikki
* User authentication - Christine

#### Frontend
* Start designing
* Begin designing splash page - Miso
* Design and implement navbar - Josh

### Day 2 - January 3rd (Thursday)
#### Backend

* Create session and users backend - Christine

#### Frontend
* Finish the splash page and navbar
* Start on the code-page
* Start on login and signup page

### Day 3 - January 4th (Friday)
#### Backend

* Moments backend - Nikki
* Dates backend - Nikki 
* Meet to decide duties for next two days

#### Frontend
* Finish up auth-frontend
* Start on dates and moments

### Day 4 - January 5th (Saturday)
* Make sure moments backend is tested thoroughly 
* Utilize AWS storage for photos, videos, messages, and other media files 
* Work on utilization of external API’s (calendar, voice, websockets)

### Day 5 - January 6th (Sunday)
* Make sure dates backend is set up and tested
* Seed database
* Make demo page
* Reconvene on current task status

### Day 6 - January 7th (Monday)
* Draft Production README
* Work on design/CSS
* Testing and debug

### Day 7 - January 8th (Tuesday)
* Complete Production README.md
* Finish on design and clean up any CSS
* Testing and debug  

