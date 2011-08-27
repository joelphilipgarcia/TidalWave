Ext.define('PM.forms.campaign.EntryForm', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.widget_entry_form',
	border : false,
	title: '3. Entry Form',
	layout: 'border',
	initComponent : function() {
		this.dragTree = Ext.create('Ext.tree.Panel',{
			title   : 'Drag it to the right panel',
			region  : 'west',
			width   : 300,
			margins : '5 5 5 5',
			layout: 'fit',
			root    : {
				text     : 'root',
				expanded : true,
				children : [{
					text  : 'Drag me, please',
					data  : 'Data of the first child',
					leaf  : true,
					_type : 'tab'
				},{
					text  : 'Drag me too',
					data  : 'Other leaf inner data',
					leaf  : true,
					_type : 'tab'
				},{
					text     : 'Form elements',
					expanded : true,
					children : [{
						text     : 'Textfield',
						leaf     : true,
						_type    : 'field',
						_xtype   : 'textfield'
					},{
						text     : 'Checkbox',
						leaf     : true,
						_type    : 'field',
						_xtype   : 'checkbox'
					},{
						text     : 'Combobox',
						leaf     : true,
						_type    : 'field',
						_xtype   : 'combo'
					}]
				}],
			},
			rootVisible : false,
			enableDrag  : true,
			ddGroup     : 'treeDrag',
			bbar        : new Ext.Toolbar({
				items : [{
					xtype   : 'button',
					text    : 'List tabs',
					handler : function () {
						var msg = '';
						this.dropPanel.items.each(function () {
							msg = msg + this.title + '<br/>';
							this.items.each(function () {
								msg = msg + '&nbsp;&nbsp;&nbsp;&nbsp;' + this.xtype + '<br/>';
							});
							msg = msg + '---<br/>';
						});
						Ext.Msg.alert('Tabs List', 'List of all tabs:<br/>' + msg);
					}
				}]
			})
		});

		this.dropPanel = Ext.create('Ext.TabPanel',{
			region      : 'center',
			layout		: 'fit',
			id          : 'dropTarget',
			title       : 'Drop Target',
			margins     : '5 5 5 0',
			afterRender : function () {
				Ext.Panel.prototype.afterRender.apply(this, arguments);
				this.dropTarget = this.body;

				var dd = new Ext.dd.DropTarget(this.dropTarget, {
					ddGroup    : 'treeDrag', //must be the same as for tree
					notifyDrop : function (dd, e, node) {
						return dropHandler(this.dropPanel, dd, e, node);
					}
				});
			},
		});
		
		
		 this.items = [this.dragTree, this.dropPanel];
		 
		this.callParent(arguments);
	},
});

function dropHandler(target, dd, e, node) {
	if (node.node.attributes._type == 'tab') {
		//adding tab to the dropPanel
		var tab = target.add({
			title       : node.node.attributes.data,
			xtype       : 'form',
			closable    : true
		});
		target.setActiveTab(tab);

		return true;
	}
	else if (node.node.attributes._type == 'field') {
		target.getActiveTab().add({
			xtype : node.node.attributes._xtype,
			name  : 'blabla'
		});
		target.doLayout();

		return true;
	}
	//by default we return false (dropping disabled)
	return false;
}
