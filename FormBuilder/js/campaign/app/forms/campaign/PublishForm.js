Ext.define('PM.forms.campaign.PublishForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.widget_publish_form',
	layout : 'absolute',
	border : false,
	title: '5. Publish',
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
		  				value: 'Publish to Facebook Fan Page',
		  				x:84,
		  				y:23,
		  				width:250,
		  				height:20,
		  				fieldStyle: 'fontWeight:bold' 
		  			},
		  			{
						xtype: 'button',
						x:84,
						y:64,
						text: 'Pay Now',
			            scope: this,
			            handler: this.payNow
					},
					{
						xtype: 'button',
						text: 'Publish',
						disabled: true,
			            icon: '../../images/icons/Go.png',
						x:84,
						y:100,
			            handler: this.publishCampaign
					}
		  			];
		
		this.callParent(arguments);
	},
});
