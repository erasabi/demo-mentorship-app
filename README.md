# SkillUp App

Skill Sharing Service using PERN stack (Postgres, Express, React, Node). 

Check out the [deployed site] (<url here>)

## Core packages

1. Redux - State Management
2. React Router - Routing
3. Styling - Styled Components
4. Toast Notifications - React Toastify
5. Network calls - Axios

## Video uploads
<!-- video demos here -->

## Features

1. Login/Signup
2. Upload Avatar(profile photo)
3. Search, Book, and Rate Mentors
4. User Profile (avatar, general info, etc)
5. Mentee Awards, Milestones, and Achievements
6. Mentor SkillSharing + Rank Building
7. Exportable Performance Metrics
8. Dark Mode Theme
9. Admin Panel
10. Authentication

## Getting Started
At the root of your project duplicate the 'sample.env.dev' and rename it '.env' (optionally edit any values you would like to change)

### The Easiest Way(Docker Only)
1 Start with Docker
```sh
docker-compose --env-file .env up
```

2 Seed initial data do database
```sh
# using bash command
docker-compose --env-file .env up
```
```sh
# using npm
cd ./server
npm install
npm run migrate
npm run seed:all
```

### For Faster Development
1 Run Database with Docker
```sh
docker-compose -f docker-compose-db-only.yml --env-file .env.dev up
```

2 Setup + Run Server(Node) App
```sh
# from project root
cd ./server
npm install
# migrate + seed test data for database
npm run migrate
npm run seed:all
```

3 Setup + Run Client(React) App
```sh
# from project root
cd ./client
npm install
npm run start
```

## Watch the Demo

<!-- [![Video](screenshots/video.png)](https://youtu.be/wHLurtOnmyM "Youtube Clone Demo") -->

## UI Feature Demos
### Edit Profile

<!-- ![Edit Profile](screenshots/edit_profile.png) -->

<!-- ![Trending](screenshots/profile_channels.png) -->

## Special Thanks

A quick thanks to sources for learning or sample code that helped us bring this app to life

1. @RefractedColor: Dark/Light Mode Slider Component Help
   - [Codepen Profile](https://codepen.io/RefractedColor)

