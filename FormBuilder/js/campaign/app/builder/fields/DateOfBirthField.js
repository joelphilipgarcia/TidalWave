Ext.define('PM.builder.fields.DateOfBirthField', {
    extend: 'Ext.form.DateField',
    alias: 'widget.date_of_birth_field',
	fieldLabel : 'Date of Birth',
	flex : 1,
	anchor: '95%',
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,
	value: new Date(),
	initComponent: function() {
		this.callParent( arguments );
	}
});