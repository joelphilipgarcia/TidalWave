Ext.ns('PM');

PM.mask = 'Loading...';

Ext.define('PM.AppPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.panel_app',
    activeTab: 0,
    height: 600,
    padding: 10, 
    id: 'panel_app',
    initComponent: function() {
    	
    	this.campaignPanel = Ext.create('PM.CampaignPanel');
    	this.monitorPanel = Ext.create('PM.MonitorPanel');
    	this.settingsPanel = Ext.create('PM.SettingsPanel');
    	this.helpPanel = Ext.create('PM.HelpPanel');
    	
		this.items = [   
		    this.campaignPanel ,
		    this.monitorPanel,
		    this.settingsPanel,
		    this.helpPanel
		];

        this.callParent(arguments);
    },
    update: function() {
    },    
});
