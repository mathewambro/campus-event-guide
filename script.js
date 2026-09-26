/* 
    Name: Mathew Ambrosino
    Date: 09.26.2026
    CSC 372-01

    This file adds Save Event buttons and a "saved events" 
    summary to the Campus Event Guide homepage.
*/

"use strict";

window.addEventListener("load", init);

//adds the save buttons to every event card + saved events

function init() {
    let eventCards = document.querySelectorAll(".event-card");

    createSavedEventsSections();

    for (let i = 0; i < eventCards.length; i++) {
        let saveButton = document.createElement("button")

        saveButton.type = "button";
        saveButton.textContent = "Save Event"
        saveButton.classList.add("save-button")

        saveButton.addEventListener("click", toggleEvent);
        eventCards[i].appendChild(saveButton);
    }
}

//creates the saved events section at end of page

function createSavedEventsSections() {
    let main = document.querySelector("main");
    let savedSection = document.createElement("section");
    let heading = document.createElement("h2");
    let message = document.createElement("p");
    let savedList = document.createElement("ul");

    savedSection.id = "saved-events";
    message.id = "no-saved-events";
    savedList.id = "saved-events-list";

    heading.textContent = "Saved Events";
    message.textContent = "No events have been saved yet";

    savedSection.appendChild(heading);
    savedSection.appendChild(message);
    savedSection.appendChild(savedList);
    main.appendChild(savedSection);
}

//saves or removes the event belonging to the clicked button

function toggleEvent(event) {
    let saveButton = event.currentTarget;
    let eventCard = saveButton.parentNode;

    if (eventCard.classList.contains("saved-event")) {
        eventCard.classList.remove("saved-event");
        saveButton.textContent = "Save Event";
    } else {
        eventCard.classList.add("saved-event");
        saveButton.textContent = "Remove Event";
    }

    updateSavedEvents();
}

function updateSavedEvents() {
    let savedList = document.querySelector("#saved-events-list");
    let message = document.querySelector("#no-saved-events");
    let savedCards = document.querySelectorAll(".event-card.saved-event");

    savedList.textContent = "";

    if(savedCards.length === 0) {
        message.textContent = "No events have been saved yet.";
    } else {
        message.textContent = "";

        for (let i = 0; i < savedCards.length; i++) {
            let listItem = document.createElement("li");
            let eventName = savedCards[i].querySelector("h3").textContent;
            let eventTime = savedCards[i].querySelector("time").textContent;
            let paragraphs = savedCards[i].querySelectorAll("p");
            let eventLocation = paragraphs[2].textContent;

            listItem.textContent = 
                        eventName + " - " + eventTime + " - " + eventLocation;

            savedList.appendChild(listItem);
        }
    }
}