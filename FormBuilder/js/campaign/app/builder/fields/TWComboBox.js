Ext.define('PM.builder.fields.TWComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.tw_combobox',
	flex : 1,
	anchor: '95%',
	queryMode : 'local',
	displayField: 'name',
	valueField : 'value',
	autoSelect : true,
	forceSelection : true,
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,

	initComponent : function() {
		this.store = Ext.create('Ext.data.Store', {
		    fields: ['name','value'],
		    data : [{"name":"1st Choice", "value":"1"},
		            {"name":"2nd Choice", "value":"2"}
		            ]
		});
		this.callParent(arguments);
	},
	
	updateStore: function( records )
	{
		if ( records == null )
			return;
		
		this.store.loadData( records );
	}
});