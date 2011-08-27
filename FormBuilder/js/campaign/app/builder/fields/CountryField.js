Ext.define('PM.builder.fields.CountryField', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.country_field',
	fieldLabel : 'Country',
	flex : 1,
	anchor: '95%',
	queryMode : 'local',
	displayField: 'name',
	valueField : 'abbr',
	autoSelect : true,
	forceSelection : true,
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,

	initComponent : function() {
		this.store = Ext.create('Ext.data.Store', {
		    fields: ['abbr', 'name'],
		    data : [{"abbr":"USA", "name":"United States"},
		            {"abbr":"FR", "name":"France"},
		            {"abbr":"UK", "name":"United Kingdom"}]
		});
		this.callParent(arguments);
	}
});