# Pollution-indicator App

Pollution-indicator app is an application that provides you with the latest information about the air quality searched city, country, and many more.

Hosted on - https://pollution-indicator.netlify.app/

I must admit that the hardest part of this project, as for each project is design, and UI. I'm more focused on my development skills and I find it hard to design pages, choose colors, fonts and similar, so excuse me if my UI skills are not on the best level.

## Technology

As for the technology, I used **React** with its features, **React-Router-Dom**, **Material UI** because it saves me time when working on _responsive design_, some basic styling, and it provides me with some functional components and **MUI icons**, and also I used some **CSS** for adding custom design and _responsiveness_. For _data fetching_ and _caching_ I was using **RTQ Query** because I find it quite simple and efficient for usage and documentation is easy to understand. I was using **AQICN.org, BING news, and AirVisuals APIs** for fetching and providing you with _real-time data_. For saving favorite cities and countries on each device I used **LocalStorage**, with the following _JSON methods_ for the sake of simplicity. Alongside all of the above, I implemented plenty of **JavaScript** code for working with data and processing it, _usual conventions_, and _utill functions_ that are used in every real-world project, and you can find them in the SRC folder.

## Home and News features

On the home page you can find the latest news about global air pollution, alongside live city ranking in default country Serbia, of course,

on that same page you can check the ranking of any other country that can be found in databases that I used. Further on you can browse any

city name and in response, you will get searched city results with the capability to click on each result for more information or save your city to your favorite cities so you can find it next time on the cities page. Each action (saving/removing) will be followed with appropriate **Alerts**.

The news page is a simple page where you can browse any news title and you will receive latest articles from our news provider BING news.

## Countries features

The countries page is a page where you can browse the name of any country and save that country on the same page so you can easily check the most polluted cities in every saved country. Each saving and removing will be followed with an appropriate alert, and also if you try to save the country that is already saved, you will receive an alert that informs you how you cannot save the same country twice. Each city on the list has its own pollution measurement in AQI units and is followed with appropriate color that is set with JS utill function.

## Cities features

On the cities page, you can search for any city name and in response, you will get searched city name results, same as on the home page, but on this page, you can find every city that you added to your favorite cities and find few more piece of information and click on each card for to navigate yourself to city page where you can find all the information about the saved city.

## City features

On this page, you can inform yourself about current air quality in searched city, most dominant pollutant, other weather factors like temperature, wind speed, humidity, and pressure, recommendations on how to protect yourself from current pollution, and sources that provided you all of that information.
