Ext.define('PM.forms.campaign.DetailsForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.widget_details_form',
	layout : 'absolute',
	border : false,
	title: '1. Campaign Details',
	initComponent : function() {
		this.focusComponent = null;

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
				value: 'Create a Promotional Campaign',
				x:84,
				y:23,
				width:250,
				height:20,
				fieldStyle: 'fontWeight:bold' 
			},
			{
				xtype: 'displayfield',
				value: 'Campaign Name',
				x:20,
				y:64,
				width:104,
				height:20,
				fieldStyle: 'fontWeight:bold' 
			},			
			{
				xtype: 'textfield',
				x:160,
				y:65,
				width:300,
				height:20,
				id: 'id_campaign_name'
			},
			{
				xtype: 'displayfield',
				value: 'Examples: a Newsletter Signup Form,a Customer Feedback Survey,an Ideas Sharing Questionnaire, etc.',
				x:60,
				y:98,
				width:285,
				height:33,
				fieldStyle: '' 
			},	
			{
				xtype: 'displayfield',
				value: 'Facebook Like and Send Buttons URL',
				x:20,
				y:150,
				width:125,
				height:40,
				fieldStyle: 'fontWeight:bold' 
			},		
			{
				xtype: 'textfield',
				x:160,
				y:155,
				width:300,
				height:20,
				value: 'http://',
				id: 'id_fb_url'
			},
			{
				xtype: 'displayfield',
				value: 'Please note: This feature is not available for Basic.',
				x:60,
				y:188,
				width:285,
				height:33,
				fieldStyle: '' 
			},	
		];
		
		this.callParent(arguments);
		this.setFocus();
	},
	setFocus: function()
	{
		if (this.focusComponent != null )
			this.focusComponent.focus(true, 200);
	},
});
