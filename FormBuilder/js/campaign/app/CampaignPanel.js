Ext.define('PM.CampaignPanel', {
	extend: 'Ext.Panel',
    alias: 'widget.panel_campaign',
    layout: 'border',
    region: 'center',
    title : 'Campaigns',
    initComponent: function() 
    {
		this.createButton = Ext.create( 'Ext.Button',{
            text: 'Create Campaign',
            icon: '../../images/icons/Add.png',
            scope: this,
            handler: this.createCampaign
		});

		this.publishButton = Ext.create( 'Ext.Button',{
            text: 'Publish',
            icon: '../../images/icons/Go.png',
            scope: this,
            handler: this.publishCampaign
		});

		this.editButton = Ext.create( 'Ext.Button',{
            text: 'Edit',
            icon: '../../images/icons/Edit_document.png',
            scope: this,
            handler: this.editCampaign
		});

		this.deleteButton = Ext.create( 'Ext.Button',{
            text: 'Delete',
            icon: '../../images/icons/Delete.png',
            scope: this,
            handler: this.deleteCampaign
		});
		
		this.entriesButton = Ext.create( 'Ext.Button',{
            text: 'Entries',
            icon: '../../images/icons/Book_of_record.png',
            scope: this,
            handler: this.entriesCampaign
		});
		
		this.analyticsButton = Ext.create( 'Ext.Button',{
            text: 'Analytics',
            icon: '../../images/icons/3d_bar_chart.png',
            scope: this,
            handler: this.analyticsCampaign
		});
		
		this.refreshButton = Ext.create( 'Ext.Button',{
            text: 'Refresh',
            icon: '../../images/icons/Refresh.png',
            scope: this,
            handler: this.update
		});
		
		this.manageCampaignPanel = Ext.create('PM.panels.ManageCampaignPanel');
		
        this.items = [ this.manageCampaignPanel];
        
        this.tbar = [this.createButton, this.publishButton, this.editButton, this.deleteButton,
                     {xtype: 'tbspacer',width: 50}, this.entriesButton, this.analyticsButton, 
                     {xtype: 'tbspacer',width: 50},this.refreshButton];
    	
        this.campaignDialog = Ext.create('PM.dialogs.CampaignDialog', {
    		parent: this
    	});          
        
        this.callParent(arguments);
    },
    onLoad : function()
    {
    },
    update: function () {
    },
    createCampaign: function() {
    	this.campaignDialog.show();
    },
    publishCampaign: function() {
    },
    editCampaign: function() {
    },
    deleteCampaign: function() {
    },
    entriesCampaign: function() {
    },
    analyticsCampaign: function() {
    }
});



