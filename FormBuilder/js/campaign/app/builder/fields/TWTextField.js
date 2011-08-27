Ext.define('PM.builder.fields.TWTextField', {
    extend: 'Ext.form.TextField',
    alias: 'widget.tw_text_field',
	flex : 1,
	anchor: '95%',
	allowBlank :  true,
	readOnly	: true,
	editable	: false,
	padding		: 10,
	initComponent: function() {
		this.callParent( arguments );
	}
});