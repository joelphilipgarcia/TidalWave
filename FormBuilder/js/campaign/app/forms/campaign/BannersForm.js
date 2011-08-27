Ext.define('PM.forms.campaign.BannersForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.widget_banners_form',
	layout : 'absolute',
	border : false,
	title: '4. Banners',
	autoScroll: true,
	initComponent : function() {
		this.items = [
			{	
				xtype: 'component',
			    autoEl: { 
			        tag: 'img', 
			        src: '../../images/banner-header.png', 
			    },
		        x: 44,
				y: 23,
				width: 760,
				height: 100
			},
			{
				xtype: 'filefield',
				id: 'id_banner_header_upload',
	            emptyText: 'Select a Banner Header Image (*.png) to upload',
	            fieldLabel: 'Banner Header Image',
	            name: 'banner_header_file',
	            msgTarget:'side',
	            allowBlank: false,
	            buttonCfg: {
	                text: '',
	                iconCls: 'upload-icon'
	            },
				x:44,
				y:133,
				width:650,
				labelWidth: 150,
				height:20,
				margin: '10 50 0 0 '
			},
			{	
				xtype: 'component',
			    autoEl: { 
			        tag: 'img', 
			        src: '../../images/banner-custom.png', 
			    },
		        x: 44,
				y: 183,
				width: 300,
				height: 250
			},
			{
				xtype: 'filefield',
				id: 'id_banner_custom_upload',
	            emptyText: 'Select a Banner Custom Image (*.png) to upload',
	            fieldLabel: 'Banner Custom Image',
	            name: 'banner_custom_file',
	            msgTarget:'side',
	            allowBlank: false,
	            buttonCfg: {
	                text: '',
	                iconCls: 'upload-icon'
	            },
				x:44,
				y:443,
				width:650,
				labelWidth: 150,
				height:20,
				margin: '10 50 0 0 '
			},

			{	
				xtype: 'component',
			    autoEl: { 
			        tag: 'img', 
			        src: '../../images/img-feedbanner.png', 
			    },
		        x: 44,
				y: 493,
				width: 90,
				height: 90
			},
			{
				xtype: 'filefield',
				id: 'id_banner_feed_upload',
	            emptyText: 'Select a Feed Banner Image (*.png) to upload',
	            fieldLabel: 'Feed Banner Image',
	            name: 'feed_banner_file',
	            msgTarget:'side',
	            allowBlank: false,
	            buttonCfg: {
	                text: '',
	                iconCls: 'upload-icon'
	            },
				x:44,
				y:593,
				width:650,
				labelWidth: 150,
				height:20,
				margin: '10 50 0 0 '
			}  	
		];
		
		this.callParent(arguments);
	}
});
