
(function (angular) {
    'use strict';
    var igFormGenerator = function ($compile, $timeout) {


        function generateTemplate(layout) {

            var template = "<div class='form-group' style='margin-top:20px'>";

            for (var i = 0; i < layout.length; i++) {
                var question = layout[i];

                //Question tile column
                template = template.concat("<div  class='col-md-12 question-block'>");

                template = template.concat("<h5>" + question.question + "</h5>");

                //Switching between question type
                var contentType = question.type;
                switch (contentType) {
                    case 'text':
                        template = template.concat("<input type='text'>");
                        break;
                    case 'textarea':
                        template = template.concat("<textarea></textarea>");
                        break;
                    case 'checkbox':
                        template = template.concat("<input type='checkbox'>");
                        break;
                    case 'datefield':
                        template = template.concat("<input type='date'>");
                        break;
                    case 'numberfield':
                        template = template.concat("<input type='number'>");
                        break;
                }
                template = template.concat("</div>");
            }

            template = template.concat("</div>");

            return template;
        }

        return {
            scope: {
                layout: '='
            },
            restrict: 'E',
            transclude: true,

            link: {
                post: function (scope, element) {

                        var template = generateTemplate(scope.layout);
                        element.html(template).show();
                        $compile(element.contents())(scope);
                }
            }
        };
    };
    igFormGenerator.$inject = ['$compile', '$timeout'];
    angular.module('dynamicgenerator',[]).directive('formGenerator', igFormGenerator);

})(angular);