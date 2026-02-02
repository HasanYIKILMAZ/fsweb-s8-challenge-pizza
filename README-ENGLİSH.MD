🔵 Sprint Challenge: Technological Meals – SPA
🔵 Project Description

This Single Page Application (SPA) project allows you to apply the concepts learned during the sprint in a real-world scenario.

You explored:

SPA architecture

Routing

Forms

Cypress testing

Your challenge score reflects your ability to work independently using these concepts.

🕒 Presentation Requirement

1 minute: UI & CSS

3 minutes: React logic & data flow

Total: 4 minutes

🔵 Important Notes

Design must be followed exactly (layout & colors must not change)

Iteration 1 must be completed before Iteration 2

Do NOT add extra features before finishing required tasks

Text content can change, layout & colors cannot

IT2: Data transfer between pages must use Prop Lifting only

🔵 Sample Data Flow Diagrams
🔵 Routes
Homepage → Order Form → Order Confirmation

🔵 Order Form Data Flow

User Event

Form State Update

Validation

Enable / Disable Submit

Submit

🔵 Stage 1: Project Setup & Iteration 1
🔵 Task 1: Project Setup

✅ Create repository from template
✅ Clone repo locally
✅ Run:

npm install
npm run dev


🔹 Work on main branch only
🔹 Push commits regularly

🔵 Recommended Libraries

axios

react-strap

toastify

tailwindcss

cypress.io

🔵 Task 2: Iteration 1 – UI Review

Development order:

Order Form

Homepage

Order Confirmation

🔵 Color Palette

Yellow: #FDC913

Light Gray: #5F5F5F

Dark Gray: #292929

Red: #CE2829

Beige: #FAF7F2

🔵 Fonts

Roboto Condensed

Barlow

Quattrocento

Satisfy

🔵 Task 3: IT1 – Minimum Viable Product Requirements

✔ Hero button linking to order form
✔ Name input (min 3 characters)
✔ Multi-select ingredients (4–10)
✔ Pizza size (radio)
✔ Notes (textarea)
✔ Disabled submit if invalid
✔ Axios POST request
✔ Console log API response

🔗 API Endpoint:

https://reqres.in/api/pizza


🧾 Header:

x-api-key: reqres-free-v1

🔵 Example Payload
{
  name: string,
  size: string,
  ingredients: [],
  notes: string
}

🔵 Task 4: Cypress Testing (IT1)

Required tests:

Typing into input

Selecting multiple ingredients

Submitting the form

🔵 Stage 2: Iteration 2 (IT2)
🔵 IT2 Enhancements

Show order summary

Pass data via state lifting

Display Axios response

Handle network errors

Improve Homepage UI

Customize form inputs

Add more Cypress tests

🔵 Grading Criteria – Highlights

🔵 Semantic HTML & Accessibility

🔵 Responsive Design

🔵 Correct Form Semantics

🔵 Componentization & map usage

🔵 Data Flow & Validation

🔵 Axios Request Handling

🔵 React Fundamentals

🔵 Cypress Testing Coverage

🔵 Open-Ended Question (5%)
🔵 a) Which form element should be used?

✔ Checkbox / Radio / Select (depending on requirement)

🔵 b) What are the steps?

Add form element

Update state

Handle change event

Validate input

Include in payload

Test with Cypress

