Ext.define('PM.builder.groups.RankingGroup', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.ranking_group',
	flex : 1,
	anchor: '95%',
	allowBlank :  true,
	readOnly: true,
	editable: false,
	padding		: 10,
	vertical: true,
	columns: 1,
	initComponent: function() {
		
		this.store = Ext.create('Ext.data.Store', {
		    fields: ['name','value'],
		    data : [{"name":"1st Choice", "value":"1"},
		            {"name":"2nd Choice", "value":"2"}
		            ]
		});
		
		this.items = [];
		for( var i = 0; i< this.store.data.items.length ; i++)
		{
			var dataItem = this.store.data.items[i];
			var number = Ext.create('Ext.form.NumberField', {
				fieldLabel: dataItem.data.name,
				labelAlign: 'right',
				readOnly: false,
				minValue: 0
			});
			this.items.push( number );
		}

		this.callParent( arguments );
	},
	updateStore: function( records )
	{
		if ( records == null )
			return;
		
		this.store.loadData( records );
		this.removeAll( true );
		for( var i = 0; i< this.store.data.items.length ; i++)
		{
			var dataItem = this.store.data.items[i];
			var number = Ext.create('Ext.form.NumberField', {
				fieldLabel: dataItem.data.name,
				labelAlign: 'right',
				readOnly: false,
				minValue: 0
			});
			this.add( number );
		}
		this.doLayout();
	}
});