<!--
Name: Mathew Ambrosino
Date: 09.18.2026
CSC 372-01

This README explains the purpose, design decisions, responsive layout,
semantic structure, and image sources for the project.
-->

# Spartan Campus Events

## Project Description

Spartan Campus Events is a fictional campus event guide designed to help
college students discover activities and become involved in campus life.
The website includes a homepage with upcoming events and a separate page
with additional information about the featured event.

## Layout Decisions

CSS Grid is used for the upcoming event cards on the homepage. I found this to make organzing the cards into columns depending on the width on the width of the screen.

flexbox is used for the website nav, hero section, event introduction, and related event cards. flexbox was good for these sections because it controls alignment, spacing, and wrapping between related elements.

## Responsive Design
 
The website uses two responsive breakpoints:

 - At 600 pixels and wider, the homepage event cards appear in two columns. The hero section and event introduction also place their text and images beside each other.

 - At 900 pixels and widerm the event cards appear in three columns and the featured card spans two columns. The event details page also changes to a two column layout containing the mian info.


 below 600 pixels, the content uses a single column layout. the nagivation can wrap when there is not enough space horizontally. I tested the resposive design by resizing the browser window and checking both html pages at narrow medium and wide screen sizes.

 ## Semantic HTML

 The website uses semantic HTML elements to describe the purpose of its content.

 - header: contains the website name, tagline, and primary navigation.
 - nav: contains the links used to move between pages and page sections.
 - main: contains primary content of each page.
 - section: separates major groups of related content.
 - article: represents individual event cards and the main event info.
 - aside: contains supporting details abou tthe featured event.
 - figure & figcaption: connect event images with their captions.
 - footer: contains copyright, contact, and additional nav info.
 - time: identifies event dates and times.

 ## image Sources

  - `campus-hero.webp` — “Inclusive Student Activities: Educational Diversity Scene,” AI-generated image from [Easy-Peasy.AI](https://easy-peasy.ai/ai-image-generator/images/inclusive-student-activities-educational-diversity-scene). Free to use with attribution and a backlink.

  - `fall-festival.png` — “Vibrant Open-Air Music Festival Decor,” AI-generated image from [Easy-Peasy.AI](https://easy-peasy.ai/ai-image-generator/images/vibrant-open-air-music-festival-decor-seating-12-food-stalls). Free to use with attribution and a backlink.

  - `career-fair.webp` — “Diverse Job Fair at University Campus,” AI-generated image from [Easy-Peasy.AI](https://easy-peasy.ai/ai-image-generator/images/diverse-job-fair-university-campus). Free to use with attribution and a backlink.

  - `movie-night.jpg` — “Clifton Film Fest in Park - 2010” by Sarah Patch, from [Wikipedia](https://en.wikipedia.org/wiki/File:Clifton_film_fest_in_park_-_2010.jpg), licensed under Creative Commons Attribution 2.5.

  - `campus-meetup.jpg` — “Diverse Students Talking at School Courtyard,” AI-generated image from [Easy-Peasy.AI](https://easy-peasy.ai/ai-image-generator/images/diverse-students-talking-school-courtyard-educational-scene). Free to use with attribution and a backlink.

  - `art-showcase.jpg` — “Students Showcase Art and Design Projects” by COD Newsroom, from [Flickr](https://www.flickr.com/photos/codnewsroom/52096162864), used under the Creative Commons license listed on the source page.


  All university content on this page is fictional and were made for this assignment.

