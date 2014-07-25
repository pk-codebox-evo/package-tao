<div class="qti-object-container" data-serial="{{serial}}" >
    {{#if video}}<video id="{{serial}}" src="{{attributes.data}}" type="{{attributes.type}}" {{#if attributes.width}}width="{{attributes.width}}"{{/if}} {{#if attributes.height}}height="{{attributes.height}}{{/if}}" controls="controls" preload="none"></video>{{/if}}
    {{#if audio}}<audio id="{{serial}}" src="{{attributes.data}}" type="{{attributes.type}}"></audio>{{/if}}
    {{#if object}}<object id="{{serial}}" data="{{attributes.data}}" type="{{attributes.type}}" width="{{attributes.width}}" height="{{attributes.height}}">{{attributes.alt}}</object>{{/if}}
</div>