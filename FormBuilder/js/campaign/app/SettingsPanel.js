Ext.define('PM.SettingsPanel', {
	extend: 'Ext.Panel',
    alias: 'widget.panel_settings',
    layout: 'border',
    region: 'center',
    autoScroll: true,
    title : 'Settings',
    initComponent: function() {
        
        this.items = [{
  			id : 'id_settings_panel',
			xtype : 'panel',
			region : 'center',
			autoScroll : true,
			flex : 1
        }];
        
        this.tbar = [];
        
        this.callParent(arguments);
    },
    onLoad : function()
    {
    },
    update: function () {
    },
});



