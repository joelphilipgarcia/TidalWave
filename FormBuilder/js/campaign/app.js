Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('PM', 'app');
Ext.Loader.setPath('Common', '../facebook_common/app');

Ext.require([
	'Ext.form.FieldSet',
    'Ext.layout.component.FieldSet',                  
	'Ext.form.Panel',
	'Ext.form.field.Base',
	'Ext.form.field.Field',
	'Ext.form.field.VTypes',
	'Ext.form.field.Checkbox',
	'Ext.form.field.Text',
	'Ext.form.field.ComboBox',
	'Ext.form.field.Display',
	'Ext.form.field.TextArea',
	'Ext.form.field.Date',
	'Ext.form.field.Radio',
	'Ext.form.RadioManager',
	'Ext.grid.column.Date',
	'Ext.tree.TreePanel',
	'Ext.data.TreeStore',
	'Ext.tree.plugin.TreeViewDragDrop',
	'Ext.grid.plugin.RowEditing',
    'Ext.data.Store',
    'Ext.Panel',
    'Ext.data.Model',
    'Ext.data.HasManyAssociation',
    'Ext.data.BelongsToAssociation',
    'Ext.ModelManager',
    'Ext.util.Observable',
    'Ext.data.Errors',
    'Ext.data.Field',
    'Ext.data.Operation',
    'Ext.Ajax',
    'Ext.util.MixedCollection',
    'Ext.data.Association',
    'Ext.util.Inflector',
    'Ext.app.Application',
    'Ext.form.field.File',
    'Ext.layout.container.Absolute',
    'PM.AppPanel',
    'PM.CampaignPanel',
    'PM.MonitorPanel',
    'PM.SettingsPanel',
    'PM.HelpPanel',
    'PM.panels.CampaignTabPanel',
    'PM.panels.ManageCampaignPanel',
    'PM.dialogs.CampaignDialog',
    'PM.forms.campaign.BannersForm',
    'PM.forms.campaign.DetailsForm',
    'PM.forms.campaign.EntryForm',
    'PM.forms.campaign.PublishForm',
    'PM.forms.campaign.TimelineForm',
    'PM.builder.FormBuilderPanel',
    'PM.builder.panels.FieldSettingsPanel',
    'PM.builder.panels.FormSettingsPanel',
    'PM.builder.panels.MultipleEntryFormPanel',
    'PM.builder.panels.TextFieldFormPanel',
    'PM.builder.PanelFieldDragZone',
    'PM.builder.panels.FormNameHeaderPanel',
    'PM.builder.fields.CountryField',
    'PM.builder.fields.DateOfBirthField',
    'PM.builder.fields.StateField',
    'PM.builder.fields.TWComboBox',
    'PM.builder.fields.TWTextField',
    'PM.builder.groups.GenderGroup',
    'PM.builder.groups.MultipleCheckboxGroup',
    'PM.builder.groups.MultipleChoiceGroup',
    'PM.builder.groups.RankingGroup',
    'PM.builder.groups.TextFieldGroup'
]);

Ext.application({
    name: 'PM',
    appFolder: 'app',
    dt: null,
    count: 0,
    launch: function() {
    		setInnerHtml('user_id', 'Welcome!');
    		
    	    var cmp1 = Ext.create('PM.AppPanel',{
    	    	renderTo: 'content_extjs'
        	});
        	    
        	cmp1.show();
        	cmp1.update();

        	Ext.override(Ext.form.field.Base,
        			{
        				setFieldLabel : function(text) {
        					if (this.rendered) {
        						var labelSeparator = this.labelSeparator;

        						if (typeof labelSeparator == 'undefined') {
        							if (this.ownerCt
        									&& this.ownerCt.layout
        									&& typeof this.ownerCt.layout.labelSeparator != 'undefined')
        								labelSeparator = this.ownerCt.layout.labelSeparator;
        							else
        								labelSeparator = '';
        						}

        						// var formItem = this.el.up('.x-form-item', 10);

        						// if (formItem)
        						// {
        						var label = this.el.child('.x-form-item-label');

        						if (label) {
        							label.update(text + labelSeparator);
        							this.fieldLabel = text;
        						}
        						// }
        					} else
        						this.fieldLabel = text;
        				}
        			});
        	
    }
});




