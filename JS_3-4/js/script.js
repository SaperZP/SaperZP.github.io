(function () {
    'use strict';
    var anchor = document.getElementById('test-anchor'),
        test = {
            data: {
                title: 'Тест по какой-то теме',
                questions: [
                    {
                        title: 'Вопрос #1',
                        answers: ['Вариант овтета 1.1', 'Вариант овтета 1.2', 'Вариант овтета 1.3']
                    },
                    {
                        title: 'Вопрос #2',
                        answers: ['Вариант овтета 2.1', 'Вариант овтета 2.2', 'Вариант овтета 2.3', 'Вариант овтета' +
                        ' 2.4']
                    },
                    {
                        title: 'Вопрос #3',
                        answers: ['Вариант овтета 3.1', 'Вариант овтета 3.2']
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
                    header = this.gimmeBlock('header', 'row'),
                    headerDiv = this.gimmeBlock('div', 'page-header col-lg-4 col-lg-offset-4'),
                    headerH1 = this.gimmeBlock('h1'),
                    headerText = document.createTextNode(this.data.title),
                    button = this.gimmeBlock('input', 'btn btn-default');
                /*-----------------^vars^-----------------------*/

                /*header building*/
                headerH1.appendChild(headerText);
                headerH1.style.textAlign = 'center';
                headerDiv.appendChild(headerH1);
                header.appendChild(headerDiv);
                form.appendChild(header);
                /*---------------*/

                /*button building*/
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Check answers');
                form.appendChild(button);
                /*---------------*/

                anchor.appendChild(form);

                for (var i = 0; i< this.data.questions.length; i++){
                form.insertBefore(this.qCreator(i),form.children[i+1]);
                }
            },
            qCreator: function (ir) {
                var section = this.gimmeBlock('section', 'row'),
                    sectionDiv = this.gimmeBlock('div', 'col-lg-4'),
                    sectionH2 = this.gimmeBlock('h2'),
                    H2text = document.createTextNode(this.data.questions[ir].title),
                    sectionUl = this.gimmeBlock('ul');

                sectionH2.appendChild(H2text);
                sectionDiv.appendChild(sectionH2);
                section.appendChild(sectionDiv);
                sectionUl.style.listStyleType = 'none';
                sectionDiv.appendChild(sectionUl);

                for (var i = 0; i < this.data.questions[ir].answers.length; i++) {
                    var
                        sectionLi = this.gimmeBlock('li'),
                        sectionLabel = this.gimmeBlock('label'),
                        sectionInput = this.gimmeBlock('input'),
                        labelText = document.createTextNode(this.data.questions[ir].answers[i]);

                    sectionInput.setAttribute('type', 'checkbox');
                    sectionLabel.appendChild(sectionInput);
                    sectionLabel.appendChild(labelText);
                    sectionLi.appendChild(sectionLabel);
                    sectionUl.appendChild(sectionLi);
                    console.log(this.data.questions[ir].answers.length);
                }
                return section;
            },


            init: function () {
                this.form();
            }
        };
    test.init();
})();