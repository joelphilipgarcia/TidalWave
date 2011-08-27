Ext.define('PM.builder.fields.StateField', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.state_field',
	fieldLabel : 'State',
	flex : 1,
	anchor: '95%',
	padding		: 10,
	allowBlank :  true,
	readOnly: true,
	editable: false,
	queryMode : 'local',
	displayField: 'name',
	valueField : 'abbr',
	autoSelect : true,
	forceSelection : true,

	initComponent : function() {
		this.store = Ext.create('Ext.data.Store', {
		    fields: ['abbr', 'name'],
		    data : [{"abbr":"AL", "name":"Alabama"},
		            {"abbr":"AK", "name":"Alaska"},
		            {"abbr":"AZ", "name":"Arizona"}]
		});
		this.callParent(arguments);
	}
});

	
