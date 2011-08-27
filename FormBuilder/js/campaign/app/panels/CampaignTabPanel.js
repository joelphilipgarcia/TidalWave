Ext.define('PM.panels.CampaignTabPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.panel_campaign_tab',
    activeTab: 0,
    padding: 5, 
    id: 'panel_campaign_tab',
    region: 'center',
    initComponent: function() {
    	
    	this.detailsPanel = Ext.create('PM.forms.campaign.DetailsForm');
    	this.timelinePanel = Ext.create('PM.forms.campaign.TimelineForm');
    	this.entryFormPanel = Ext.create('PM.builder.FormBuilderPanel');
    	this.bannersPanel = Ext.create('PM.forms.campaign.BannersForm');
    	this.publishPanel = Ext.create('PM.forms.campaign.PublishForm');
    	
		this.items = [
	      	this.detailsPanel, 
	    	this.timelinePanel, 
	    	this.entryFormPanel, 
	    	this.bannersPanel, 
	    	this.publishPanel
		];

        this.callParent(arguments);
    },
    update: function() {
    },    
});
