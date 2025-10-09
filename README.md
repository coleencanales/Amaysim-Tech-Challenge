# Cypress Stripe Payment Test Project
## Overview

This project contains Cypress tests for simulating a failed Stripe Credit Card payment flow.
It focuses on UI behavior, allowing testing of payment failure without entering real card details.

### Features
Simulate failed card payments using a Stripe.js stub.
Ignores application JS errors like addEventListener on null elements.
Force-enables the Pay button during tests.
Supports Faker.js for generating random test data (names, emails, etc.).
Tests focus on UI validation, with no reliance on backend requests.

### Setup
Install dependencies:
npm install

Note: Faker.js must also be installed to generate random test data:
npm install @faker-js/faker

Export the shop URL for tests (do this before running):
export cypress_shopUrl=**URLHERE**

Navigate to the Amaysim folder — all Cypress tests are run from here.
Open Cypress GUI:
npx cypress open

Run all tests headlessly:
npx cypress run

Executable file is: checkPayment.cy.js

### Notes
- Stripe.js is stubbed to simulate a declined payment; no real card entry is needed. <br>
- Cross-origin iframe errors and addEventListener null errors are ignored automatically. <br>
- The Pay button is force-enabled to allow clicking in tests. <br>
- Faker.js can be used to generate random test data for forms. <br>
- Cypress is run from the Amaysim folder to ensure paths and environment variables work correctly.

### Test Scenario Example
1. Go to the Amaysim home page
2. Pick a 7-day plan and proceed to the payment page.
3. Attempt the purchase with a credit card that would normally be declined.
4. Real card details couldn’t be entered due to cross-origin iframe restrictions — a current limitation with handling iframes.
  A Stripe.js stub simulates the declined payment. <br>
  This highlights that the UI can be tested, but direct iframe interaction isn’t implemented yet.
5. Verify that the “Credit Card payment failed” message is shown in the UI.
