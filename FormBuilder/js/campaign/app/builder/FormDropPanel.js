Ext.define('PM.builder.FormDropPanel', {
    extend: 'Ext.form.Panel',
	region : 'center',
	id : 'id_form_drop_target',
	width : 325,
	padding : 10,
	plugins : Ext
			.create(
					'PM.builder.PanelFieldDragZone',
					{
						id : 'id_panel_field_drag_zone',
						tabPanel: this.tabPanel
					}),
	split : true,
	autoScroll : true,
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',
		items : [
				{
					text : 'Delete',
					xtype : 'button',
					icon : '../../images/icons/Delete.png',
					handler : function() {
						var panel = Ext
								.getCmp('id_form_drop_target');
						if (panel != null) {
							var plugin = panel.plugins[0];
							if (plugin != null
									&& plugin.prevSelection != null) {
								panel
										.remove(plugin.prevSelection);
							}
						}
					}
				},
				{
					text : 'Preview',
					xtype : 'button',
					icon : '../../images/icons/Edit_document.png',
					handler : function() {
					}
				},
				{
					text : 'Show XML',
					xtype : 'button',
					icon : '../../images/icons/View.png',
					scope: this,
					handler : function () {
						   var helpWindow = Ext.create('Ext.Window', {
						        title: 'Serialization',
						        width: 500,
						        height: 500,
						        x: 10,
						        y: 10,
						        closeAction: 'hide',
						        layout: 'fit',
						        items: [{
						        	xtype : 'textarea',
						        	id: 'id_serialization_textarea'
						        }
						        ]
						    });

						   var cmp = helpWindow.getComponent('id_serialization_textarea');
						   var form_drop = Ext.getCmp('id_form_drop_target');
						   var data = form_drop.generateFormData();
						   cmp.setValue(data);
						
						   helpWindow.show();
						
					}
				} ]
	} ],
	afterRender : function () {
		Ext.form.Panel.prototype.afterRender.apply(this, arguments);
		createTargetDropZone( this );
	},
	generateFormData: function() 
	{
		var xml_data = '';
		console.log('Panel position is ' + this.getPosition() );
		for ( var k = 0; k < this.items.items.length; k++) 
		{
			var component = this.items.items[k];
			this.acquireInputAndLabels( component, xml_data );
		}
		return xml_data;
	},
	acquireInputAndLabels : function ( component, xml_data  ) 
	{
		if ( component != null )
		{
			if ( component.componentCls == 'x-field')
			{
				console.log( component.alias + ' Height: '+ component.getHeight() + ' Width: ' + component.getWidth() + ' Screen Coordinates: ' + component.getPosition(false) );
			}
			if( component.is('label'))
			{
				console.log( component );
			}
			
			if ( component.items != null )
			{
				for ( var l = 0 ; l < component.items.length; l++ )
				{
					var child = component.items.items[l];
					this.acquireInputAndLabels( child, xml_data );
				}
			}
		}
	}
});    