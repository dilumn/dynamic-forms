
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
                // template = template.concat("</div>");

                //Switching between question type
                var contentType = question.type;
                switch (contentType) {
                    case 'text':
                        template = template.concat("<input type='text'>");
                        break;
                    case 'textarea':
                        template = template.concat("<text-area questionid=" + i + "> </text-area>");
                        break;
                    case 'radio':
                        template = template.concat("<radio questionid=" + i + "> </radio>");
                        break;
                    case 'select':
                        template = template.concat("<selective questionid=" + i + "> </selective>");
                        break;
                    case 'checkbox':
                        template = template.concat("<checkbox questionid=" + i + "> </checkbox>");
                        break;
                    case 'image':
                        template = template.concat("<imageview questionid=" + i + "> </imageview>");
                        break;
                    case 'signature':
                        template = template.concat("<signatureview questionid=" + i + "> </signatureview>");
                        break;
                    case 'calculatedfield':
                        template = template.concat("<calculatedfield questionid=" + i + "> </calculatedfield>");
                        break;
                    case 'subsection':
                        template = template.concat("<subsection questionid=" + i + "> </subsection>");
                        break;
                    case 'datefield':
                        template = template.concat("<datefield questionid=" + i + "> </datefield>");
                        break;
                    case 'numberfield':
                        template = template.concat("<numberfield questionid=" + i + "> </numberfield>");
                        break;
                    case 'numberonly':
                        template = template.concat("<numberonly questionid=" + i + "> </numberonly>");
                        break;
                    case 'numericdropdown':
                        template = template.concat("<numericdropdown questionid=" + i + "> </numericdropdown>");
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
    angular.module('dynamicgenerator').directive('formGenerator', igFormGenerator);

})(angular);