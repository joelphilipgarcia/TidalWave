Ext.define('PM.MonitorPanel', {
	extend: 'Ext.Panel',
    alias: 'widget.panel_monitor',
    layout: 'border',
    region: 'center',
    autoScroll: true,
    title : 'Monitor',
    initComponent: function() {
		
		this.refreshButton = Ext.create( 'Ext.Button',{
            text: 'Refresh',
            icon: '../../images/icons/Refresh.png',
            scope: this,
            handler: this.update
		});
		
        this.items = [{	
  			id : 'id_monitor_panel',
			xtype : 'panel',
			region : 'center',
			autoScroll : true,
			flex : 1
        }];
        
        this.tbar = [this.refreshButton];
        
        this.callParent(arguments);
    },
    onLoad : function()
    {
    },
    
    update: function () {
    },
});



