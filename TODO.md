# TODO Items - Home24 Tech Task - Client Application

All the TODO items have mentioned in the code with #TODO prefix for easy search

## Common Breadcum component

In order have a smooth navigation over the application wanted to make common appwise Breadcum component. At the moment I've just created a inline navigation in product.tsx & productDetail.tsx

## Product Child Category Filter

Current Product category doesn't filter out products based on selected child category. In order to do that want to little deep dive into Graphql request params & response

## Pagination(Lazy loading)

I wanted to implement Lazy loading feature for product list when user scroll down the product list page with the help of a pagination functionality. This is also a things I would put into my TODO bucket

## Login & Authentication Related Functionalities & Enable Protected Routes

Have implemented a login page in order enable Authenticated related features of the app(if available, i.e. to enable features like favourite product items, my account page, orders and etc)

## Landing Page Image Carousel

In order to have a more extendable version of Landing page banner I wanted to have it like Carousel

## Implement Like button functionality

Like button functionality on Product Card(ComplexImageCard) is not yet implement. Which is a thing I wanted to implement in order to manage favourite product list. But still that functionally only can be manage local state(storage)

## Write more E2E testing using Cypress

Within the time limit I've configured and place the Cypress test suite to automate the E2E testing plus component test. Have written few sample test suits there as a reference where in future developers can start writing E2E testing. This is important beacuse Snapshot testing can't cover all the feature related components & pages. But Test suite like Cypress will give the freedom to write those automation tests.
