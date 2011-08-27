Ext.define('PM.builder.panels.MultipleEntryFormPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.multiple_entry_form_panel',
	border : false,
	width: 200,
	initComponent : function() {
		this.field_label = Ext.create('Ext.form.TextField', {
			labelAlign: 'top',
			fieldLabel: 'Field Label',
			flex: 1,
			name: 'field_label_multiple',
			id: 'id_field_label_multiple',
			listeners: {
                change: {
                    fn: this.onTextFieldChange,
                    scope: this,
                    buffer: 100
                }
            }
		});
		
		this.required_check = Ext.create( 'Ext.form.Checkbox',{
			name: 'required_check_multiple',
			boxLabel: 'The field is required',
			id: 'id_field_required_multiple',
			listeners: {
                change: {
                    fn: this.onRequiredChange,
                    scope: this
                }
            }
		});
		
		this.field_error_msg = Ext.create( 'Ext.form.TextField',{
			labelAlign: 'top',
			fieldLabel: 'Error message',
			disabled: true,
			flex: 1,
			name: 'field_error_msg_multiple',
			id: 'id_field_error_msg_multiple',
			listeners: {
                change: {
                    fn: this.onErrorMsgChange,
                    scope: this,
                    buffer: 100
                }
            }
		});
		
	    Ext.define('Entry', {
	        extend: 'Ext.data.Model',
	        fields: [
	            'name',
	            'value'
	        ]
	    });
		
		this.store = Ext.create('Ext.data.Store', {
			autoDestroy: true,
		    model: 'Entry',
		    proxy: {
		    	type: 'memory'
		    }
		});

	    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
	        clicksToMoveEditor: 1,
	        autoCancel: false
	    });
		
		this.gridPanel = Ext.create('Ext.grid.GridPanel',{
		    columnLines: false,
		    hideHeaders: true,
		    flex: 1,
		    height: 200,
		    name: 'grid_choices_multiple',
		    id: 'id_grid_choices_multiple',
		    autoScroll: true,
		    store: this.store,
		    columns :[
				{
					dataIndex: 'name',
					header: 'Choice',
					flex: 1,
					editor: {
		                allowBlank: false
		            }
				}
				],
			plugins: [rowEditing],
			tbar : [
			    {
			    	xtype:'button',
			    	text: 'Add',
		            icon: '../../images/icons/Add.png',
		            handler: function()
		            {
		            	rowEditing.cancelEdit();
		            	var gridPanel = Ext.getCmp('id_grid_choices_multiple');
		            	if ( gridPanel != null )
		            	{
		            		var r = Ext.ModelManager.create({
		                        name: '1st Choice',
		                        value: '1st Choice'
		                    }, 'Entry');

		            		gridPanel.store.insert( 0,r);
		            		rowEditing.startEdit(0,0);
		            	}
		            }
			    },
			    {
			    	xtype:'button',
			    	text: 'Delete',
		            icon: '../../images/icons/Delete.png',
		            handler: function()
		            {
		            	var gridPanel = Ext.getCmp('id_grid_choices_multiple');
		            	var sm = gridPanel.getSelectionModel();
		            	rowEditing.cancelEdit();
		            	gridPanel.store.remove(sm.getSelection());
		            	if ( gridPanel.store.getCount() > 0)
		            		sm.select(0);
		            }
			    },{xtype: 'tbspacer',width: 20},
			    {
			    	xtype:'button',
			    	text: 'Apply',
		            icon: '../../images/icons/Apply.png',
		            handler: function()
		            {
		            	var gridPanel = Ext.getCmp('id_grid_choices_multiple');
		            	var entryPanel = Ext.getCmp('id_multiple_entry_form_panel');
		            	if ( gridPanel != null && entryPanel != null )
		            		entryPanel.field.updateStore( gridPanel.store.data.items );
		            }
			    }
   
			]
		});		

		
		this.items= [ 
		             this.field_label, 
		             this.required_check,
		             this.field_error_msg,
		             this.gridPanel
		];
	
		this.callParent( arguments );
	},
	
	onErrorMsgChange: function (){
		if( this.field != null )
		{
			 value = this.field_error_msg.getValue();
			 if ( this.field.items )
		 	 {
				for( var i = 0; i < this.field.items.items.length; i++)
				{
					var thisItem = this.field.items.items[i];
					thisItem.blankText = value;
				}
		 	 }
			 else 
				 this.field.blankText = value;
		}
	},
	
	onTextFieldChange: function (){
		if( this.field != null )
		{
			 value = this.field_label.getValue();
			 var label = this.field.el.child('.x-form-item-label');
			 if (label) {
					label.update(value + ':');
					this.field.fieldLabel = value;
			 }
		}
	},
	onRequiredChange: function() {
		if( this.field != null )
		{
			var selected = this.required_check.getValue()
			this.field_error_msg.setDisabled( !selected );
			if ( this.field.items )
			{
				for( var i = 0; i < this.field.items.items.length; i++)
				{
					var thisItem = this.field.items.items[i];
					thisItem.allowBlank = !selected;
				}
			}
			 else 
				 this.field.allowBlank = value;

		}
	},
	setEntity: function( entity )  {
		this.field = entity;
		if ( this.field )
		{
			this.field_label.setValue( this.field.fieldLabel );
			this.required_check.setValue ( !this.field.allowBlank );
			this.field_error_msg.setDisabled( this.field.allowBlank );
			this.field_error_msg.setValue( this.field.blankText );
			
			if ( this.field.store != null )
			{
				this.gridPanel.store.removeAll( true );
				this.gridPanel.store.loadData ( this.field.store.data.items );
			}
		}
	}
});