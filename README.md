# Work Day Scheduler

## Description

The Work Day Scheduler is a simple calendar application that allows users to save events for each hour of a typical working day (9am–5pm). This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Day.js library is used to work with date and time.

Live-Link: http://127.0.0.1:5500/index.html

## User Story

As an employee with a busy schedule, I want to add important events to a daily planner so that I can manage my time effectively.

## Acceptance Criteria

- **When** I open the planner
  - **Then** the current day is displayed at the top of the calendar
- **When** I scroll down
  - **Then** I am presented with time blocks for standard business hours of 9am to 5pm
- **When** I view the time blocks for that day
  - **Then** each time block is color-coded to indicate whether it is in the past, present, or future
- **When** I click into a time block
  - **Then** I can enter an event
- **When** I click the save button for that time block
  - **Then** the text for that event is saved in local storage
- **When** I refresh the page
  - **Then** the saved events persist

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Day.js
- Bootstrap
- FontAwesome

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/work-day-scheduler.git
   ```
2. Navigate to the project directory:
   ```bash
   cd work-day-scheduler
   ```
3. Open `index.html` in your browser to view the application.

## Usage

- Open the application in your browser.
- The current day is displayed at the top of the calendar.
- Scroll down to view the time blocks for the standard business hours (9am–5pm).
- Click into a time block to enter an event.
- Click the save button to save the event in local storage.
- Refresh the page to ensure the saved events persist.

## Screenshot

<img width="1440" alt="Screenshot 2024-07-17 at 7 18 24 PM" src="https://github.com/user-attachments/assets/019d4153-c153-4e58-b50a-93ccc780cdc0">
