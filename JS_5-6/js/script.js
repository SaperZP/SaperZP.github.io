(function () {
    'use strict';
    var Timer = function () {
        var intervalID = null,
            semicolonInterval = null,
            deltaTime = 0,
            isActive = true,
            stopTime = 0,
            startTime = 0,
            timeHolderLink = {},
            _this = this;

        /*как лучше создать переменные или свойства объекта*/


        this.gimmeBlock = function (tagName, className, textNodeText) {
            var tag = document.createElement(tagName);
            if (className !== null) {
                tag.className = className;
            }
            if (textNodeText !== null) {
                tag.appendChild(document.createTextNode(textNodeText));
            }
            return tag;
        };

        this.visualAppearance = function () {
            var container = this.gimmeBlock('div', null, null),
                startButton = this.gimmeBlock('button', null, 'Start'),
                stopButton = this.gimmeBlock('button', null, 'Stop');

            timeHolderLink.timeHolderMin = this.gimmeBlock('span', 'minutes', 0);
            timeHolderLink.semicolon = this.gimmeBlock('span', 'semicolon', ':');
            timeHolderLink.timeHolderSec = this.gimmeBlock('span', 'seconds', 0);
            timeHolderLink.timeHolderMilsec = this.gimmeBlock('span', 'milliseconds', 0);
            container.append(startButton, stopButton, timeHolderLink.timeHolderMin, timeHolderLink.semicolon, timeHolderLink.timeHolderSec, timeHolderLink.timeHolderMilsec);
            startButton.setAttribute('data-action', 'start');
            stopButton.setAttribute('data-action', 'stop');

            container.onclick = function (event) {
                var target = event.target,
                    att = target.getAttribute('data-action');
                if (att === 'start') {
                    _this.start();
                    startButton.innerHTML = 'Pause';
                    startButton.setAttribute('data-action', 'pause');

                } else if (att === 'pause') {
                    _this.pause();
                    startButton.innerHTML = 'Continue';
                    startButton.setAttribute('data-action', 'continue');

                } else if (att === 'continue') {
                    _this.continue();
                    startButton.innerHTML = 'Pause';
                    startButton.setAttribute('data-action', 'pause');
                } else if (att === 'stop') {
                    _this.stop();
                    startButton.innerHTML = 'Start';
                    startButton.setAttribute('data-action', 'start');
                }
            };

            return container;
        };

        this.start = function () {
            startTime = Date.now();
            intervalID = setInterval(function () {
                deltaTime = new Date(Date.now() - startTime);
                timeHolderLink.timeHolderMin.innerHTML = deltaTime.getMinutes();
                timeHolderLink.timeHolderSec.innerHTML = deltaTime.getSeconds();
                timeHolderLink.timeHolderMilsec.innerHTML = ' (' + deltaTime.getMilliseconds() + ")";
            }, 1);

            semicolonInterval = setInterval(function () {
                var semicolon;
                if (isActive) {
                    semicolon = " ";
                    isActive = false
                } else {
                    semicolon = ":";
                    isActive = true;
                }
                timeHolderLink.semicolon.innerHTML = semicolon;
            }, 1000);

            /*timeHolderLink.semicolon.innerHTML = this.semicolon();*/
        };

        this.pause = function () {
            clearInterval(intervalID);
            clearInterval(semicolonInterval);
            stopTime = +deltaTime;
        };

        this.continue = function () {
            startTime = Date.now();
            intervalID = setInterval(function () {
                deltaTime = new Date(Date.now() - startTime + stopTime);
                timeHolderLink.timeHolderMin.innerHTML = deltaTime.getMinutes();
                timeHolderLink.timeHolderSec.innerHTML = deltaTime.getSeconds();
                timeHolderLink.timeHolderMilsec.innerHTML = ' (' + deltaTime.getMilliseconds() + ")";
            }, 1);

            semicolonInterval = setInterval(function () {
                var semicolon;
                if (isActive) {
                    semicolon = " ";
                    isActive = false
                } else {
                    semicolon = ":";
                    isActive = true;
                }
                timeHolderLink.semicolon.innerHTML = semicolon;
            }, 1000);
        };

        this.stop = function () {
            clearInterval(intervalID);
            clearInterval(semicolonInterval);
            /*timeHolderLink.timeHolder.innerHTML = 'Press Start button'*/
            deltaTime.setMinutes(0);
            deltaTime.setSeconds(0);
            deltaTime.setMilliseconds(0);

            timeHolderLink.timeHolderMin.innerHTML = deltaTime.getMinutes();
            timeHolderLink.timeHolderSec.innerHTML = deltaTime.getSeconds();
            timeHolderLink.timeHolderMilsec.innerHTML = ' (' + deltaTime.getMilliseconds() + ")";
        };

        this.init = function () {
            document.querySelector('#anchor').appendChild(this.visualAppearance());
        }

    };


    var timer1 = new Timer();
    timer1.init();

    var timer2 = new Timer();
    timer2.init();


})();