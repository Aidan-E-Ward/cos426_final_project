## COS 426 Final Project: Dynamic Pinball – Vincent Etherton and Aidan Ward

Play the game at the following link: [https://aidan-e-ward.github.io/cos426_final_project/](https://aidan-e-ward.github.io/cos426_final_project/)

Note: Press Q or P to flick the left or right paddle respectively. Reload the page with Ctrl(Cmd) + R when the ball goes between the paddles.

[Read Our Project Writeup](./writeup.pdf)

## Abstract:

Dynamic Pinball is a game that leverages the Three.js library and Cannon.js physics engine to create a dynamic, infinitely generated pinball experience for the user. The aim of the game is to control the pinball paddles to propel the ball forward into procedurally generated piles of cubes. The more cubes displaced, the higher the user scores on the current run. The run ends when the ball — typical to conventional pinball — passes through the gap in the paddles promptly stopping the increase in score counter. Dynamic Pinball makes use of various TypeScript classes to accomplish this game architecture that provides endless demolition fun.

## Conclusions:

We successfully achieved our goal of building a fun and engaging Dynamic Pinball game. The game mechanics and physics came together really well to create an enjoyable player experience. Players can endlessly enjoy demolishing obstacles while trying to keep the ball on the playing surface and not behind the paddles.
The development process was not without its challenges, however. Implementing a live score display using HTML proved to be more complex seeing as we aimed to score using the number of boxes displaced. This meant that we needed to update the score at every time step creating significant performance issues. In the future, we’d want to update the scoring mechanic to allow for users to strive for high scores along with creating a death screen. Finally, we wanted to implement color themes that could be selected in a drop down, perhaps following seasonal color schemes.
This project gave us significant practice utilizing event listeners, camera position, and object-oriented classes to create a dynamic and engaging computer game. Utilizing Cannon.js allowed for interesting physical mechanics that the user could experience first-hand.

## Works Cited:

-   ACM Guidelines, [https://ethics.acm.org/](https://ethics.acm.org/).
-   CannonJS Documentation, [https://schteppe.github.io/cannon.js/](https://schteppe.github.io/cannon.js/).
-   CannonJS GitHub Page, [https://github.com/schteppe/cannon.js](https://github.com/schteppe/cannon.js).
-   CannonJS with ThreeJS Tutorial, [https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/](https://tympanus.net/codrops/2019/12/10/building-a-physics-based-3d-menu-with-cannon-js-and-three-js/).
-   COS 426 Final Project Typescript and Vite Template, [https://github.com/adamfinkelstein/cos426finalproject-vite](https://github.com/adamfinkelstein/cos426finalproject-vite).
-   Flying Terrain Generator COS 426 Project (2022), [https://github.com/mwcooper/COS426FinalProject](https://github.com/mwcooper/COS426FinalProject).
-   Lightsaber Dojo COS 426 Project (2022), [https://github.com/arcturus3/lightsaber-dojo/blob/master/src/Player.js](https://github.com/arcturus3/lightsaber-dojo/blob/master/src/Player.js).
-   Optional Chaining Documentation, [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
-   Simplex-Noise Documentation, [https://www.npmjs.com/package/simplex-noise](https://www.npmjs.com/package/simplex-noise).
-   ThreeJS Documentation, [https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).
