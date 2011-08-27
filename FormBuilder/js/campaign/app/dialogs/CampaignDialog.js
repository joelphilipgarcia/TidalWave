Ext.define('PM.dialogs.CampaignDialog', {
    extend: 'Ext.window.Window',
    height: 600,
    width : 850,
    x: 50,
    y: 50,
    title : 'Create a Signup Form Campaign',
    closeAction: 'hide',
    layout: 'border',
    border: false,
    bodyBorder: false,
    initComponent: function() {
    	this.campaignTabPanel = Ext.create('PM.panels.CampaignTabPanel');
    	
        this.items = [ this.campaignTabPanel ];
        
        this.buttons = [
            {
                text: 'OK',
                scope: this,
                icon: '../../images/icons/Add.png',
                handler: function () {
                	this.close();
                }
            },
            {
                text: 'Cancel',
                scope: this,
                icon: '../../images/icons/Delete.png',
                handler: function() {
                	this.close();
                }
            }
        ];
        
        this.callParent(arguments);
        
    },
});
