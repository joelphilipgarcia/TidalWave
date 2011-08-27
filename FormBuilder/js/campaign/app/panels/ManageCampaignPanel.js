Ext.define('PM.panels.ManageCampaignPanel', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.panel_manage_campaign',
    requires: ['Ext.data.Store'],
    columnLines: true,
    title: 'Manage Campaigns',
	region: 'center',
  	autoScroll: true,
    messageRenderer : function (val){
    	if( val != null )
    	{
    		return '<img src=\"../../images/icons/'+ val + '\">';
    	}
    	return '<img src=\"../../images/icons/Message.jpg\">';
    }, 
    initComponent: function() {
        this.columns = [
            {
                xtype: 'gridcolumn',
                header: '',
                dataIndex: 'documentation',
                sortable: true,
                width: 25,
                renderer: this.messageRenderer
            },{
                xtype: 'gridcolumn',
                dataIndex: 'caseTitle',
                header: 'Campaign Name',
                sortable: true,
                width: 250,
                editable: false
            },
            {
                xtype: 'gridcolumn',
                dataIndex: 'processPriority',
                header: 'State',
                sortable: true,
                width: 100
            },
            {
                xtype: 'datecolumn',
                dataIndex: 'created',
                header: 'Started',
                sortable: true,
                format: 'D n/j, g:i:s a',
                flex : 1
            },
            {
                xtype: 'datecolumn',
                dataIndex: 'completionDate',
                header: 'Ending',
                sortable: true,
                format: 'D n/j, g:i:s a',
                flex : 1
            }
        ];
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id','task_name','designId', 'caseTitle','status','documentation','mixed_process_name','processState', 'processPriority','process_identifier','process_instance_id', 
                     	'created', 'completionDate','process_name','hasForm','owner_name','stateOptions'],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    root: ''
                }
            },
        	sorters: [{
      	    	property: 'created',
      	        direction: 'Desc'
      	    }],
      	    sortOnLoad: true        
        });            

        this.store.on('load', this.loadFirstDialog, this);
        this.form_store = null;
        this.callParent(arguments);
        
        var sm = this.getSelectionModel();
        sm.on('select',this.onGridRowSelect, this );
    },
    loadFirstDialog: function() {
		if( this.store.count() > 0 )
		{
			var readyItem = null;
			for( i = 0; i < this.store.count(); i++)
			{
				var item = this.store.data.items[i];
				if( item.data.status == 'READY')
				{
					readyItem = item;
					break;
				}
			}
		}
    },
    
    onGridRowSelect: function(sm ,rowIdx, r)
    {
        if ( rowIdx.data.documentation != null && rowIdx.data.hasForm  )
        {
			if( this.form_store == null )
			{
		        this.form_store = Ext.create('Ext.data.Store', {
		        	model: "PMForm"
		        });
			}
	        
			PM.mask = 'Loading Dialog...';
		    Ext.getBody().mask(PM.mask);
		    
	        this.form_store.proxy.url = load_work_item_form_request+ '&work_item_id='+ rowIdx.data.id + '&security_token='+ user.security_token;
			this.form_store.load();

        	this.displayForm();
        }
    },
    displayForm: function() {
    	
    	if( this.form_store.isLoading() == true )
    	{
    		if( this.dt == null)
    			this.dt = new Ext.util.DelayedTask();
        	this.dt.delay(200, this.displayForm, this);
    	}
    	else
    	{
    		Ext.getBody().unmask();
    		var rowIdx = this.getSelectionModel().getLastSelected();
        	var formDialog = null;
        	var formDialog = Ext.create('Common.AbsoluteDynamicFormDialog', {
	        		form_store: this.form_store,
	        		width: 730,
	        	    height: 500,
	        		form_title: rowIdx.data.task_name,
	        		form_submit_buttons: rowIdx.data.stateOptions,
	        		work_item_id: rowIdx.data.id
            	});  
        	formDialog.show();
        	this.getSelectionModel().deselectAll();
    	}
    },
    update: function() {
		this.store.proxy.url = work_items_unfinished_user_request + '&app_id=' + app.app_id + '&bf_context_id=' + user.bf_context_id +
			'&bf_user_id=' + user.bf_user_id +'&security_token=' + user.security_token;
		this.store.load();
    }    
});

