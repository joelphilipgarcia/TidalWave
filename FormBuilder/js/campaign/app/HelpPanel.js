Ext.define('PM.HelpPanel', {
	extend : 'Ext.Panel',
	alias : 'widget.panel_help',
	layout : 'border',
    region: 'center',
    autoScroll: true,
    title : 'Help',
	initComponent : function() {

		this.items = [ {
			id : 'id_help_panel',
			xtype : 'panel',
			region : 'center',
			autoScroll : true,
			flex : 1
		} ];

		this.tbar = [ ];

		this.callParent(arguments);
	},
	onLoad : function() {
	},
	update : function() {
	},
});
