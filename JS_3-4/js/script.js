(function () {
    'use strict';
    var anchor = document.getElementById('test-anchor'),
        test = {
            data: {
                title: 'Тест по какой-то теме',
                questions: [
                    {
                        title: 'Вопрос #1',
                        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
                    },
                    {
                        title: 'Вопрос #2',
                        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
                    },
                    {
                        title: 'Вопрос #3',
                        answers: ['Вариант овтета 1', 'Вариант овтета 2']
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
            form: function () {
                var form = this.gimmeBlock('form', 'container'),
                    button = this.gimmeBlock('input', 'btn btn-default'),
                    header = this.gimmeBlock('header', 'row'),
                    headerDiv = this.gimmeBlock('div', 'page-header col-lg-4 col-lg-offset-4'),
                    headerH1 = this.gimmeBlock('h1'),
                    headerText = document.createTextNode(this.data.title);

                headerH1.appendChild(headerText);
                headerH1.style.textAlign = 'center';
                headerDiv.appendChild(headerH1);
                header.appendChild(headerDiv);
                form.appendChild(header);

                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Check answers');
                form.appendChild(button);
                anchor.appendChild(form);

                for (var i = 0; i < this.data.questions.length; i++) {
                    form.insertBefore(this.qCreator(
                        this.data.questions[0].title,
                        this.data.questions[0].answers[0],
                        i
                    ), form.children[i+1]);
                }

            },
            qCreator: function (question, answerOption, iValue) {
                var section = this.gimmeBlock('section', 'row'),
                    sectionDiv = this.gimmeBlock('div', 'col-lg-4'),
                    sectionH2 = this.gimmeBlock('h2'),
                    sectionUl = this.gimmeBlock('ul'),
                    sectionLi = this.gimmeBlock('li'),
                    sectionLabel = this.gimmeBlock('label'),
                    sectionInput = this.gimmeBlock('input');

                sectionH2.appendChild(document.createTextNode(question));
                sectionDiv.appendChild(sectionH2);
                section.appendChild(sectionDiv);
                sectionInput.setAttribute('type', 'checkbox');
                sectionLabel.appendChild(sectionInput);
                sectionLabel.appendChild(document.createTextNode(answerOption));
                sectionLi.appendChild(sectionLabel);
                sectionUl.style.listStyleType = 'none';
                sectionUl.appendChild(sectionLi);

                for (var i = 0; i < (this.data.questions[iValue].answers.length) - 1; i++) {
                    sectionUl.appendChild(sectionLi.cloneNode(true));
                }

                sectionDiv.appendChild(sectionUl);
                return section;
            }

        };
    test.form();
})();