Ext.define('PM.forms.campaign.TimelineForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.widget_timeline_form',
	layout : 'absolute',
	border : false,
	title: '2. Timeline',
	initComponent : function() {
		this.items = [
		  			{	
		  				xtype: 'component',
		  			    autoEl: { 
		  			        tag: 'img', 
		  			        src: '../../images/icons/24x24/Edit_document.png', 
		  			    },
		  		        x: 44,
		  				y: 23,
		  				width: 24,
		  				height: 24
		  			},		
		  			{
						xtype: 'displayfield',
						value: 'Schedule a Promotional Campaign',
						x:84,
						y:23,
						width:250,
						height:20,
						fieldStyle: 'fontWeight:bold' 
					},		  			
					{
						xtype: 'displayfield',
						value: 'Campaign starts on',
						x:20,
						y:64,
						width:125,
						height:20,
						fieldStyle: 'fontWeight:bold' 
					},			
					{
						xtype: 'datefield',
						x:160,
						y:65,
						width:200,
						height:20,
						id: 'id_campaign_starts_on_date',
						format: 'm/d/Y',
						value: new Date()
					},			
					{
						xtype: 'timefield',
						x:375,
						y:65,
						width:200,
						height:20,
						id: 'id_campaign_starts_on_time',
						value: new Date()
					},
					{
						xtype: 'displayfield',
						value: 'Campaign ends on',
						x:20,
						y:130,
						width:125,
						height:40,
						fieldStyle: 'fontWeight:bold' 
					},		
					{
						xtype: 'datefield',
						x:160,
						y:130,
						width:200,
						height:20,
						format: 'm/d/Y',
						id: 'id_campaign_end_on_date',
						value: new Date()
					},			
					{
						xtype: 'timefield',
						x:375,
						y:130,
						width:200,
						height:20,
						id: 'id_campaign_ends_on_time',
						value: new Date()
					}
				];
					
		this.callParent(arguments);
		this.setFocus();
	},
	setFocus: function()
	{
		if (this.focusComponent != null )
			this.focusComponent.focus(true, 200);
	},
	
	createSubmitButton: function( button_text ) {
		var uiComponent = Ext.create('Ext.Button', {
			text : button_text,
			formBind : true, // only enabled once the form is valid
			disabled : true,
			scope : this,
			icon: '../../images/icons/Apply.png',
			handler : function() {
				var form = this.getForm();
				if (form.isValid()) {
					this.parent.submit(button_text);
				}
			}
		});
		
		return uiComponent;
	},
	
	createCancelButton: function() {
		var uiComponent = Ext.create('Ext.Button', {
			text : 'Cancel',
			icon: '../../images/icons/Cancel.png',
			scope : this,
			handler : function() {
				this.parent.cancel();
			}
		});
		
		return uiComponent;
	},

	createUIFieldSet : function(page) {
		var fieldSet = Ext.create('Ext.form.FieldSet', {
			title : 'Customer Info',
			autoScroll : true,
			layout: 'absolute'
		});
		return fieldSet;
	},

	createUIComponent : function(component) {
		if (component == null)
			return null;

		if (component.type == "TEXT_FIELD")
			return this.createUITextField(component);

		if (component.type == "LABEL")
			return this.createUIDisplayField(component);

		if (component.type == "COMBO_BOX" )
			return this.createUIComboBox(component);

		if (component.type == "TEXT_AREA")
			return this.createUITextArea(component);

		if (component.type == "CHECKBOX")
			return this.createUICheckBox(component);
		
		if (component.type == "FILE_PICKER")
			return this.createUIFilePicker(component);
		
		if ( component.type == "IMAGE" || component.type == "DYNAMIC_IMAGE")
			return this.createStaticImage( component );

		if ( component.type == "DECIMAL_FIELD" || component.type == "SPINNER" ||
				component.type == "INTEGER_FIELD")
			return this.createDecimalField( component );
		
		if ( component.type == "DATE_PICKER")
			return this.createDatePickerField( component );

		if ( component.type == "TIME_PICKER")
			return this.createTimePickerField( component );

		if ( component.type == "BUTTON_GROUP")
			return this.createButtonGroupField( component );

		if ( component.type == "RICH_TEXT_EDITOR")
			return this.createRichTextEditorField( component );
		
		return null;
	},
	
	determineFocus: function ( uiComponent ) {
		if ( uiComponent == null )
			return null;
		
		if( this.focusComponent == null )
			this.focusComponent = uiComponent;
		else
		{
			if( uiComponent.x < this.focusComponent.x && uiComponent.y < this.focusComponent.y)
				this.focusComponent = uiComponent;
		}
	},
	createRichTextEditorField : function( component ) {
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.form.HtmlEditor', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			width: component.width,
			height: component.height,
			allowBlank :  component.required ? false: true,
			id : component.name,
			readOnly: (component.access == 'R')? true: false,
			value: ( component.value == null ) ? "" : component.value
		});

		this.determineFocus( uiComponent );
		
		return uiComponent;		
		
	},
	
	createButtonGroupField: function ( component )
	{
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.form.RadioGroup', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			width: component.width,
			height: component.height,
			allowBlank :  component.required ? false: true,
			id : component.name,
			readOnly: (component.access == 'R')? true: false,
			vertical: (component.text == 'VERTICAL') ? true: false
		});
		
		var options = component.options;
		if ( options != null )
		{
			for( k = 0; k< options.length; k++ )
			{
				var radio = Ext.create('Ext.form.field.Radio', {
					boxLabel: options[k].label,
					name: 'rb',
					readOnly: (component.access == 'R')? true: false,
					inputValue: options[k].value
				});
				uiComponent.add( radio );
			}
		}


		this.determineFocus( uiComponent );
		
		return uiComponent;		
		
	},
	createTimePickerField: function( component )
	{
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.form.TimeField', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			fieldWidth: component.width,
			fieldHeight: component.height,
			allowBlank :  component.required ? false: true,
			id : component.name,
			readOnly: (component.access == 'R')? true: false,
		});

		if ( component.minValue != null && component.minValue != '')
			uiComponent.setMinValue ( component.minValue );

		if ( component.maxValue != null && component.maxValue != '')
			uiComponent.setMaxValue ( component.maxValue );

		this.determineFocus( uiComponent );
		
		return uiComponent;		
		
	},
	
	createDatePickerField: function( component )
	{
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.form.DateField', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			format: 'm/d/Y',
			altFormats: 'm/d/Y g:i:s A',
			fieldWidth: component.width,
			fieldHeight: component.height,
			allowBlank :  component.required ? false: true,
			value: (component.value != null ) ? component.value : new Date(),
			id : component.name,
			readOnly: (component.access == 'R')? true: false,
		});

		if ( component.minValue != null && component.minValue != '')
			uiComponent.setMinValue ( component.minValue );

		if ( component.maxValue != null && component.maxValue != '')
			uiComponent.setMaxValue ( component.maxValue );

		this.determineFocus( uiComponent );
		
		return uiComponent;		
		
	},
	
	createDecimalField: function ( component )
	{
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.form.NumberField', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			allowBlank :  component.required ? false: true,
			value: (component.value != null ) ? component.value : 0,
			id : component.name,
			readOnly: (component.access == 'R')? true: false,
			decimalPrecision: component.decimal
		});
		
		if ( component.minValue != null && component.minValue != '')
			uiComponent.setMinValue ( component.minValue );

		if ( component.maxValue != null && component.maxValue != '')
			uiComponent.setMaxValue ( component.maxValue );

		this.determineFocus( uiComponent );
		
		return uiComponent;		
	},
	createStaticImage: function ( component )
	{
		if ( component == null )
			return null;
		
		var uiComponent = Ext.create('Ext.Component',{
		    autoEl: { 
		        tag: 'img', 
		        src: 'http://184.73.155.225:8080/billfish/content/DocumentManagement/download?key=' 
		        	+ component.value + '&token=' + user.security_token, 
		        id: component.name,
		    },
	        x: component.x,
			y: component.y,
			width: component.width,
			height: component.height
		});
		
		return uiComponent;
	},
	createUIFilePicker: function (component) {
		if (component == null)
			return null;
		 
		var uiComponent = Ext.create('Ext.form.field.File', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			allowBlank :  component.required ? false: true,
			value: (component.value != null ) ? component.value : '',
			id : component.name,
			readOnly: (component.access == 'R')? true: false
		});
		
		this.determineFocus( uiComponent );

		return uiComponent;
	
	},
	createUITextField : function(component) {
		if (component == null)
			return null;
		 
		var uiComponent = Ext.create('Ext.form.TextField', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			allowBlank :  component.required ? false: true,
			value: (component.value != null ) ? component.value : '',
			id : component.name,
			readOnly: (component.access == 'R')? true: false
		});

		this.determineFocus( uiComponent );
		
		return uiComponent;
	},

	createUICheckBox : function(component) {
		if (component == null)
			return null;

		var uiComponent = Ext.create('Ext.form.Checkbox', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			fieldLabel : component.label,
			id : component.name,
			value : (component.value == null ) ? '' : component.value,
			readOnly: (component.access == 'R')? true: false
		});

		this.determineFocus( uiComponent );
		
		return uiComponent;
	},

	createUIDisplayField : function(component) {
		if (component == null)
			return null;
		
		var bBold = false;
		if( component.styles != null )
		{
			for( k = 0; k< component.styles.length; k++ )
			{
				if( component.styles[k].label == 'fontWeight')
				{
					if( component.styles[k].value == 'bold')
						bBold = true;
				}
			}
		}

		var uiComponent = Ext.create('Ext.form.DisplayField', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			value : component.value
		});
		
		if ( bBold )
			uiComponent.setFieldStyle('fontWeight:bold');
		
		return uiComponent;
	},

	createUIComboBox : function(component) {
		if (component == null)
			return null;
		
		if( component.options == null )
			return null;
		
		var values = Ext.create('Ext.data.Store', {
		    fields: ['label', 'value'],
		    data : component.options
		});

		var uiComponent = new Ext.create('Ext.form.field.ComboBox', {
			store : values,
			queryMode : 'local',
			displayField: 'label',
			valueField : 'value',
			autoSelect : true,
			forceSelection : true,
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			id : component.name,
			allowBlank :  component.required ? false: true,
			value : (component.value == null ) ? '' : component.value,
			readOnly: (component.access == 'R')? true: false,
			editable: false
		});
		
		this.determineFocus( uiComponent );

		return uiComponent;
	},

	

	createUITextArea : function(component) {
		if (component == null)
			return null;

		var uiComponent = Ext.create('Ext.form.field.TextArea', {
			width: component.width,
			height: component.height,
			x: component.x,
			y: component.y,
			value : component.value,
			id : component.name,
			allowBlank :  component.required ? false: true,
			value : (component.value == null ) ? '' : component.value,
			readOnly: (component.access == 'R')? true: false
		});

		this.determineFocus( uiComponent );
		
		return uiComponent;
	},
});
