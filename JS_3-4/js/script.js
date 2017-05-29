(function () {
    'use strict';

    var anchor = document.getElementById('test-anchor');
    var test = {
        headerText: document.createTextNode('Programming test'),
        data: {
            Questions: [
                {
                    "Question 1": [
                        'Answer option 1',
                        'Answer option 2',
                        'Answer option 3'
                    ]
                },
                {
                    "Question 2": [
                        'Answer option 1',
                        'Answer option 2',
                        'Answer option 3'
                    ]
                },
                {
                    "Question 3": [
                        'Answer option 1',
                        'Answer option 2',
                        'Answer option 3'
                    ]
                }
            ]
        },
        gimmeBlock: function (tagName, className) {
            var tag = document.createElement(tagName);
            if (className !== undefined) {
                tag.className = className;
            }
            return tag;
        },
        header: function () {
            var header = this.gimmeBlock('header', 'row'),
                headerDiv = this.gimmeBlock('div', 'page-header col-lg-4 col-lg-offset-4'),
                headerH1 = this.gimmeBlock('h1');

            headerH1.appendChild(this.headerText);
            headerDiv.appendChild(headerH1);
            header.appendChild(headerDiv);
            anchor.appendChild(header);
            console.log(anchor)
        },
        section: function () {
            var section = this.gimmeBlock('section', 'row'),
                sectionDiv = this.gimmeBlock('div', 'col-lg-4'),
                sectionH2 = this.gimmeBlock('h2'),
                sectionUl = this.gimmeBlock('ul'),
                sectionLi = this.gimmeBlock('li'),
                sectionLabel = this.gimmeBlock('label'),
                sectionInput = this.gimmeBlock('input');

            for (var key in test.data.Questions[0]) {
            }
            sectionH2.appendChild(document.createTextNode(key));
            sectionDiv.appendChild(sectionH2);
            section.appendChild(sectionDiv);


            for(var i=0; i< test.data.Questions[0]['Question 1'].length; i++){
                console.log(section);
            }

            sectionInput.setAttribute('type', 'checkbox');
            sectionLabel.appendChild(sectionInput);
            sectionLi.appendChild(sectionLabel);
            sectionUl.appendChild(sectionLi);
            sectionDiv.appendChild(sectionUl);
            anchor.appendChild(section);


        }


    };
    test.section();


})();