Ext.define('PM.builder.panels.FieldSettingsPanel', {
	extend : 'Ext.Panel',
	alias : 'widget.field_settings_panel',
	border : false,
	padding: 10,
	layout: 'card',
	activeItem: 0,
	title: 'Field Settings',
	id: 'id_field_settings_panel',
	items: [
	        {
	        	xtype: 'text_field_form_panel',
	        	id: 'id_text_field_form_panel'
	        },
	        {
	        	xtype: 'multiple_entry_form_panel',
	        	id: 'id_multiple_entry_form_panel'
	        }],
	setEntity : function( entity )
	{
		if (entity.alias == 'widget.ranking_group' ||
			entity.alias == 'widget.multiple_checkbox_group' ||
			entity.alias == 'widget.multiple_choice_group' ||
			entity.alias == 'widget.tw_combobox' ||
			entity.alias == 'widget.gender_group' ||
			entity.alias == 'widget.text_field_group')
		{
			if ( this.multipleEntryFormPanel == null )
				this.multipleEntryFormPanel = Ext.getCmp( 'id_multiple_entry_form_panel');
			this.multipleEntryFormPanel.setEntity( entity );
			this.layout.setActiveItem(1);
		}
		else
		{
			if ( this.textFieldFormPanel == null )
				this.textFieldFormPanel= Ext.getCmp( 'id_text_field_form_panel');
			this.textFieldFormPanel.setEntity( entity );
			this.layout.setActiveItem(0);
		}
	},
});