Ext.define('PM.builder.groups.GenderGroup', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.gender_group',
	flex : 1,
	anchor: '95%',
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,
	vertical: true,
	columns: 1,
	initComponent: function() {
		var radioMale = Ext.create('Ext.form.field.Radio', {
			boxLabel: 'Male',
			name: 'rb',
			readOnly: false,
			inputValue: true
		});
		
		var radioFemale = Ext.create('Ext.form.field.Radio', {
			boxLabel: 'Female',
			name: 'rb',
			readOnly: false,
			inputValue: false
		});
		
		this.items= [ radioMale, radioFemale ];
//		this.add( radioMale );		
//		this.add( radioFemale );
		this.callParent( arguments );
	},
	updateStore: function( records )
	{
	}
});