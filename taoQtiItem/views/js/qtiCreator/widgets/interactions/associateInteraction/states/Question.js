define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/blockInteraction/states/Question',
    'taoQtiItem/qtiCreator/widgets/helpers/formElement',
    'tpl!taoQtiItem/qtiCreator/tpl/forms/interactions/associate'
], function(stateFactory, Question, formElement, formTpl){

    var AssociateInteractionStateQuestion = stateFactory.extend(Question);

    AssociateInteractionStateQuestion.prototype.initForm = function(){

       var _widget = this.widget,
            $form = _widget.$form,
            interaction = _widget.element;

        $form.html(formTpl({
            shuffle : !!interaction.attr('shuffle'),
            minAssociations : parseInt(interaction.attr('minAssociations')),
            maxAssociations : parseInt(interaction.attr('maxAssociations'))
        }));

        formElement.initWidget($form);
        
        //init data change callbacks
        var callbacks = formElement.getMinMaxAttributeCallbacks(this.widget.$form, 'minAssociations', 'maxAssociations');
        callbacks.shuffle = formElement.getAttributeChangeCallback();
        formElement.setChangeCallbacks($form, interaction, callbacks);
    };
    
    return AssociateInteractionStateQuestion;
});
