Ext.define('PM.builder.panels.FormNameHeaderPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.form_name_header_panel',
	border : false,
	padding: 10,
	region: 'west',
	id: 'id_form_name__header_panel',
	
	initComponent : function() {
		this.form_name_display_field = Ext.create('Ext.form.DisplayField', {
			anchor: '95%',
			id: 'id_form_name_display_field',
			value: 'Untitled Form',
			fieldStyle: 'fontWeight:bold'
		});
		
		this.form_description_display_field = Ext.create('Ext.form.DisplayField', {
			anchor: '95%',
			id: 'id_form_description_display_field',
			value: 'This is my form. Please fill it out. It\'s awesome!'
		});
		
		
		this.items= [ 
		             this.form_name_display_field, 
		             this.form_description_display_field
		];
	
		this.callParent( arguments );
	}
});