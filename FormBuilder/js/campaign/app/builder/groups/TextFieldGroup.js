Ext.define('PM.builder.groups.TextFieldGroup', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.text_field_group',
	flex : 1,
	anchor: '95%',
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,
	vertical: true,
	columns: 1,
	initComponent: function() {
		var textFirst = Ext.create('Ext.form.TextField', {
			labelAlign: 'right',
			width: 200,
			readOnly: false
		});
		
		var textSecond = Ext.create('Ext.form.TextField', {
			labelAlign: 'right',
			width: 200,
			readOnly: false
		});
		
		this.items= [ textFirst, textSecond ];
		this.callParent( arguments );
	},
	updateStore: function( records )
	{
	}
});