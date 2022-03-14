# *Exercise Tracker*

**Exercise Tracker** is a web app that allows a user to keep a record of their workouts.

## User Stories

The following **required** functionality is completed:

- [x] User is displayed data for all exercises on the homepage on start up.
  - [x]	Each row in the HTML table must display the name, reps, weight, unit, and date of each exercise.
- [x] User can click the edit icon to take them to the edit exercise page.
  - [x] Controls must be pre-populated with current data.
  - [x] Updating occurs through the PUT /exercise/:id endpoint and sends status code 200 on success.
- [x] User can click the delete icon to delete the row.
- [x] User can navigate to the create exercise page.
  - [x] Adding occurs through the POST /exercise endpoint and sends status code 201 on success. 

The following **optional** features are implemented:

- [ ] Set the .catch error messages to 500 for create and optionally for one of the 400x for update and delete.
  - [x] PUT and DELETE requests with unknown IDs sends status code 404.
- [x] Date is validated to be in the MM-DD-YY format.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/DenxyChen/exercise-tracker-WQ/blob/main/misc/cs290-exercise-tracker.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/).

## Notes

I had difficulty with pre-populating the edit page but learning about ancestor-descendent relationships and lifting states resolved the issue. Updating the table on delete
was not working initially due to checking for an incorrect response status code. I went around this by removing the dependency array from useEffect() but that caused issues 
with render when requests were made too quickly so eventually I had to resolve it the correct way.

## Open-source libraries used

- [MongoDB](https://github.com/mongodb/mongo) 
- [react-router-dom](https://github.com/remix-run/react-router) 

## License

    Copyright 2022 Xiao Yu Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
