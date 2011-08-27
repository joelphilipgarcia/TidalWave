Ext.define('PM.builder.panels.TextFieldFormPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.text_field_form_panel',
	border : false,
	width: 200,
	initComponent : function() {
		this.field_label = Ext.create('Ext.form.TextField', {
			labelAlign: 'top',
			fieldLabel: 'Field Label',
			flex: 1,
			name: 'field_label',
			id: 'id_field_label',
			listeners: {
                change: {
                    fn: this.onTextFieldChange,
                    scope: this,
                    buffer: 100
                }
            }
		});

		this.field_hint = Ext.create('Ext.form.TextField', {
			labelAlign: 'top',
			fieldLabel: 'Hint Text',
			flex: 1,
			name: 'field_hint',
			id: 'id_field_hint',
			listeners: {
                change: {
                    fn: this.onHintChange,
                    scope: this,
                    buffer: 100
                }
            }
		});
		
		this.required_check = Ext.create( 'Ext.form.Checkbox',{
			name: 'required_check',
			boxLabel: 'The field is required',
			id: 'id_field_required',
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
			name: 'field_error_msg',
			id: 'id_field_error_msg',
			listeners: {
                change: {
                    fn: this.onErrorMsgChange,
                    scope: this,
                    buffer: 100
                }
            }
		});

		
		this.items= [ 
		             this.field_label, 
		             this.field_hint, 
		             this.required_check,
		             this.field_error_msg
		];
	
	this.callParent( arguments );
	},
	
	afterRender: function() {
		var me = this;
	    me.callParent(arguments);
	},
	
	onErrorMsgChange: function (){
		if( this.field != null )
		{
			 value = this.field_error_msg.getValue();
			 this.field.blankText = value ;
		}
	},
	
	onHintChange: function (){
		if( this.field != null )
		{
			 value = this.field_hint.getValue();
			 this.field.emptyText = value ;
			 this.field.applyEmptyText();
		}
	},
	onTextFieldChange: function (){
		if( this.field != null )
		{
			 value = this.field_label.getValue();
			 this.field.setFieldLabel( value );
		}
	},
	onRequiredChange: function() {
		if( this.field != null )
		{
			var selected = this.required_check.getValue()
			this.field.allowBlank = !selected;
			this.field_error_msg.setDisabled( !selected );
		}
	},
	setEntity: function( entity )  {
		this.field = entity;
		if ( this.field )
		{
			this.field_label.setValue( this.field.fieldLabel );
			this.field_hint.setValue( this.field.emptyText );
			this.required_check.setValue ( !this.field.allowBlank );
			this.field_error_msg.setDisabled( this.field.allowBlank );
			this.field_error_msg.setValue( this.field.blankText );
		}
	}
});