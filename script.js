/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const container = document.getElementById("_container");

// adding different green colors

let greenColorCodes = [

    "#7CFC00",
    "#78AB46",
    "#3B5323",
    "#458B00",
    "#BCED91",
    "#61B329",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957",

];

const numberOfSquares = 100;

for(let i = 0; i < numberOfSquares; i++){

    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover", ()=>{
        addColor(activity);
    });

    activity.addEventListener("mouseout", ()=> {
        stickColor(activity);
    })

    container.appendChild(activity);
}

function addColor(squareTiles){

    const gettingColor = greenColors();
    squareTiles.style.backgroundColor = gettingColor;
    squareTiles.style.boxshadow = ` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`; 

}

function stickColor(squareTiles){
    const gettingColor = greenColors();
    squareTiles.style.backgroundColor = gettingColor;
    squareTiles.style.boxshadow = ` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`; 
}

function greenColors(){
    
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];

}