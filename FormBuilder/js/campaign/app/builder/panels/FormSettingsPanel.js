Ext.define('PM.builder.panels.FormSettingsPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.form_settings_panel',
	border : false,
	padding: 10,
	width: 250,
	title: 'Form Settings',
	id: 'id_form_settings_panel',
	initComponent : function() {
		this.form_name_text_field = Ext.create('Ext.form.TextField', {
			labelAlign: 'top',
			fieldLabel: 'Form Name',
			flex: 1,
			anchor: '95%',
			name: 'form_name_text_field',
			id: 'id_form_name_text_field',
			listeners: {
                change: {
                    fn: this.onNameChange,
                    scope: this,
                    buffer: 100
                }
            }
		});
		
		this.form_description_text_area = Ext.create('Ext.form.TextArea', {
			labelAlign: 'top',
			fieldLabel: 'Form Description',
			flex: 1,
			anchor: '95%',
			id: 'id_form_description_text_area',
			listeners: {
                change: {
                    fn: this.onDescriptionChange,
                    scope: this,
                    buffer: 100
                }
            }
				
		});
		
		this.items= [ 
		             this.form_name_text_field, 
		             this.form_description_text_area
		];
	
		this.callParent( arguments );
	},
	
	onNameChange: function ()
	{
		if( this.form_name_header_panel != null )
		{
			 var value = this.form_name_text_field.getValue();
			 this.form_name_header_panel.form_name_display_field.setValue( value );
		}
	},
	onDescriptionChange: function ()
	{
		if( this.form_name_header_panel != null )
		{
			 var value = this.form_description_text_area.getValue();
			 this.form_name_header_panel.form_description_display_field.setValue( value );
		}
	},
	setFormNameHeaderPanel: function( form_name_header_panel )  
	{
		this.form_name_header_panel = form_name_header_panel;
		this.form_name_text_field.setValue( this.form_name_header_panel.form_name_display_field.getValue());
		this.form_description_text_area.setValue( this.form_name_header_panel.form_description_display_field.getValue());
	}
});