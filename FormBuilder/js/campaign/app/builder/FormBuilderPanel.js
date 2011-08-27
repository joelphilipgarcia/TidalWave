var control_index = 0;

Ext.define('PM.builder.FormBuilderPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.form_builder_panel',
	id : 'id_form_builder_panel',
	border : false,
	title : '3. Entry Form',
	layout : 'border',
	initComponent : function() {
		var dragTree = Ext
				.create(
						'Ext.tree.TreePanel',
						{
							title : 'Add a Field',
							region : 'west',
							width : 250,
							margins : '5 5 5 5',
							root : {
								text : 'root',
								expanded : true,
								children : [ {
									text : 'Drag and Drop Fields',
									expanded : true,
									children : [
											{
												text : 'First Name',
												name : 'name_first_name',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : null,
												emptyText : '',
												blankText : 'Please enter a first name'
											},
											{
												text : 'Last Name',
												name : 'name_last_name',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : null,
												emptyText : '',
												blankText : 'Please enter a last name'
											},
											{
												text : 'Title',
												name : 'name_title',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : null,
												emptyText : 'Mr, Mrs, Ms, etc',
												blankText : 'Please enter a title'
											},
											{
												text : 'Gender',
												name : 'name_gender',
												leaf : true,
												_type : 'group',
												_xtype : 'PM.builder.groups.GenderGroup'
											},
											{
												text : 'City',
												name : 'name_city',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : null,
												emptyText : '',
												blankText : 'Please enter a valid city'
											},
											{
												text : 'State',
												name : 'name_state',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.StateField',
												_vtype : null,
												emptyText : 'No State Chosen',
												blankText : 'Please enter a valid state'
											},
											{
												text : 'Postal Code',
												name : 'name_postal_code',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : 'zipcode',
												emptyText : '',
												blankText : 'Please enter a valid postal code ex. 94112'
											},
											{
												text : 'Phone Number',
												name : 'name_phone_number',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : 'phone',
												emptyText : 'ex. 415-555-1212',
												blankText : 'Please enter a valid phone number ex. 415-555-1212'
											},
											{
												text : 'Country',
												name : 'name_country',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.CountryField',
												_vtype : null,
												emptyText : 'Choose',
												blankText : 'Please enter a valid country'
											},
											{
												text : 'Address',
												name : 'name_address',
												leaf : true,
												_type : 'group',
												_xtype : 'PM.builder.groups.TextFieldGroup'
											},
											{
												text : 'Email Address',
												name : 'name_email',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : 'email',
												emptyText : '',
												blankText : 'Please enter a valid email address'
											},
											{
												text : 'Date of Birth',
												name : 'name_date_of_birth',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.DateOfBirthField',
												_vtype : null,
												emptyText : '',
												blankText : 'Please enter a valid date of birth'
											},
											{
												text : 'Text Box',
												name : 'name_text_box',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWTextField',
												_vtype : null,
												emptyText : '',
												blankText : ''
											},
											{
												text : 'Multiple Choice',
												name : 'name_multiple_choice',
												leaf : true,
												_type : 'group',
												_xtype : 'PM.builder.groups.MultipleChoiceGroup'
											},
											{
												text : 'Multiple Checkboxes',
												name : 'name_multiple_checkboxes',
												leaf : true,
												_type : 'group',
												_xtype : 'PM.builder.groups.MultipleCheckboxGroup'
											},
											{
												text : 'Drop-down',
												name : 'name_drop_down',
												leaf : true,
												_type : 'field',
												_xtype : 'PM.builder.fields.TWComboBox',
												_vtype : null,
												emptyText : '',
												blankText : ''
											},
											{
												text : 'Ranking',
												name : 'name_ranking',
												leaf : true,
												_type : 'group',
												_xtype : 'PM.builder.groups.RankingGroup',
												emptyText : '',
												blankText : ''
											},
											{
												text : 'Text',
												name : 'name_text',
												leaf : true,
												_type : 'field',
												_xtype : 'Ext.form.DisplayField',
												_vtype : null
											}

									]
								} ]
							},
							listeners : {
								activate : function(panel) {
									if (panel != null) {
										var sm = this
												.getSelectionModel();
										var lastSelected = sm
												.getLastSelected();
										if (lastSelected != null) {
											sm
													.deselect(
															lastSelected,
															false);
											sm
													.selectRange(
															0,
															0);
											// sm.selectWithEvent(lastSelected);
											// sm.setLastFocused(
											// lastSelected );
										}
									}
								}
							},
							viewConfig : {
								plugins : {
									ddGroup : 'treeDrag',
									ptype : 'treeviewdragdrop',
									appendOnly : true
								}
							},
							rootVisible : false
						});

		var store = Ext.create('Ext.data.Store', {
			fields : [ 'name', 'value' ],
			data : [ {
				'name' : 'test',
				'value' : 'test'
			} ],
			proxy : {
				type : 'memory',
				reader : {
					type : 'json',
					root : ''
				}
			}
		});

		this.fieldSettingsPanel = Ext
				.create('PM.builder.panels.FieldSettingsPanel');
		this.formSettingsPanel = Ext
				.create('PM.builder.panels.FormSettingsPanel');

		this.tabPanel = Ext.create('Ext.TabPanel', {
			region : 'west',
			activeTab : 0,
			collapsible : true,
			floatable : false,
			split : true,
			width : 250,
			fieldSettingsPanel : this.fieldSettingsPanel,
			items : [ dragTree, this.fieldSettingsPanel,
					this.formSettingsPanel ],
			setSelectedElement : function(el) {
				this.selectedElement = el;
				this.setActiveTab(this.fieldSettingsPanel);
				this.fieldSettingsPanel.setEntity(el);
			}
		});

		this.dropPanel = Ext.create('PM.builder.FormDropPanel',
				{
					tabPanel : this.tabPanel
				});

		var formNameHeaderPanel = Ext
				.create('PM.builder.panels.FormNameHeaderPanel');
		this.dropPanel.add(formNameHeaderPanel);

		this.formSettingsPanel
				.setFormNameHeaderPanel(formNameHeaderPanel);

		this.items = [ this.tabPanel, this.dropPanel ];

		this.callParent(arguments);
		this.formPanelDropTargetEl = null;

	}

});

function createTargetDropZone(panel) {
	if (panel == null)
		return;

	var dropPanel = panel;
	var formPanelDropTargetEl = dropPanel.body.dom;

	var formPanelDropTarget = Ext
			.create(
					'Ext.dd.DropTarget',
					formPanelDropTargetEl,
					{
						ddGroup : 'treeDrag',
						notifyEnter : function(ddSource, e, data) {

							// Add some flare to invite
							// drop.
							dropPanel.body.stopAnimation();
							dropPanel.body.highlight();
						},
						notifyDrop : function(ddSource, e, data) {
							// try to figure out what has
							// been dropped.
							// it will either be one of
							// three things, an
							// input field, a label or
							// a container.
							// we will check for all three.
							// doesn't work on ie.
							// var target =
							// e.browserEvent.target;
							var input = e.getTarget('input');
							var label = e.getTarget('label');
							var container = e.getTarget('.x-container', 10,
									true);
							var panel = e.getTarget('.x-panel-body');
							if (container != null) {
								// groups of radio buttons
								// and
								// checkboxes use containers
								// as
								// well. we need
								// to find the container
								// that is
								// associated with the
								// form-item.
								var isCorrectContainer = container
										.is('.x-form-item');
								if (!isCorrectContainer)
									container = container.up('.x-form-item',
											10, true);
							}

							if (container == null && label == null
									&& input == null && panel == null)
								return false;

							// Reference the record (single
							// selection)
							// for readability
							if (ddSource.dragData.records !== undefined) {
								var selectedRecord = ddSource.dragData.records[0];

								var inserted = false;
								for ( var k = 0; k < dropPanel.items.items.length; k++) {
									if ((input != null && dropPanel.items.items[k].inputId == input.id)
											|| (label != null && (dropPanel.items.items[k].labelEl != null && dropPanel.items.items[k].labelEl.id == label.id))
											|| (container != null && dropPanel.items.items[k].el == container)) {
										var control = null;
										// Load the record
										// into the form
										if (selectedRecord.raw._type == 'field') {
											control = Ext
													.create(
															selectedRecord.raw._xtype,
															{
																name : selectedRecord.raw.name
																		+ '_'
																		+ control_index,
																fieldLabel : selectedRecord.raw.text,
																vtype : selectedRecord.raw._vtype,
																emptyText : selectedRecord.raw.emptyText,
																blankText : selectedRecord.raw.blankText
															});
											control_index++;
										} else {
											control = Ext
													.create(
															selectedRecord.raw._xtype,
															{
																name : selectedRecord.raw.name
																		+ '_'
																		+ control_index,
																fieldLabel : selectedRecord.raw.text
															});
											control_index++;
										}

										dropPanel.insert(k, control);
										inserted = true;
										break;
									}
								}
								if (inserted == false) {
									var control = null;
									// Load the record into
									// the form
									if (selectedRecord.raw._type == 'field') {
										control = Ext
												.create(
														selectedRecord.raw._xtype,
														{
															name : selectedRecord.raw.name
																	+ '_'
																	+ control_index,
															fieldLabel : selectedRecord.raw.text,
															vtype : selectedRecord.raw._vtype,
															emptyText : selectedRecord.raw.emptyText,
															blankText : selectedRecord.raw.blankText
														});
										control_index++;
									} else {
										control = Ext
												.create(
														selectedRecord.raw._xtype,
														{
															name : selectedRecord.raw.name
																	+ '_'
																	+ control_index,
															fieldLabel : selectedRecord.raw.text
														});
										control_index++;
									}
									dropPanel.add(control);
									// dropPanel.add({
									// xtype :
									// selectedRecord.raw._xtype,
									// name :
									// selectedRecord.raw.text
									// } );
								}
								dropPanel.doLayout();
								// ddSource.view.store.remove(selectedRecord);
							} else {

								// if ( data.field !==
								// undefined &&
								// data.field != null )
								if (data.field != null) {
									var inserted = false;
									for ( var k = 0; k < dropPanel.items.items.length; k++) {
										// first check for
										// input id
										// second check for
										// container
										// third check for
										// label of
										// input element.
										if ((input != null && dropPanel.items.items[k].inputId == input.id)
												|| (label != null && (dropPanel.items.items[k].labelEl != null && dropPanel.items.items[k].labelEl.id == label.id))
												|| (container != null && dropPanel.items.items[k].el == container)) {
											dropPanel.remove(data.field, false);

											dropPanel.insert(k, data.field);
											inserted = true;
											break;
										}
									}

									if (inserted == false) {
										dropPanel.remove(data.field, false);
										dropPanel.add(data.field);
									}
								}
								dropPanel.doLayout();
							}
							return true;
						}
					});
}

function NameValue(name, value) {
	this.name = name;
	this.value = value;
}

Ext.form.field.VTypes["zipcode"] = /^\d{5}$/;
Ext.form.field.VTypes["zipcodeMask"] = /[\d-]/;
Ext.form.field.VTypes["zipcodeText"] = 'Not a valid zipcode. Must be in the format of 55555';

Ext.form.field.VTypes["phone"] = /^([0-9]{3}[-]?){1,2}([0-9]{4})$/;
Ext.form.field.VTypes["phoneMask"] = /[\d-]/;
Ext.form.field.VTypes["phoneText"] = 'Not a valid phone number.  Must be in the format 123-4567 or 123-456-7890 (dashes optional)';
